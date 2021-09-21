const mysql = require("mysql")
require("dotenv").config();
const Promise = require("bluebird")

// 設定連線資料
let connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //設定預設值
  connectionLimit: process.env.CONNECTION_LIMIT || 10,
});

connection = Promise.promisifyAll(connection);
module.exports = connection
