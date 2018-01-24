/**
 * 社区管理
 * Created by 李小军 on 2017-11-14.
 */


/*社区Controller*/
const communityModal = require('../Modal/communityModal.js');
console.log('SB');
function search(req,res){
    "use strict";
    let bbs_id = req.body.bbs_id;
    let bbs_content = req.body.bbs_content;
    let bbs_user_id = req.body.bbs_user_id;
    let state = req.body.state;
    //console.log(bbs_id,state);
    communityModal.search(bbs_id,bbs_content,bbs_user_id,state).then(function(data){//第一页显示的数据
        console.log('search control');
        //console.log(data);
        res.send(data);
        //res.render('PostInformation',{'data':data});
    }).catch(function(err){
        res.send(err);
    })
}
function list(req,res){
    "use strict";
    console.log("listin");
    let curPage = req.body.curPage;//当前页
    let pageSize = req.body.pageSize;//当页显示数据条数


    communityModal.list(curPage,pageSize).then(function(data){//第一页显示的数据
        console.log('insert control');
        console.log(data);
        res.send(data);
    })
}
/*删除*/
function communitydel(req,res){
    var id=req.body.id;
    communityModal.communitydel(id).then(function(data){
        res.send(data)
    })
}
function getState(req,res){
    var id=req.body.id;
    communityModal.getState(id).then(function(data){
        res.send(data);
    })
}
function update(req,res){
    "use strict";
    let state = req.body.state;
    let id = req.body.id;
    communityModal.update(state,id).then(function(data){
        res.send({code:200,data:data});
    })
}
function pageCount(req,res){
    "use strict";
    communityModal.pageCount().then(function(data){
        res.json(data);
    })
}




module.exports={
    list,           /*帖子信息列表*/
    search,         /*帖子信息查找*/
    communitydel,   /*帖子信息删除，不用！*/
    getState,       /*帖子信息state传输*/
    update,         /*帖子信息更新state*/
    pageCount     /*帖子的总条数*/
};
