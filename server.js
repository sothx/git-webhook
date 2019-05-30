
// 第三方模块导入
const express = require('express')
const app = express()

// 导入路由
const router = require('./router.js')
app.use(router)


app.listen(3035, () => {
  console.log('webhooks server running at http://127.0.0.1:3035')
})