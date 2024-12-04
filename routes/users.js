const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const JWT = require('jsonwebtoken');
const config = require("../ultil/tokenConfig");

//localhost:3000/users/all
//lấy toàn bộ danh sách user
router.get("/all", async function(req, res){
  var list = await userModel.find({old:{$gt:23}}); //lấy
  res.json(list);
});

//lấy toàn bộ danh sách user có độ tuổi lớn hơn X,
//với X là số mà người dùng nhập vào

router.get("/findOld", async function (req, res) {
  //query
  const {oldX} = req.query;
  var list = await userModel.find({old: {$gt: oldX}});
  res.json(list);
});

router.get("/findOld2/:oldX/:value01/:value02", async function (req, res) {
  //query
  const {oldX, value01, value02} = req.params;
  var list = await userModel.find({old: {$gt: oldX}});
  res.json(list);
});


router.post("/login", async function(req, res){
  try{
      const {username, password} = req.body;
      const checkUser = await userModel.findOne({username: username, password: password});
      if(checkUser == null){
          res.status(200).json({status: false, message: "Username và mật khẩu không đúng"});
      }else{
        const token = JWT.sign({username: username}, config.SECRETKEY, {expiresIn: '30s'});
        const refreshToken = JWT.sign({username: username}, config.SECRETKEY, {expiresIn: '1d'});
        res.status(200).json({status: true, message: "Đăng nhập thành công", token: token, refreshToken: refreshToken});
      }
  }catch(e){
      res.status(400).json({status: false, message: "Đã lỗi xảy ra"});
  }
});
  

module.exports = router;
