//$("#classbj,#classbj2,#classbj4,#classbj6").click(function(){
//    $("#classtc2").show()
//});
//$("#classque2,#classqu2").click(function(){
//    $("#classtc2").hide()
//});
//$("#classbj1,#classbj3,#classbj5,#classbj7").click(function(){
//    $("#classtc").show()
//});
//$("#classque,#classqu").click(function(){
//    $("#classtc").hide()
//});
$(".planBtn1").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认修改信息？");
});
$(".planBtn2").click(function(){
    $(".myTs").css({visibility: "visible"});
    $(".myWron").css("margin-top","200px");
    $(".myWhat").html("确认删除信息？");
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