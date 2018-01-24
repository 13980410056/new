/**
 * Created by Administrator on 2017-11-17.
 */
'use strict';
const express=require('express');
const articUploadRuote=express.Router();
articUploadRuote.route("/upload.do").post(function (req,res) {
  var arr=[];
  var data=req.files.avatar;
  for (var i=0;i<data.length;i++){
    console.log(data[i].path);
    var reName=data[i].path.replace("public\\upload\\", "").replace("public/upload/", "");
    var url="upload/"+reName;
    arr.push(url);
  }
  res.send(arr)
})
articUploadRuote.route("/uploadImg.do").post(function (req,res) {
  var imgName=req.files.imgFile.path.replace("public\\upload\\", "").replace("public/upload/", "");
  console.log(imgName);
  var info = {
    "error": 0,
    "url": "upload/"+imgName
  };
  res.send(info);
});
articUploadRuote.route("/acticle.do").post(function(req,res){
  console.log(req.body.txtTitle);
  console.log(req.body.txtContent);
});

module.exports=articUploadRuote;