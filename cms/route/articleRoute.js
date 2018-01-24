/**
 * 文章路由
 * Created by 李小军 on 2017-11-14.
 * update by zpp on 2017-11-15
 * 新闻和文章 都在一个路由下面
 */

'use strict';
const express=require('express');
const article=express.Router();
const MYarticle=require('../controller/articleControl.js');
article.route('/knowledgeShow.do').get(MYarticle.show);
article.route('/knowledgedelete.do').post(MYarticle.update);
article.route('/knowledgeSearch.do').post(MYarticle.Search);
article.route('/NewSearch.do').post(MYarticle.NewSearch);
article.route('/listAll.do').get(MYarticle.listAll);
article.route('/NewlistAll.do').get(MYarticle.NewlistAll);
article.route('/NewShow.do').get(MYarticle.NewShow);
article.route('/Newdelete.do').post(MYarticle.Newupdate);
article.route('/author.do').post(MYarticle.author);

module.exports=article;
