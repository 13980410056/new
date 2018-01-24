/**
 * Created by pall 田杰2017/11/16.
 */
'use strict';
const express=require('express');
const article=express.Router();
const MYarticle=require('../controller/participantWorksControl.js');
article.route('/knowledgeShow.do').get(MYarticle.show);
article.route('/knowledgedelete.do').post(MYarticle.update);
article.route('/knowledgeSearch.do').post(MYarticle.Search);
article.route('/listAll.do').get(MYarticle.listAll);
article.route('/EvaluateImg.do').post(MYarticle.EvaluateImg);
article.route('/listAllName.do').post(MYarticle.listAllName);
module.exports=article;