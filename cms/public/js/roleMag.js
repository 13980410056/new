/**
 * Created by Administrator on 2017/10/4.
 */
$(window).ready(function(){
    for(var i= 0;i<4;i++){
        $("tr:nth-child("+(i+2)+") td:nth-child(1)").html(part[i].parN);
        $("tr:nth-child("+(i+2)+") td:nth-child(2)").html(part[i].parM);
        $("tr:nth-child("+(i+2)+") td:nth-child(3)").html(part[i].parC);
        $("tr:nth-child("+(i+2)+") td:nth-child(4)").html(part[i].parA);
    }
});
$(".stuDel").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认删除信息？");
});
$(".stuCge").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认修改信息？");
});
$(".myOk,.myNo").click(function(){
    $(".myTs").css({visibility: "hidden"});
    $(".myWron").css("margin-top","-250px");
});
$(".myOk").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".myNo").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});