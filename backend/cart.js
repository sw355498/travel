// 套件引用
/* 利用 express 建立 express application */
const express = require('express')
const connection = require('./utils/db')

let app = express();

//處理 cors 問題
const cors = require('cors')
app.use(cors())

// app.use使用中間件
app.use((req, res, next) =>{
    let current = new Date();
    console.log(`訪問時間 at ${current.toISOString()}`)
    next()
})

app.use((req, res, next) => {
    console.log("第二個中間件")
    next()
})

//router
app.get("/" ,(req, res, next) => {
    res.send("hello with nodemon")
})

app.get("/shoopcart",(req, res, next) => {
    res.send("shoopcart us")
})

/* 全部會員購買紀錄 */
app.get("/order_form", async(request, response, next) => {
    try {
        let result = await connection.queryAsync("SELECT * FROM order_form");
        response.json(result);
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


// 404 放所有路由最下方
app.use((req, res, next) => {
    res.status(404).json({ message: "NOT FOUND" });
});

app.listen(3002,async () => {
    console.log("web server啟動了");
})
