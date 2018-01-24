/**
 * 登录控制
 * Created by 李小军 on 2017-11-14.
 */
"use strict";
const loginsql=require('../modal/loginModal.js');
function login(req,res){
    'use strict';
    console.log('im in')
    console.log(req.body);
    let user=req.body.user;
    let pwd=req.body.pwd;
    console.log(user,pwd);
    req.session.user=user;
    loginsql.login(user,pwd).then(function (data) {
        if(data.length>0){
            res.send('登录成功')
        }else{
            res.send("账号或密码错误")
        }
    })
}
module.exports={
    login
}