const cors = require ("cors");
const express = require('express')
const connection = require('./utils/db')
const moment = require('moment')
require('dotenv').config()
const path = require ('path')
//註冊檢驗middleware
const { loginCheckMiddleware } = require("./middlewares/auth");

//利用express建立了一個express application
let app = express();

//處理cors問題:允許前端打api
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,

    })
);




// 啟用 session 機制
const expressSession = require("express-session");
// 引入 file store
var FileStore = require("session-file-store")(expressSession);
app.use(
  expressSession({
    // 設定 session 的 store 為 FileStore
    store: new FileStore({ path: path.join(__dirname, "..", "sessions") }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    // 強制將未初始化的session存回 session store，未初始化的意思是它是新的而且未被修改。
    // 用 FileStore 的話建議設定一下
    saveUninitialized: false,
  })
);


//使用這個中間件，才可以讀到body的資料
app.use(express.urlencoded({extended:true}));
//使用這個中間件，才可以解析到json的資料
app.use(express.json());

app.use((req,res,next)=>{
    console.log("我是第個一個中間件");
    next();
})

//註冊驗證
const {body,validationResult} = require ('express-validator');
const registerRule = [
    body("email").isEmail().withMessage("請填寫正確格式的Email"),
    body("password").isLength({min:6, max:12}).withMessage("輸入6-12位密碼"),
    body("confirmPassword")
    .custom((value, {req})=>{
        return value === req.body.password;
    })
    .withMessage("兩次密碼輸入不一致"),
];
//引入加密套件
const bcrypt = require ("bcrypt");
const { join } = require("bluebird");
//註冊
app.post("/register",registerRule,async (req,res,next) => {
    const validateResult = validationResult(req);
    //validateResult不是空的，代表有錯誤
    if(!validateResult.isEmpty()){
        //把錯誤拿出來
        let error = validateResult.array();
        console.log(error);
        //回復前端第一個錯誤
        return res
        .status(400)
        .json({field:error[0].param,message:error[0].msg})
    }

    let member = await connection.queryAsync("SELECT * FROM member WHERE email = ?; ",[req.body.email]);
    if(member.length > 0 ){
       return next({
           status:400,
           message:"此帳號已經註冊過了",
       });
    }

    //確認有拿到資料
    console.log(req.body);
    //建立使用者，存進資料庫
    //密碼隱藏:bcrypt.hash(明文，salt)
    let hashPassword = await bcrypt.hash(req.body.password,10);
    let result = await connection.queryAsync(
        "INSERT INTO member(member_name, email, password) VALUES (?);",
        [[req.body.name,req.body.email,hashPassword]] 
    );
    res.json({});
})




//登入
app.post("/login", async (req, res, next) => {
    console.log(req.body);

    if (req.body.email === "" || req.body.email === ' ') {
        return next({
          status: 400,
          message: "請輸入Email",
        });
      }    


    // - 確認有沒有帳號 (email 是否存在)
    let member = await connection.queryAsync(
      "SELECT * FROM member WHERE email = ?;",
      [req.body.email]
    );

    console.log(member);


    if (member.length === 0) {
      // member 陣列是空的 => 表示沒找到
      return next({
        status: 400,
        message: "帳號或密碼錯誤",
      });
    }    

    // 有找到，而且應該只會有一個（因為我們註冊的地方有檢查 email 有沒有重複）
    member = member[0];
    // - 密碼比對
    let result = await bcrypt.compare(req.body.password, member.password);
    if (!result) {
      // - 不一致，回覆錯誤(400)
      return next({
        // code: "330002",
        status: 400,
        message: "帳號或密碼錯誤",
      });
    }
    //     - 紀錄 session
    let returnMember = {
      id: member.id,
      email: member.email,
      name: member.member_name,
    };
    req.session.member = returnMember;
    // console.log(req.sessionID);
    if (! req.session.member ){
        console.log("no");
    }else{
        console.log("yes");
    }
    // 回覆給前端
    res.json({
        id: member.id,
        email: member.email,
        name: member.member_name,
      });
  });
  
//登出
app.get("/logout", (req, res, next) => {
    req.session.member = null;
    res.sendStatus(202);
  });


//Guild API
app.get("/guild",   async (req,res,next)=>{
    let result = await connection.queryAsync("SELECT * FROM guild");
    res.json(result);
})

app.get("/GuildInfo/:id",async (req,res,next)=>{
  const {id} = req.params
  const result = await connection.queryAsync('SELECT * FROM guild WHERE id=?', [id])
  res.json(result[0])
//   console.log(result[]);
})


app.get('/guild/journeys',async(req,res,next)=>{
    const result = await connection.queryAsync('SELECT * FROM journey')
    res.json(result)
  })

/* 推薦購買 */
app.get("/shoppingcart_recommend", async(req, res, next) => {
    try {
        let result = await connection.queryAsync("SELECT * FROM journey ORDER BY amountRating");
        res.json(result);
    } catch (e) {
        console.error("shoop",e);
    }
});
  

/*購物車付款資訊 */
app.post("/pay",async (req, res, next) => {
    let isLogin = req.body.isLogin
    //產生一個6位數亂碼加上時間用以做訂單編號
    let orderTime = new Date()
    let orderCode = ''

    for(let i = 0; i < 6; i++){
        orderCode += Math.floor(Math.random()*10)
    }
    orderNumber =`${orderCode}${moment(orderTime).format('YYYYMMDD')}`
    if(isLogin != "false"){
        //名子欄位檢查
        let firstName = req.body.payData.firstName.replace(/\s*/g,"")//去除所有空格號
        if(firstName == "" || firstName == " "){
            next({
                status:400,
                message:"請填寫名子",
            });
        }
        //姓氏欄位檢查
        let surName = req.body.payData.surName.replace(/\s*/g,"")//去除所有空格號
        if(surName == "" || surName == " "){
            next({
                status:400,
                message:"請填寫姓氏",
            });
        }
        //連絡電話欄位檢查
        let format = /^09[0-9]{8}$/ //手機驗證格式
        let phone = req.body.payData.phone
        if(phone.length > 10 || phone.length < 10 || !format.test(phone)){
            next({
                status:400,
                message:"連絡電話未填寫或填寫錯誤",
            });
        }
        //國家/地區欄位檢查
        let nation = req.body.payData.nation
        if(nation == ""){
            next({
                status:400,
                message:"請選擇 國家/地區",
            });
        }
        //地址欄位檢查
        let address = req.body.payData.address.replace(/\s*/g,"")//去除所有空格號
        if(address == "" || address == " "){
            next({
                status:400,
                message:"請填寫地址",
            });
        }
        //電子郵件欄位檢查
        //輸入的數據必須包含 ＠ 符號和點號(.)；同时 ＠ 不可以是首字符，並且 ＠ 之后需有至少一個點號
        let orderEmail = req.body.payData.email
        let atpos = orderEmail.indexOf("@")
        let dotpos = orderEmail.lastIndexOf(".")
        if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= orderEmail.length){
            next({
                status:400,
                message:"電子郵件填寫錯誤",
            });
        }
        //國家/地區欄位檢查
        let bill = req.body.payData.bill
        if(bill == ""){
            next({
                status:400,
                message:"請選擇發票處理方式",
                });
        }
        //檢查資料庫卡號是否存在
        let cardNumber = await connection.queryAsync ("SELECT * FROM card_data WHERE number=?",[req.body.payData.number]);
        if(cardNumber.length <= 0 ){
            next({
                status:400,
                message:"卡號輸入錯誤",
            });
        }
        //驗證資料庫信用卡名是否相同
        let cardName = await connection.queryAsync ("SELECT * FROM card_data WHERE name=?",[req.body.payData.name]);
        if(cardName.length <= 0 ){
            next({
                status:400,
                message:"持卡人姓名錯誤",
            });
        }
        //驗證資料庫信用卡有效日期是否相同
        let cardExpiry = await connection.queryAsync ("SELECT * FROM card_data WHERE expiry=?",[req.body.payData.expiry]);
        if(cardExpiry.length <= 0 ){
            next({
                status:400,
                message:"有效日期錯誤",
            });
        }
        //驗證資料庫信用卡cvc是否相同
        let cardCvc = await connection.queryAsync ("SELECT * FROM card_data WHERE cvc=?",[req.body.payData.cvc]);
        if(cardCvc.length <= 0 ){
            next({
                status:400,
                message:"cvc錯誤",
            });
        }

        let journeyData = req.body.journey
        for(let n = 0; n < journeyData.length; n++){
            let go_time = moment(journeyData[n].go_time).format('YYYY-MM-DD')
            let totalprice = journeyData[n].price * journeyData[n].amount //每筆行程總價格
        await connection.queryAsync(
                "INSERT INTO order_detail (guide, journey_id, name, img, go_time, amount, price, order_number) VALUES (?);",
                [[ 
                    journeyData[n].guild,
                    journeyData[n].id,
                    journeyData[n].name,
                    journeyData[n].img,
                    go_time,
                    journeyData[n].amount,
                    totalprice,
                    orderNumber,
                ]]
        );
    }
        await connection.queryAsync(
            "INSERT INTO order_form (member_email, sur_name, first_name, phone, nation, address, email, card_number, bill_status, order_status, order_number) VALUES (?);",
            [[ 
                req.body.isLogin,
                req.body.payData.surName,
                req.body.payData.firstName,
                req.body.payData.phone,
                req.body.payData.nation,
                req.body.payData.address,
                req.body.payData.email,
                req.body.payData.number,
                req.body.payData.bill,
                "已付款",
                orderNumber,
            ]]
        );
        res.json({orderNumber})
    }else{
        next({
            status:401,
            message:"尚未登入會員",
        })
    }
})

