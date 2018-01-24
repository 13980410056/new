/**
 * Created by pall Ìï½Ü 2017/11/16.
 */
'use strict';
const express=require('express');
const article=express.Router();
const MYarticle=require('../controller/actpartipantControl.js');
article.route('/knowledgeShow.do').get(MYarticle.show);
article.route('/knowledgedelete.do').post(MYarticle.update);
article.route('/knowledgeSearch.do').post(MYarticle.Search);
article.route('/listAll.do').get(MYarticle.listAll);

module.exports=article;