/* ********************************* */
// 创建用户表
/* ********************************* */

const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  us: { type: String, required: true },
  ps: { type: String, required: true },
  age: Number,
  sex: { type: Number, default: 0 },
});

// 使用 将 schema 对象转换为数据模型
var UserIn = mongoose.model("UserIn", userSchema); // 该数据对象和集合关联("集合名",schema对象)

// 抛出
module.exports = UserIn;