/* 全部會員購買紀錄(分頁) */
app.get("/order_form", async(req, res, next) => {
    try {
        let page = req.query.page || 1 ;//目前在第幾頁,預設第1頁
        const perPage = 1;//每一頁筆數
        let count = await connection.queryAsync("SELECT COUNT(*) AS total FROM order_form");;
        const total = count[0].total//總共有幾筆
        const totalPages = Math.ceil(total / perPage)//總夠有幾頁
        //取得當頁資料
        let offset = (page-1) * perPage//要跳過的比數
        let result = await connection.queryAsync("SELECT * FROM order_form LIMIT ? OFFSET ?",[perPage, offset]);
        let pagination = {
            total,
            perPage,
            totalPages,
            page
        }
        res.json({result,pagination});//回覆給前端
    } catch (e) {
        console.error(e);
    }
});

/* 會員個別購買紀錄 */
app.get("/order_form/:memberId", async(req, res, next) => {
    try {
        let result = await connection.queryAsync(
            "SELECT * FROM order_form WHERE member_id=?",
            [req.params.memberId]
        );
        res.json(result);
    } catch (e) {
        console.error(e);
    }
});


const APIrouter = express.Router();

APIrouter.get('/journeyinfo/MapApiKey', async (req, res, next) => {
    const MAP_API_Key = process.env.MAP_API_Key
    res.json(MAP_API_Key)
})

