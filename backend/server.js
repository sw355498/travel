const cors = require ("cors");
const express = require('express')
const connection = require('./utils/db')

//利用express建立了一個express application
let app = express();

//處理cors問題
app.use(cors());

//使用這個中間件，才可以讀到body的資料
app.use(express.urlencoded({extended:true}));
//使用這個中間件，才可以解析到json的資料
app.use(express.json());

app.use((req,res,next)=>{
    console.log("我是第個一個中間件",req.body);
    next();
})


//API
app.get("/guild",async (req,res,next)=>{
// -----------------------頁碼----------------------------------
    // let page= req.query.page || 1; //目前在第幾頁，預設第一頁
    // const perPage =6; //每一頁資料是6筆

    //todo1:總共有幾筆
    // let count = await connection.queryAsync("SELECT COUNT(*) AS total FROM guild ");
    // console.log(count);
    // const total = count[0].total;
    // const lastPage = Math.ceil(total/perPage);//知道有幾頁
    // console.log(total,lastPage);

    //todo2:取得這一頁應該要有的資料
    //page1:1-6
    //page2:11-20
    //limit:要取幾筆資料（這一頁要幾筆資料）
    //offset：要跳過多少
    // let offset = (page - 1) * perPage;
    let result = await connection.queryAsync("SELECT * FROM guild");
    // let result = await connection.queryAsync("SELECT guild.* , GROUP_CONCAT(tribes.tribe SEPARATOR',') AS 'tribe'FROM guild, tribes WHERE guild.id = tribes.id GROUP BY guild.id LIMIT ? OFFSET ? ",[perPage,offset]);

    // let pagination = {
    //     total, //共幾筆
    //     perPage,//一頁幾筆
    //     lastPage,//總共幾頁（最後一頁）
    //     page//目前在第幾頁
    // }
    res.json({result});
})

app.get("/guild/:guildNum",async (req,res,next)=>{
    // ("SELECT * FROM guild_tribes JOIN guild on guild_tribes.guild_id = guild.id JOIN tribes on guild_tribes.tribes_id = tribes.id WHERE guild.id = ?",[req.params.guildNum])
    let result = await connection.queryAsync("SELECT * FROM guild WHERE id = ?",[req.params.guildNum]);
    res.json(result);
})


//註冊驗證
const {body,validationResult} = require ('express-validator');
const registerRule = [
    body("email").isEmail().withMessage("請填寫正確格式的Email"),
    body("password").isLength({min:6}).withMessage("密碼長度至少為6"),
];

//引入加密套件
const bcrypt = require ("bcrypt");
//註冊
app.post("/auth/register",registerRule,async (req,res,next) => {
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

    //檢查帳號是否重複
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
app.post("/auth/login", async (req, res, next) => {
    let member = await connection.queryAsync(
        "SELECT * FROM member WHERE email = ? ; ",[req.body.email]
        );
        if(member.length === 0 ){
           return next({
               status:400,
               message:"找不到帳號",
           });
        }
    
    res.json({});
})


/*購物車付款資訊 */
app.post("/pay",(req, res, next) => {
    res.json({})
})

/* 全部會員購買紀錄 */
app.get("/order_form", async(req, res, next) => {
    try {
        let result = await connection.queryAsync("SELECT * FROM order_form");
        res.json(result);
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

APIrouter.get('/journeys', async (req, res, next) => {
// let page = req.query.page || 1 //目前在第幾頁
// const perPage = 3 //每一頁資料
//  let count = await connection.queryAsync('SELECT COUNT(*) As total FROM journey')
//  const total = count[0].total 
//  const lastPage = Math.ceil(total / perPage)
//  console.log(total, lastPage)
//  let offset = (page-1) * perPage
 
let result = await connection.queryAsync('SELECT * FROM journey ')


// let pagination = {
//     total, //總共14筆資料
//     perPage, //一頁有幾頁
//     lastPage, //總共有幾頁
//     page , //目前在第幾頁
// }
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

app.use((req, res, next) => {
  res.status(404).json({ message: 'NOT FOUND' })
})



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
