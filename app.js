// app.js
const express = require('express')
const dayjs = require('dayjs')
const app = express()
const port = 3000

// Required log format: 2019-5-17 18:51:12 | GET from /
app.use(function (req, res, next) {
  // 使用 dayjs 整理時間格式
  const timeStamp = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const requestType = req.method
  const requestUrl = req.originalUrl
  const log = `${timeStamp} | ${requestType} from ${requestUrl}`
  console.log(log)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
