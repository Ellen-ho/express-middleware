// app.js
const express = require('express')
const dayjs = require('dayjs')
const app = express()
const port = 3000

// Required log format: 2019-5-17 18:51:12 | GET from /
// 在路由系統中，對所有請求設定統一前置處理
// 瞭解時間戳記的相關方法
// 伺服器接到任一請求時，server log 上能正確印出時間、印出請求中的 HTTP 與網址
app.use(function (req, res, next) {
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
