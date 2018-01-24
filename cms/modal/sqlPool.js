/**
 * 数据库链接池
 * Created by 李小军 on 2017-11-14.
 */
"use strict";
const mysql = require('promise-mysql');
const pool = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"123456",
  port:3306,
  database:"hanfu",
  connectionLimit: 10 // 设置最大的连接数
});
module.exports=pool;