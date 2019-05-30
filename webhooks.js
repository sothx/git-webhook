// Node.js核心API导入
// 文件操作
const fs = require('fs')
// 路径操作
const path = require('path')
// linux命令操作
const process = require('child_process')
module.exports = {
  'webhooks': (req, res) => {
    // res.send('测试')
    // 项目存放目录
    const PROJECT_DIR = '/www/shtools/'

    // 自定义字串掩码 用于验证
    const ACCESS_TOKEN = 'ycL7wTVwJNmlEHn3B2DBzrZNrxTz0yZu'

    const logMsg = {
      'token': 'error token ' + new Date() + ' \n',
      'ip': 'error ip ' + new Date() + ' \n',
      'success': 'success ' + new Date() + ' \n'
    }

    //接受的ip数组，也就是允许哪些IP访问这个文件 这里是 Git 服务器IP
    // const ACCESS_IP = [
    //   '106.14.3.173'
    // ]

    // 获取访客token和ip
    let token = req.query.token
    // let ip = ''

    // 校验token
    console.log(req.query.token, ACCESS_TOKEN)
    if (ACCESS_TOKEN !== req.query.token) {
      fs.appendFile(path.join(PROJECT_DIR, 'hooks.txt'), logMsg.token, (err) => {
        if (err) return console.log('追加日志失败！' + err.message)
        console.log('追加日志成功')
      })
      res.send({ status: '403', data: 'token错误' })
      return false
    }

    // 校验ip
    // if (ACCESS_IP.indexOf(req.ip) === -1) {
    //   fs.appendFile(path.join(PROJECT_DIR, 'hooks.txt'), logMsg.ip, (err) => {
    //     if (err) return console.log('追加日志失败！' + err.message)
    //     console.log('追加日志成功')
    //   })
    //   res.send({ status: '403', data: 'ip错误' })
    //   return false
    // }

    // 执行linux命令
    //切换到该目录
    res.send({ status: '200', data: '更新成功' })
    process.exec(`cd ${PROJECT_DIR}&&git pull&&npm install&&npm run build:pro`)

    fs.appendFile(path.join(PROJECT_DIR, 'hooks.txt'), logMsg.success, (err) => {
      if (err) return console.log('追加日志失败！' + err.message)
      console.log('追加日志成功')
    })


  }
}