$("#newclasszi1").click(function(){
    console.log("1");
    $("#z2,#z1").show()
});
$("#newclasszi2").click(function(){
    console.log("1");
    $("#z1").hide()
});
$("#newclasszi3").click(function(){
    console.log("1");
    $("#z2").hide()
});
$("#newclassxz").click(function(){
    $("#newclasssss").show()
});
$("#newclasszi12").click(function(){
    $("#z22,#z23").show()
});
$("#newclasszi22").click(function(){
    console.log("1");
    $("#z22").hide()
});
$("#newclasszi32").click(function(){
    console.log("1");
    $("#z23").hide()
});


$(".planClick1").click(function(){
    $(".planBmN").html("项目经理");
    $(".planC1").css({"visibility":"hidden","animation":""});
});

$(".planClick2").click(function(){
    $(".planBmN").html("班主任");
    $(".planT1").css({"visibility":"hidden","animation":""});
});


$(".planBmNc").click(function(){
    $(".planT1").css({"visibility":"visible","animation":"bs .3s linear"});
});