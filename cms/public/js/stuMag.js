/**
 * Created by Administrator on 2017/10/2.
 */
$(window).ready(function(){
    for(var i= 0;i<4;i++){
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(1)").html(student[i].stuC);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(2)").html(student[i].stuN);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(3)").html(student[i].stuP);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(4)").html(student[i].stuQ);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(5)").html(student[i].stuB);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(6)").html(student[i].stuX);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(7)").html(student[i].stuS);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(8)").html(student[i].stuJ);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(9)").html(student[i].stuT);
        $(".zoz tr:nth-child("+(i+1)+") th:nth-child(10)").html(student[i].stuA);
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