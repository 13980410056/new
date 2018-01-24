
$(".planClick11").click(function(){
    $(this).parent().prev().prev().html("项目经理");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick21").click(function(){
    $(this).parent().prev().prev().html("人事经理");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick31").click(function(){
    $(this).parent().prev().prev().html("管理员");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick41").click(function(){
    $(this).parent().prev().prev().html("游客");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planBmNc1").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planClick12").click(function(){
    $(this).parent().prev().prev().html("web前端");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick22").click(function(){
    $(this).parent().prev().prev().html("UI");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick32").click(function(){
    $(this).parent().prev().prev().html("人事");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planBmNc2").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".xiugai").click(function () {
    console.log(22)
})

$(".myOk").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".myNo").hover(function(){
    $(".myOk").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".myNo").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});
$(".xiugai").click(function(){
    $(".pos").css("top","-300px");
    $(".pos").css("display","block");
    $(".pos").animate({top:"0"})
})
$(".bian").click(function () {
    $(this).parent().parent().parent().css("display","none")

})