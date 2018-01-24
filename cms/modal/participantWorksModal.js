/**
 * Created by pall 田杰 2017/11/16.
 */
'use strict';
const pool=require('./sqlPool.js');
function show(page,defpage){
    'use strict';
    return new Promise(function (resolve, reject) {
        let sql='SELECT t_participantworks.*,t_activity.act_id ,t_activity.act_title FROM t_participantworks,t_activity WHERE t_activity.act_id = t_participantworks.pworks_ptcp_id  limit ?,?';
        page=parseInt(page);
        let start=(defpage-1)*page;
        pool.query(sql,[start,page]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function Mdelete(state,id){
    return new Promise(function (resolve, reject) {
        console.log(id+"11111888811111")
        if(state==1){
            state=0
        }else{
            state=1
        }
        let sql='update t_participantworks set state = ? where pworks_id = ?';
        pool.query(sql,[state,id]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function search(title,option,state){
    return new Promise(function (resolve,reject) {
        let sql='SELECT t_participantworks.*,t_activity.act_id ,t_activity.act_title FROM t_participantworks,t_activity WHERE t_activity.act_id = t_participantworks.pworks_ptcp_id   '
        var arr=[];
        if(title.length>0){
            title='%'+title+'%';
            sql+='and t_activity.act_title like ? ';
            arr.push(title)
        }
        if(option){
            option='%'+option+'%';
            sql+='and pworks_title like ? ';
            arr.push(option)
        }
        if(state){
            if(state=="启用"){
                state=1
            }else if(state=="禁用"){
                state=0
            }
            console.log(state+"wowowoowowow")
            sql+='and t_participantworks.state = ? ';
            arr.push(state)

        }
        pool.query(sql,arr).then(function (data) {
            resolve(data)
        })
    })
}

function listAll(){
    return new Promise(function (resolve, reject) {
        let sql='select count(1) as num from t_participantworks  ';
        pool.query(sql,[]).then(function (data) {
            resolve(data)
        })
    })
}
function listAllName(){
    return new Promise(function (resolve, reject) {
        let sql='select pworks_title from t_participantworks  ';
        pool.query(sql,[]).then(function (data) {
            resolve(data)
        })
    })
}
function EvaluateImg(id) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select pworks_url from t_participantworks where pworks_ptcp_id=?";
        pool.query(sql,[id])
            .then(function (data) {
                resolve(data);
                // console.log(1)
            })
            .catch(function (err) {
                reject(err);
                // console.log(2)
            })
    })
}
module.exports={
    show,
    Mdelete,
    search,
    listAll,
    EvaluateImg,
    listAllName
}