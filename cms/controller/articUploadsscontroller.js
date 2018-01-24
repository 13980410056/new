/**
 * Created by 123 on 2017/11/17.
 */

'use strict';
const upload=require('../modal/articUploadssmodal.js');
function add(req,res){
    var title=req.body.txtTitle;  //标题
    var content=req.body.txtContent;//内容
    var describe=req.body.describe;  //活动时间
    var  MYid=req.body.Mselect;//创建人
   upload.add(title,content,describe,MYid).then(function (data) {
       res.redirect("/pages/ActivityList.html")
       //res.send('添加成功');
   }).catch(function (err) {
       console.log(err)
   })
}
//新闻
function newadd(req,res){
    var title=req.body.txtTitle;
    var content=req.body.txtContent;
    var describe=req.body.describe;
    var  MYid=req.body.Mselect;
    upload.newadd(title,content,describe,MYid).then(function (data) {
        res.redirect("/pages/news.html");
        //res.send('添加成功');
    }).catch(function (err) {
        console.log(err)
    })
}
module.exports={
    add,
    newadd
};
