/**
 * Created by pall 田杰 2017/11/16.
 */
"use strict";
const article=require('../modal/participantWorksModal.js');
function show(req,res){
    'use strict';
    //console.log(req.body);
    var page=req.query.page;
    var defpage=req.query.defpage;
    console.log(page+"我来了！");
    article.show(page,defpage).then(function (data) {
        console.log(data)
        if(data.length>0){
            res.send(data)
        }else{
            res.send("账号或密码错误")
        }
    })
}
function update(req,res){
    let id=req.body.id;
    let state=req.body.state;
    console.log(id +'我是传过来的ID')
    article.Mdelete(state,id).then(function (data) {
         console.log(data+'11111111999')
        res.send('删除成功')
    }).catch(function(err){
        res.send(err)
    })
}
function Search(req,res){
    let title=req.body.title;
    let option=req.body.option;
    var state=req.body.state;
    console.log("aaaaaaaa"+state)

    console.log("bbbbbb"+state)
    article.search(title,option,state).then(function (data) {
        console.log(data+'我是读取的数据')
        res.send(data)
    })
}
function listAll(req,res){
    article.listAll().then(function(data){
        console.log(data,'我在这人')
        res.send(data)
    })
}
function listAllName(req,res){
    article.listAllName().then(function(data){
        console.log(data,'我在这人')
        res.send(data)
    })
}
function EvaluateImg(req,res) {
    let id=req.body.id;

    article.EvaluateImg(id)
        .then(function (data) {

            // res.send(data);
            if (data.length>0){
                res.send(data);
            }else {
                res.send("查询出错");
            }
        })
        .catch(function (err) {
            res.send("数据库出错");
            console.log(err)
        })
}
module.exports={
    show,
    update,
    Search,
    listAll,
    EvaluateImg,
    listAllName
}