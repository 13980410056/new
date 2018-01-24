/**
 * 登录DAO
 * Created by 李小军 on 2017-11-14.
 */
'use strict';
const pool=require('./sqlPool.js');
function login(user,pwd){
    'use strict';
    return new Promise(function (resolve, reject) {
        let sql='select * from t_admin where admin_account=? and admin_pwd=?';
        pool.query(sql,[user,pwd]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err)
        })
    })
}
module.exports={
    login
}