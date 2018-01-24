/**
 * 社区DAO
 * Created by 李小军 on 2017-11-14.
 */


/*==============社区模块===========*/

const pool = require("../modal/sqlPool.js"); //连接池模块
//获取帖子信息

function search(bbs_id,bbs_content,bbs_user_id,state){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        console.log('search modal');
        //if(!bbs_id&&!bbs_content&&!bbs_user_id&&!state){
        //    let sql;
        //    sql = "select * from t_bbs";
        //    pool.query(sql,[]).then(function(data){
        //        resolve(data);
        //    }).catch(function(err){
        //        reject(err);
        //    })
        //}if{
            let sql;
            sql = "SELECT t_bbs.bbs_id,t_bbs.bbs_content, t_albumImg.aImg_url AS bbs_aImg_id,t_user.user_name AS bbs_user_id,t_bbs.joinDate,t_bbs.state "
            +" FROM t_bbs,t_user ,t_albumImg"
            +" WHERE t_bbs.bbs_user_id=t_user.user_id"
            +" AND t_bbs.bbs_bbsImg_id=t_albumImg.aImg_id";
        var arr=[];
            if(bbs_id.length>0){
                bbs_id = "%"+bbs_id+"%";
                sql+=" and t_bbs.bbs_id like ?";
                arr.push(bbs_id);
            }
            if(bbs_content.length>0){
                bbs_content ="%"+bbs_content+"%";
                sql+=" and t_bbs.bbs_content like ?";
                arr.push(bbs_content);
            }
            if(bbs_user_id.length>0){
                bbs_user_id ="%"+bbs_user_id+"%";
                sql+=" and t_bbs.bbs_user_id like ?";
                arr.push(bbs_user_id);
            }
            if(state.length>0){
                state = "%"+state+"%";
                sql+=" and t_bbs.state like ?";
                arr.push(state);
            }
            console.log("arr"+arr);
            pool.query(sql,arr).then(function(data){
                //console.log(data);
                resolve(data);
            }).catch(function(err){
                reject(err);
            });
        //}
    })
}


function list(currentPage,pageSize){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        console.log('insert modal');
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let start= (currentPage-1)*pageSize;//当前页
        pageSize = parseInt(pageSize);//每页显示的条数

        let sql = "SELECT t_bbs.bbs_id,t_bbs.bbs_content, t_albumImg.aImg_url AS bbs_aImg_id,t_user.user_name AS bbs_user_id,t_bbs.joinDate,t_bbs.state"
        +" FROM t_bbs,t_user ,t_albumImg"
        +" WHERE t_bbs.bbs_user_id=t_user.user_id"
        +" AND t_bbs.bbs_bbsImg_id=t_albumImg.aImg_id;";
        pool.query(sql,[start,pageSize]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//删除
function communitydel(id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update t_bbs set state='0' where bbs_id=?;";
        pool.query(sql,[id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
function getState(id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "select distinct state from t_bbs where bbs_id=?";
        pool.query(sql,[id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
function update(state,id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update t_bbs set state=? where bbs_id=?";
        pool.query(sql,[state,id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
function pageCount(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "select count(1) as num from t_bbs";
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}


/*暴露的接口*/
module.exports={
    list,                   /*帖子信息列表*/
    search,                 /*帖子信息查找*/
    communitydel,           /*帖子信息删除，不用！*/
    getState,               /*帖子信息state传输*/
    update,                 /*帖子信息更新state*/
    pageCount
};

