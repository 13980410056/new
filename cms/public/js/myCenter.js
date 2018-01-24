/**
 * Created by Administrator on 2017/10/3.
 */
$(window).resize(function() {
    var w = parseInt($(".myBoss").css("width"));
    if(w<769){
        $("table,tr").css("width","100%");
        $(".myChange").css({"margin-left":"30%",width:"40%"});
    }else{
        $("table,tr").css("width","235px");
        $(".myChange").css({"margin-left":"60px",width:"120px"});
    }
});
$(".myChange").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
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