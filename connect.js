/* ********************************* */
// 连接数据库
/* ********************************* */

const mongoose = require("mongoose");

// 连接数据库
mongoose.connect(
  "mongodb://root:root@127.0.0.1:27017/school?authSource=admin",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log("数据库连接失败: ", err);
    } else {
      console.log("数据库连接成功");
    }
  }
);
