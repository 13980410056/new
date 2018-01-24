/**
 * 登录路由
 * Created by 李小军 on 2017-11-14.
 * update by zpp on 2017-11-15  10.30
 */

'use strict';
const express=require('express');
const loginroute=express.Router();
const loginc=require('../controller/loginControl.js');
loginroute.route('/login.do').post(loginc.login);
module.exports=loginroute;
