$("input").focus(function(){
    $(this).css("outline","none");
    $(this).css("border","none");
    $(this).css("border-bottom","1px solid white");
    $(this).css("box-shadow","none");
});
$("textarea").focus(function () {
    $(this).css("outline","none");
    $(this).css("box-shadow","none");
});
$(".planClick11").click(function(){
    $(this).parent().prev().prev().html("男");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick21").click(function(){
    $(this).parent().prev().prev().html("女");
    $(".planC11").css({"visibility":"hidden","animation":""});
});
$(".planClick12").click(function(){
    $(this).parent().prev().prev().html("135");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick22").click(function(){
    $(this).parent().prev().prev().html("136");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planClick32").click(function(){
    $(this).parent().prev().prev().html("137");
    $(".planC12").css({"visibility":"hidden","animation":""});
});
$(".planBmNc2").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
$(".planBmNc1").click(function(){
    $(this).next().css({"visibility":"visible","animation":"bs .3s linear"});
    console.log($(this).next())
//                $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});
