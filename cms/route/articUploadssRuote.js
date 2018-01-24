/**
 * Created by Administrator on 2017-11-17.
 */
'use strict';
const express=require('express');
const articUploadRuote=express.Router();
const upload =require('../controller/articUploadsscontroller.js');

articUploadRuote.route("/uploadImg.do").post(function (req,res) {
  var imgName=req.files.imgFile.path.replace("public\\upload\\", "").replace("public/upload/", "");
  console.log(imgName);
  var info = {
    "error": 0,
    "url": "upload/"+imgName
  };
  res.send(info);
});
articUploadRuote.route("/acticle.do").post(upload.add);
articUploadRuote.route("/news.do").post(upload.newadd);
module.exports=articUploadRuote;