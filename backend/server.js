const cors = require('cors')
const express = require('express')
const connection = require('./utils/db')

// 利用express 建立一個express application

const app = express()

app.use(cors())

const APIrouter = express.Router();

APIrouter.get('/journeys', async (req, res, next) => {
  const result = await connection.queryAsync('SELECT * FROM journey')
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

app.listen(3001, async function () {
  // 因為改成pool,不用手動連線
  // await connection.connectAsync();
  console.log('我們的webserver啟動了')
})
