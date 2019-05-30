# 安装
npm install
# 使用
推荐安装pm2，让node.js常驻
```
npm install -g pm2
cd /webhook目录
pm2 start ./server.js
再安装nginx配置反代理到node.js的本地端口
```
域名/webhooks即为webhook路径
通过域名query传入webhooks.js定义的token，即可校验是否来自自家服务器，配有ip检测，默认关闭，可自行开启