
const { Router } = require("express");
const express = require("express");
const router = express.Router();

// 引入 User 对象
const UserIn = require("../module/userModule");


/**
 * @api {post} /user/register 用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 用户密码
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

// 注册接口
router.post("/register", (req, res) => {
  // 获取数据 body-parse
  let { us, ps } = req.body;

  if (us && ps) {
    // 唯一性判断 用户名查询
    UserIn.find({ us })
      .then((data) => {
        // 如果用户名的长度为 0 则进行用户注册
        if (data.length === 0) {
          // 不存在用户可以注册
          return UserIn.insertMany({ us: us, ps: ps });
        } else {
          // 用户名已经存在 不能进行注册
          res.send({ error: -3, msg: "用户名重复,请重新输入" });
        }
      })
      // 暂不理解
      .then(() => {
        res.send({
          error: 0,
          msg: "注册成功",
        });
      })
      .catch((error) => {
        res.send({
          error: 2,
          msg: "注册失败",
        });
      });
  } else {
    return res.send({ error: -1, msg: "参数错误" });
  }
});


/**
 * @api {post} /user/login 用户登录
 * @apiName 用户登录
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 用户密码
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

// 登录接口
router.post("/login", (req, res) => {
  let { us, ps } = req.body;

  if (!us || !ps) {
    res.send({ err: -1, msg: "参数错误" });
  }
  //  UserIn.find({us:us,ps:ps});
  UserIn.find({ us, ps })
    .then((data) => {
      // 成功: 响应出查询数据
      if (data.length > 0) {
        res.send({ error: 0, msg: "right login" });
      } else {
        res.send({
          error: -2,
          msg: "用户名或密码错误",
        });
      }
    })
    .catch((err) => {
      // 失败: 给出失败信息
      return res.send({ error: -1, msg: "内部错误" });
    });
});
module.exports = router;
