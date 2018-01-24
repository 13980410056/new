/**
 * 活动DAO
 * Created by 李小军 on 2017-11-14.
 */
<<<<<<< .mine

'use strict';
const pool=require('./sqlPool.js');
function show(page,defpage){
    'use strict';
    return new Promise(function (resolve, reject) {
        let sql='SELECT t_activity.*,t_admin.admin_name FROM t_admin JOIN t_activity ON t_admin.admin_id = t_activity.act_creater limit ?,?';
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
        console.log(id+"111133333311111")
        if(state==1){
            state=0
        }else{
            state=1
        }
        let sql='update t_activity set state = ? where act_id = ?';
        pool.query(sql,[state,id]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
function search(title,option,state){
    return new Promise(function (resolve,reject) {
        let sql='SELECT t_activity.*,t_admin.admin_name FROM t_admin JOIN t_activity ON t_admin.admin_id = t_activity.act_creater WHERE 1 = 1 '
        var arr=[];
        if(title.length>0){
            title='%'+title+'%';
            sql+='and t_activity.act_title like ? ';
            arr.push(title)
        }
        if(option){
            option='%'+option+'%';
            sql+='and t_admin.admin_name like ? ';
            arr.push(option)
        }
        if(state){
            if(state=="启用"){
                state=1
            }else if(state=="禁用") {
                state=0
            }
            console.log(state+"wowowoowowow")
            sql+='and t_activity.state = ? ';
            arr.push(state)
        }
        pool.query(sql,arr).then(function (data) {
            resolve(data)
        })
    })
}

function listAll(){
    return new Promise(function (resolve, reject) {
        let sql='select count(1) as num from t_activity  ';
        pool.query(sql,[]).then(function (data) {
            resolve(data)
        })
    })
}
module.exports={
    show,
    Mdelete,
    search,
    listAll
}
=======
>>>>>>> .r38
