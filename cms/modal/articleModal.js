/**
 * 文章DAO
 * Created by 李小军 on 2017-11-14.
 * uodate by zpp on 2017-11-15
 * 前缀加了New 的是 新闻的modal
 */
'use strict';
const pool=require('./sqlPool.js');
function show(page,defpage){
    'use strict';
    return new Promise(function (resolve, reject) {
        let sql='SELECT t_hanfuKnowledge.*,t_admin.admin_name FROM t_admin JOIN t_hanfuKnowledge ON t_admin.admin_id = t_hanfuKnowledge.act_creater  limit ?,?';
        page=parseInt(page);
        let start=(defpage-1)*page;
        pool.query(sql,[start,page]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function NewShow(page,defpage){
    'use strict';
    return new Promise(function (resolve, reject) {
        let sql='SELECT t_news.*,t_admin.admin_name FROM t_admin JOIN t_news ON t_admin.admin_id = t_news.act_creater  limit ?,?';
        page=parseInt(page);
        let start=(defpage-1)*page;
        pool.query(sql,[start,page]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function Mdelete(id){
    return new Promise(function (resolve, reject) {
       // let sql='set  from t_hanfuKnowledge where nlg_id = ? ';
        let sql='update t_hanfuKnowledge set state = 0 where nlg_id = ?'
        pool.query(sql,[id]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function Newdelete(id){
    return new Promise(function (resolve, reject) {
        let sql='update t_news set state = 0 where news_id = ?'
        pool.query(sql,[id]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function search(title,option,state){
    return new Promise(function (resolve,reject) {
        let sql='SELECT t_hanfuKnowledge.*,t_admin.admin_name FROM t_admin JOIN t_hanfuKnowledge ON t_admin.admin_id = t_hanfuKnowledge.act_creater  '
        var arr=[];
        if(title.length>0){
            title='%'+title+'%';
            sql+='and t_hanfuKnowledge.nlg_title like ? ';
            arr.push(title)
        }
        if(option){
            option='%'+option+'%';
            sql+='and t_admin.admin_name like ? ';
            arr.push(option)
        }
        if(state){
            sql+='and t_hanfuKnowledge.state = ? ';
            arr.push(state)
        }
        pool.query(sql,arr).then(function (data) {
            resolve(data)
        }).catch(function (err) {
                reject(err)
            })
    })
}
function NewSearch(title,option,state){
    return new Promise(function (resolve,reject) {
        let sql='SELECT t_news.*,t_admin.admin_name FROM t_admin JOIN t_news ON t_admin.admin_id = t_news.act_creater WHERE 1=1  '
        var arr=[];
        if(title.length>0){
            title='%'+title+'%';
            sql+= 'and t_news.news_title like ? ';
            arr.push(title)
        }
        if(option){
            option='%'+option+'%';
            sql+= 'and t_admin.admin_name like ? ';
            arr.push(option)
        }
        if(state){
            sql+='and t_news.state = ? ';
            arr.push(state)
        }
        pool.query(sql,arr).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function listAll(){
    return new Promise(function (resolve, reject) {
        let sql='select count(1) as num from t_hanfuKnowledge   ';
        pool.query(sql,[]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function  NewlistAll(){
    return new Promise(function (resolve, reject) {
        let sql='select count(1) as num from t_news ';
        pool.query(sql,[]).then(function (data) {
            resolve(data)
        })
    })
}
function author(){
    return new Promise(function (resolve, reject) {
        let sql='select admin_id,admin_name  from t_admin ';
        pool.query(sql,[]).then(function (data) {
            resolve(data)
        })
    })
}
module.exports={
   show,
    Mdelete,
    search,
    listAll,
    NewShow,
    Newdelete,
    NewlistAll,
    NewSearch,
    author
}
