// 下拉框
function xianshi() {
    if ($(".perUl").css("visibility")=="hidden"){
        $(".perUl").css("transition","all .2s linear");
        $(".perUl").css("transform","scale(1.2)");
        $(".perUl").css("visibility","visible");
        setTimeout(function () {
            $(".perUl").css("transform","scale(0.8)");
            $(".perUl").css("transition","all .2s linear");
        },100);
        setTimeout(function () {
            $(".perUl").css("transform","scale(1)");
            $(".perUl").css("transition","all .2s linear");
        },200)
    }else{
        $(".perUl").css("transform","scale(1)");
        $(".perUl").css("visibility","hidden");
        $(".perUl").css("transition","none")
    }
}

// 弹出框
var text1 = "是否确认编辑？";
var text2 = "是否确认删除？";
function per_edite(str) {
    $(".per_maxBox").css({visibility: "visible"});
    $(".per_maxBox").css({top: "200px"});
    $(".per_minBox").text(str);
}
function closeWindow() {
    var myWindow = document.getElementById("per_maxBox");
    myWindow.style.visibility = 'hidden';
    myWindow.style.zIndex = "10";
    myWindow.style.top="-250px"
}

function cou_edite(str) {
    $(".cou_maxBox").css({visibility: "visible"});
    $(".cou_maxBox").css({top: "200px"});
    $(".cou_minBox").text(str);
}
function couWindow() {
    var myWindow = document.getElementById("cou_maxBox");
    myWindow.style.visibility = 'hidden';
    myWindow.style.zIndex = "10";
    myWindow.style.top="-250px"
}

$(".per_sure,.cou_sure").hover(function(){
    $(".per_sure,.cou_sure").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
    $(".per_close,.cou_close").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
});
$(".per_close,.cou_close").hover(function(){
    $(".per_sure,.cou_sure").css({"background-color":"rgba(255,255,255,0)",border:"1px solid rgba(255,255,255,0.5)"});
    $(".per_close,.cou_close").css({"background-color":"rgba(255,255,255,0.3)",border:"1px solid rgba(255,255,255,0)"});
});