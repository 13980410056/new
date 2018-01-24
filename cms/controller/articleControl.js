/**
 * 文章管理
 * Created by 李小军 on 2017-11-14.
 * update be zpp on 2017-11-15
 * 前缀加New 的是  新闻相关的控制
 */

"use strict";
const article=require('../modal/articleModal.js');
function show(req,res){
    'use strict';
    //console.log(req.body);
    var page=req.query.page;
    var defpage=req.query.defpage;
    article.show(page,defpage).then(function (data) {
      //  console.log(data)
        if(data.length>0){
            res.send(data)
        }else{
            res.send("没有读取到数据")
        }
    }).catch(function(){
        res.send('happed eerr')
    })
}
function NewShow(req,res){
    'use strict';
    //console.log(req.body);
    var page=req.query.page;
    var defpage=req.query.defpage;
    article.NewShow(page,defpage).then(function (data) {
      //   console.log(data,'我数返回的数据')
        if(data.length>0){
            res.send(data)
        }else{
            res.send("没有读取到数据")
        }
    })
}
function update(req,res){
    let id=req.body.id;
  //  console.log(id +'我是传过来的ID')
    article.Mdelete(id).then(function (data) {
       // console.log(data+'11111111')
            res.send('删除成功')

    })
}
function Newupdate(req,res){
    console.log('我进来了')
    let id=req.body.id;
    article.Newdelete(id).then(function (data) {
        res.send('删除成功')

    })
}
function Search(req,res){
    let title=req.body.title;
    let option=req.body.option;
    let state=req.body.state;
    article.search(title,option,state).then(function (data) {
        res.send(data)
    })
}
function NewSearch(req,res){
    let title=req.body.title;
    let option=req.body.option;
    let state=req.body.state;
    article.NewSearch(title,option,state).then(function (data) {
        console.log(data)
        res.send(data)
    })
}
function listAll(req,res){
    article.listAll().then(function(data){
        res.send(data)
    })
}
function NewlistAll(req,res){
    article.NewlistAll().then(function(data){
        res.send(data)
    })
}
function author (req,res){
    article.author().then(function(data){
        res.send(data)
    })
}



module.exports={
   show,
    update,
    Search,
    listAll,
    NewShow,
    Newupdate,
    NewlistAll,
    NewSearch,
    author
}
