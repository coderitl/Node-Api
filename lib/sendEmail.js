"use strict";
const nodemailer = require("nodemailer");

// 创建发送邮件对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com", // 发送方邮箱类型: QQ 网易 ···
  port: 465,
  secure: true, //  true for 465, false for other ports
  auth: {
    user: "3327511395@qq.com", // 发送方邮箱地址
    pass: "", // smtp 验证码
  },
});

function send(email, code) {
  // 邮件信息
  let mailobj = {
    from: "'数据来源于' <xxx@qq.com>", // 邮件发送地址
    to: email,
    subject: "Node 发送邮箱测试", // 标题
    text: `您的验证码是${code},有效期十分钟`,
    // html: "<h1> 发送成功 Node Message </h1>",
  };

  // TODO:  需要做 Promise 处理 发送邮件
  transporter.sendMail(mailobj, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}


/* { send: send }==>  let obj = { send: send }; */
module.exports = { send: send };
