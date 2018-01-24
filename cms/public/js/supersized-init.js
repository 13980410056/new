jQuery(function($){
    $.supersized({

        // Functionality
        slide_interval     : 6000,    // Length between transitions
        transition         : 1,    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed   : 3000,    // Speed of transition
        performance        : 1,    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)

        // Size & Position
        min_width          : 0,    // Min width allowed (in pixels)
        min_height         : 0,    // Min height allowed (in pixels)
        vertical_center    : 1,    // Vertically center background
        horizontal_center  : 1,    // Horizontally center background
        fit_always         : 0,    // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait       : 1,    // Portrait images will not exceed browser height
        fit_landscape      : 0,    // Landscape images will not exceed browser width

        // Components
        slide_links        : 'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides             : [    // Slideshow Images
                                 {image : './img/1.jpg'},
                                 {image : './img/2.jpg'},
                                 {image : './img/3.jpg'}
                             ]
    });
});
window.onload = function() {
    $(".connect p").eq(0).animate({"left":"0%"}, 600);
    $(".connect p").eq(1).animate({"left":"0%"}, 400);
};
function is_hide(){ $(".alert").animate({"top":"-40%"}, 300) }
function is_show(){ $(".alert").show().animate({"top":"45%"}, 300) }
$("#submit").click(function(){
    for(var i=0;i<4;i++){
        var name = $(".username").val();
        var pass = $(".password").val();
        if(crew[i].creI==name&&crew[i].creM==pass){
            window.open("pages/index.html");
            close();
        }
    }
    $(".waring").css("visibility","visible");
    $(".wron").css("margin-top","200px");
});
$(".ok").click(function(){
    $(".waring").css("visibility","hidden");
    $(".wron").css("margin-top","-250px");
});