APIrouter.get('/journeys', async (req, res, next) => {
let result = await connection.queryAsync('SELECT * FROM journey ')
res.json(result)
})

APIrouter.get('/journeys/:id', async (req, res, next) => {
  const {id} = req.params
  const result = await connection.queryAsync('SELECT * FROM journey WHERE _id=?', [id])
  res.json(result[0])
})

APIrouter.get('/home/tribes',async(req,res,next)=>{
  const result = await connection.queryAsync('SELECT * FROM tribes')
  res.json(result)
})
APIrouter.get('/home/langs', async (req, res, next) => {
  const result = await connection.queryAsync('SELECT * FROM lang')
  res.json(result)
})

APIrouter.get('/journeyinfo/guides',async(req,res,next)=>{
  const result = await connection.queryAsync('SELECT * FROM guild')
  res.json(result)
})

APIrouter.put("/journeys/:id/like", async (req, res, next) => {
  const {id} = req.params
  const result = await connection.queryAsync('SELECT status FROM journey WHERE _id=?', [id])
  const status = result[0].status
  await connection.queryAsync('UPDATE journey SET status=? WHERE _id=?',[
    !status,
    id,
  ])
  res.status(204).end()
})

app.use("/api", APIrouter)

//處理找不到路由的錯誤的中間件
app.use((req,res,next)=>{
    res.status(404).json({message:"NOT FOUND"});
})


//有四個參數，用來處理錯誤 Exception用的
app.use((err,req,res,next)=>{
    console.error(err);
   res.status(err.status).json({message:err.message});
})

const port = 3001
app.listen(port, async function () {
    //因為改成pool，所以不用手動連線了
    // await connection.connectAsync();
    console.log(`我的server${port}跑起來了~`);
});
