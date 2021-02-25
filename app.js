/* ********************************* */
// 服务器程序入口文件 接口文档地址: https://apidocjs.com/ 
/* ********************************* */

const express = require("express");
const app = express();

// 引入数据库
const db = require("./connect");

// 获取 post 请求参数插件
const bodyparse = require("body-parser");
app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

// 引入路由
const userRouter = require("./router/userRouter");
app.use("/user", userRouter);

// TODO:  引入发送邮箱模块
const mail = require("./lib/sendEmail");
app.post("/getMail", (req, res) => {
  res.send("逻辑为处理完···");
});

app.listen(3031, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("服务器启动成功····");
  }
});
