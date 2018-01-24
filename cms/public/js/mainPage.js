/**
 * Created by Administrator on 2017/9/27.
 */
//弹出皮肤
$(".mainSkin").click(function(){
    $(".mainSkinCge").css("margin-top","100px");
    $(".mainHide").css("z-index",99);
});
//关闭皮肤
$(".mainClose").click(function(){
    closeSkin();
});
//更换皮肤
$(".skin").click(function(){
    var img = $(this).css("background-image");
    closeSkin();
    $(".mainBg").css("background-image",img);
});
//关闭皮肤函数
function closeSkin(){
    $(".mainSkinCge").css("margin-top","-300px");
    $(".mainHide").css("z-index",-1);
}
//时间设置
setInterval(function(){
    clock();
},1000);
function clock(){
    var date=new Date();
    var hours=date.getHours();//小时
    var minute=date.getMinutes();//分
    var second=date.getSeconds();//秒
    var time=hours+":"+minute+":"+second;
    $(".mainClock").html(time);
}
//窗口变换
$(window).resize(function(){
    var w = parseInt($(".mainBoss").css("width"));
    if(w<1111){
        $(".mainNav").css("left","-300px");
        $(".mainPages iframe").css({"width":"90%","margin-left":"5%"});
    }else{
        $(".mainNav").css("left","0px");
        $(".mainPages iframe").css({"width":"75%","margin-left":"20%"});
    }
});

$(".mainMe").click(function(){
    if(parseInt($(".mainZZ").css("height"))==0){
        $(".mainZZ").css("height","255px");
        $(".mainZC").css("height","0px");
    }else{
        $(".mainZZ").css("height","0px");
    }
});
$(".mainUpd").click(function(){
    if(parseInt($(".mainZC").css("height"))==0){
        $(".mainZC").css("height","255px");
        $(".mainZZ").css("height","0px");
    }else{
        $(".mainZC").css("height","0px");
    }
});
//变化控制
$(".mainMenu").click(function(){
    var l = parseInt($(".mainNav").css("left"));
    var w = parseInt($(".mainBoss").css("width"));
    if(l==-300){
        $(".mainNav").css("left","0px");
        if(w<1111&&w>=920){
            $(".mainPages iframe").css({"width":"70%","margin-left":"25%"});
        }else if(w<920&&w>700){
            $(".mainPages iframe").css({"width":"60%","margin-left":"33%"});
        }else if(w<700){
            $(".mainPages iframe").css({"width":"50%","margin-left":"50%"});
        }else{
            $(".mainPages iframe").css({"width":"75%","margin-left":"20%"});
        }
    }else{
        $(".mainNav").css("left","-300px");
        $(".mainPages iframe").css({"width":"90%","margin-left":"5%"});
    }
});
///////////////////////////////////////////////////////////////////////////
// 用户管理页面
$(".mainPart1List1").click(function(){
    $(".mainPages")[0].getElementsByTagName("iframe")[0].src="user.html";
});
// 管理员管理页面
$(".mainPart1List2").click(function(){
    $(".mainPages")[0].getElementsByTagName("iframe")[0].src="admin.html";
});
// 汉服知识页面
$(".mainPart5List1").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="knowledge.html";
});
// 新闻资讯页面
$(".mainPart5List2").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="news.html";
});
// 活动管理页面
$(".mainPart6List1").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="ActivityList.html";
});
// 报名管理页面
$(".mainPart6List2").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="ActParticipantList.html";
});
// 作品管理页面
$(".mainPart6List3").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="ParticipantWorks.html";
});
// 订单列表页面
$(".mainPart4List1").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="orderGoods.html";
});
// 评价回复页面
$(".mainPart4List2").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="evaluateReply.html";
});
// 帖子信息页面
$(".mainPart2List1").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="PostInformation.html";
});
// 帖子回复页面
$(".mainPart2List2").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="Postreply.html";
});
// 相册管理页面
$(".mainPart2List3").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="AlbumManagement.html";
});
//图片管理页面
$(".mainPart2List4").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="AlbumImg.html";
});
// 书签类型页面
$(".mainPart3List2").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="leixing.html";
});
// 书签管理页面
$(".mainPart3List3").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="goodsBook.html";
});
// 商品管理页面
$(".mainPart3List4").click(function(){
    document.getElementsByClassName("mainPages")[0].getElementsByTagName("iframe")[0].src="goodsDetail.html";
});





