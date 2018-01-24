/**
 * 驱动程序
 * Created by 李小军 on 2017-11-14.
 * Created by 朱银莹 on 2017-11-15.
 * Created by 田杰 on 2017-11-16.17：30
 * Created by 田杰 on 2017-11-17.23：20
 */
"use strict"
const myExpress = require("express");
const app = myExpress();
const bodyParser = require("body-parser");
const myejs=require("ejs");
const myMorgan=require("morgan");
const activityRoute = require("./route/activityRoute.js");//活动表路由//田杰============
const actpartipantRoute = require("./route/actParticipantRoute.js");//活动参赛路由//田杰============
const participantWorksRoute = require("./route/participantWorksRoute.js");//参赛作品路由//田杰============
const articUploadssRuote = require("./route/articUploadssRuote.js");//修改添加内容//田杰============
const viewRoute = require("./route/viewRoute.js");

const articleRoute = require("./route/articleRoute.js");
const communityRoute = require("./route/communityRoute.js");
const loginRoute = require("./route/loginRoute.js");
const mallRoute = require("./route/mallRoute.js");
const orderFormRoute = require("./route/orderFormRoute.js");
const otherRoute = require("./route/otherRoute.js");
const personRoute = require("./route/personRoute.js");
app.use(multer({dest:'./public/upload',rename:function (filedname,filename) {//田杰======2017-11-17==23:20======
  return filename+"_"+Date.now();                                              //田杰====2017-11-17==23:20========
}}));                                                                          //田杰====2017-11-17==23:20========
app.use(myMorgan("dev"));                                                       //田杰====2017-11-17==23:20========
app.use(bodyParser.urlencoded({extended:false,uploadDir:'./public/upload'}));    //田杰===2017-11-17==23:20=========
app.use(myExpress.static(path.join(__dirname,"public")));//活动            //田杰=======2017-11-17==23:20=====
app.use('/articUploadRuotess',articUploadssRuote);//活动内容新增               //田杰=======2017-11-17==23:20=====

app.use(bodyParser.urlencoded({extended:false}));
app.set("views",__dirname+"/views");
app.engine("html",myejs.__express);
app.set("view engine","html");

// app.use("/",viewRoute);
app.use(myExpress.static(__dirname+"/public"));
app.use('/activity',activityRoute);                         //田杰========2017-11-17==23:20======
app.use('/actpartipant',actpartipantRoute);                //田杰=====2017-11-17==23:20=======
app.use('/participantWorks',participantWorksRoute);        //田杰======2017-11-17==23:20======
// app.use('/article',articleRoute);
// app.use('/community',communityRoute);
// app.use('/login',loginRoute);
// app.use('/mall',mallRoute);
app.use('/order',orderFormRoute);
// app.use('/other',otherRoute);
// app.use('/person',personRoute);

//===================田杰====2017-11-17==23:20======
app.post("/uploadImg.do",function(req,res){
  var fname = req.files.imgFile.path.replace("public\\upload\\", "").replace("public/upload/", "");
  var info = {
    "error": 0,
    "url": "/upload/"+fname
  };
  res.send(info);
})
app.post("/acticles.do",function(req,res){
  console.log(req.body);
});
//===================田杰================
app.listen(7777,function(){
  console.log("服务启动");
});