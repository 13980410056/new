/**
 * Created by 123 on 2017/11/17.
 */

const pool=require('./sqlPool.js');
function add(title,content,describe,MYid){
    "use strict";
    return new Promise(function (resolve, reject) {
        var Mdata=new Date();
        let sql='insert into t_activity values(null,?,?,?,?,?,1)';
        pool.query(sql,[title,describe,content,MYid,Mdata]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function newadd(title,content,describe,MYid){
    "use strict";
    return new Promise(function (resolve, reject) {
        var Mdata='2017-11-20'
        let sql='insert into t_news values(?,null,?,?,?,?,1)';
        pool.query(sql,[describe,title,content,MYid,Mdata]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}

module.exports={
    add,
    newadd
}