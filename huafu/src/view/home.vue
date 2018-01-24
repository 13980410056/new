<template>
    <div class="home_box">
        <!--上面第一板块-->
        <div class="home_box_first">
          <div class="home_box_first_content">
            <h1>华风汉服</h1>
            <h3><span>华</span>夏复兴，衣冠先行&nbsp;始于衣冠，达于<span>风</span>尚</h3>
          </div>

        </div>
        <!--第二个版块-->
        <div class="home_box_second">
            <div id="second_1" class="contentDiv">
                <img src="../assets/images/dilian.png" class="MyImg" alt=""/>
            </div>
            <div id="second_2" class="contentDiv">
                <img src="../assets/images/jiaoren.png" class="MyImg" alt=""/>
            </div>
            <div id="second_3" class="contentDiv">
                <img src="../assets/images/sanshishu.png" class="MyImg" alt=""/>
            </div>
            <div id="second_4" class="contentDiv">
                <img src="../assets/images/wuyou.png" class="MyImg" alt=""/>
            </div>
            <div id="second_5" class="contentDiv">
                <img src="../assets/images/hua.png" class="MyImg" alt=""/>
            </div>
            <div id="second_6">
                <h1>
                    爱 <span></span>摄影
                </h1>

                <div class="second_6_btn">
                    更多作品
                </div>
            </div>
        </div>
        <!--第三个版块-->
        <div class="home_box_third">
            <div class="home_box_third_1">
                <div class="second_6_btn" id="third_btn3">更多作品</div>
            </div>
          <div class="home_box_third_3">
            <h1><span>知</span>汉式礼仪</h1>
            <h1><span>识</span>华夏衣冠</h1>
          </div>
          <!--左侧视频-->
          <div class="home_box_third_4">
            <video src="../assets/video/demo.ogg" controls="controls"></video>
          </div>
          <!--毛笔部分 定位-->
            <div class="home_box_third_2"></div>

        </div>
        <!--第四个版块-->
        <div class="home_box_fourth">
            <div class="home_box_fourth_1"></div>
            <div class="home_box_fourth_2"></div>
            <div class="home_box_fourth_3"></div>
            <div class="home_box_fourth_4"></div>
            <div class="home_box_fourth_5 second_6_btn">
                进入商城
            </div>
            <div class="home_box_fourth_6">
                <h1>
                    华夏有衣，其名汉服
                </h1>
                <p>
                    你的衣柜是不是少了一套衣服？
                </p>
                <div class="home_box_fourth_6_content">
                  <p>
                    高性能的净化效果，源于房间内的空气以大循环方式持续流动。
                    工程师在研发中从飞机引擎中得到了灵感，在小体积内创造出强大吸力与风力的空气增压系统。
                  </p>
                  <p>
                    睡眠中，人体会从呼吸道排出上百种化学物质，例如二氧化碳、氨等，如果卧室密闭，会大大影响睡眠质量。
                  </p>
                </div>
            </div>
        </div>
        <!--第五个版块-->
        <div class="home_box_five">
            <div class="home_box_five_1">
                <img src="../assets/images/bgLeaves.png" alt=""/>
            </div>
            <div class="home_box_five_2 home_box_five_q1" >
                    <h1>
                        汉服秀
                    </h1>
                    <p>
                        汉服爱好者穿着参照出土文物制作的古风服饰
                    </p>
                    <p>
                    在T台上向博物馆的参观者展示着汉服衣冠之美
                    </p>
            </div>
            <div class="home_box_five_2" style="margin-left: 30px">
                <h1>汉服街拍</h1>
              <div class="home_box_five_2_img">
                      <img src="../assets/images/q1.jpg" alt=""/>
                      <img src="../assets/images/q2.jpg" alt=""/>
                    </div>
                <div class="second_6_btn">了解详情</div>
            </div>

            <div class="home_box_five_3">
                汉服活动
            </div>
        </div>
        <!-- 页脚最后一个版块-->
        <div class="home_box_six">
            <div class="home_box_six_1">
              <h3>着我汉家衣服</h3>
              <h3>兴我礼仪之邦</h3>
            </div>
            <div class="home_box_six_2">
              <div class="home_box_six_2_right">
                <div class="home_box_six_2_right_1">
                  <span>您量身定做<br/><br/><br/><br/> </span>
                  <span>时尚的款式 <br/>，只为</span>
                  <span>最精致的汉绣<br/>，最</span>
                </div>
                <div class="home_box_six_2_right_1">
                  <span> 身评价<br/> <br/> <br/> <br/> <br/> <br/></span>
                  <span>在每一位顾客的亲</span>
                  <span>出来的 <br/>，而是体验</span>
                  <span>我们的良心不是晒</span>
                </div>
                <div class="home_box_six_2_right_1 right_last">
                  <span>品味 <br/><br/><br/><br/><br/><br/><br/></span>
                  <span>选 <br/> ，才是时下的正</span>
                  <span> 我们年轻班底的挑</span>

                </div>
                <h2 class="home_box_six_2_right_2">选择华风的理由</h2>
              </div>
            </div>
        </div>
        <!--右侧圆点部分-->
      <!--  <div class="home_box_seven">
            <ul>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>-->
    </div>
</template>

<script>



    export default {
        name:'',
        data: function () {
            return {
                lastscrollTop:0
            }
        },
        mounted: function () {
            window.addEventListener('scroll',this.handleScroll)
        },
        methods: {
            handleScroll:function(){
               var lastscrollTop=this.lastscrollTop;
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

            }

        }

    }


</script>
<style scoped lang="less">
  @import "../assets/css/common.less";
    .home_box_first {
      overflow: hidden;
        background-image: url(../assets/images/banner1.png);
        height: 623px;
    }
  .home_box_first_content {
    width: 330px;
    margin: 300px 0 0 900px;
  }
  .home_box_first_content h1 {
    font-size: 30px;
    margin-right: 10px;
    text-align: right;
    color: #9a1612;
  }
  .home_box_first_content h3 {
    text-align: left;
    font-weight: 400;
    margin: 20px 0;
  }
  .home_box_first_content h3 span {
    font-size: 20px;
  }
    .home_box_second {
        position: relative;
        background-image: url(../assets/images/bg.png);
        height: 623px;
    }
    .MyImg {
        width: 91%;
        height: 93%;
        margin-left: 0px;
        margin-top: 12px;
    }
    .contentDiv {
        position: absolute;
        width: 180px;
        height: 380px;
        text-align: center;
        background-image: url(../assets/images/border.png);
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    #second_1{
        left: 100px;
        top: 40px;
    }
    #second_2 {
        left: 300px;
        top: 70px;
    }
    #second_3 {
        left: 500px;
        top: 110px;
    }
    #second_4 {
        left: 700px;
        top: 140px;
    }
    #second_5 {
        left: 900px;
        top: 170px;
    }
    #second_6 {
        position: absolute;
        width: 140px;
        height: 480px;
        right: 70px;
        top: 160px;

    }
    #second_6 h1 {

        font-size: 30px;
        width: 30px;
        color: #9a1612;
        font-weight: 400;
      margin-bottom: 20px;
    }
    #second_6 h1 span {
        width: 5px;
        display: inline-block;
        background-color:#9a1612;
        height: 5px;
        border-radius: 50%;
    }
    #second_6 button {
        width: 20px;
        font-size: 20px;
    }
    .second_6_btn {
        width: 28.9px;
        font-size: 14.5px;
        font-family: "Microsoft YaHei", "微软雅黑", tahoma, arial, simsun, "宋体";
        color: #9a1612;
        height: 96px;
        padding: 24px 0 0 8px;

        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        background-image: url(../assets/images/borderR.png);
    }
    /*第一个版块*/

/*第三个版块*/
    .home_box_third {
      overflow: hidden;
        background-image: url(../assets/images/bg-3.png);
        height: 623px;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        position: relative;
    }
    .home_box_third_1 {
      margin: 270px 0 0 660px;
    }
  .home_box_third_1 h1 {
    margin: 0 5px;
  }
  .home_box_third_1 span{
    font-size: 28px;
    color: #9a1612;
  }
  .home_box_third_1 h1 {
    width: 24px !important;
    font-size: 24px;
  }
  .home_box_third_3 {
    width: 200px;
    position: absolute;
    top: 30px;
    right: 200px;
  }
  .home_box_third_3 h1 {
    width: 30px;
    display: inline-block;
  }
  .home_box_third_3 h1:last-child {
    position: absolute;
    top: 70px;
    left: 40px;
  }
  .home_box_third_3 h1 span {
    font-size: 32px;
    color: #9a1612;
  }
  .home_box_third_3 h1{
    font-size:24px;
    font-weight: 500;
    margin: 10px 0;
  }
  .home_box_third_3 p {
    font-weight: 400;
  }
  .home_box_third_3 div {
    margin: 10px 20px 20px 10px;
     }
  .home_box_third_2 {
        position: absolute;
        right: 180px;
        top: 370px;
        width: 540px;
        height: 200px;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        background-image: url(../assets/images/element.png);
    }
  .home_box_third_4 {
    position: absolute;
    top: 100px;
    left: 100px;
    height: 300px;
    width: 520px;
  }
  .home_box_third_4 video {
    width: 100%;
    height: 100%;
  }
    .home_box_third_2 p {
        margin-left: 80px;
        font-weight: 600;
    }
    .home_box_third_1 h1{
        width: 70px;
        font-size: 42px;
        display: inline-block;
        font-weight: 500;
        text-align: center;
    }

    #third_h11 {
      position: absolute;
      top: 80px;
      left: 200px;
        font-size: 24px;

    }
    #third_h12 {
      position: absolute;
        font-size: 24px;
      left: 260px;
      top: 120px;


    }
    /*第四个版块*/
    .home_box_fourth{
        background-image: url(../assets/images/bg.jpg);
        height: 623px;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        position: relative;
    }
    .home_box_fourth_1 {
        position: absolute;
        background-image: url(../assets/images/1.png);
        width: 330px;
        background-size: 100% 100%;
        height: 485px;
        left: 100px;
        bottom: 20px;
        z-index: 3;
    }
    .home_box_fourth_2 {
        position: absolute;
        background-image: url(../assets/images/3.jpg);
        width: 120px;
        background-size: 100% 100%;
        height: 120px;
        left: 120px;
        bottom: 20px;
        z-index: 4;
    }
    .home_box_fourth_3 {
        position: absolute;
        background-image: url(../assets/images/2.png);
        width: 280px;
        background-size: 100% 100%;
        height: 380px;
        left: 320px;
        bottom: 20px;
    }
    .home_box_fourth_4 {
        position: absolute;
        background-image: url(../assets/images/4.jpg);
        width: 120px;
        background-size: 100% 100%;
        height: 120px;
        left: 500px;
        bottom: 20px;
        z-index: 4;
    }
    .home_box_fourth_5{
        position: absolute;
        left: 630px;
        bottom: 20px;
    }
    .home_box_fourth_6 {
        position: absolute;
        left: 460px;
        top: 100px;
        width: 540px;
    }
    .home_box_fourth_6 h1 {
        font-size: 30px;
        font-weight: 500;
        color: #9a1612;
    }
    .home_box_fourth_6> p {
        text-align: right;
        margin-top: 20px;
        font-size: 24px;
      margin-right: 40px;
    }
    .home_box_fourth_6_content {
      width: 70%;
      line-height: 20px;
      margin: 10px 0 0 30%;
    }
  .home_box_fourth_6_content p {
    margin: 15px 0;
    font-size: 15px;
    font-weight: 500;
  }
    /*第五个版块*/
    .home_box_five{
        background-image: url(../assets/images/bg-7.png);
        height: 623px;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
    }
    .home_box_five_1 {
        position: absolute;
        top: 0;
        right: 0;
    }
    .home_box_five_2 {
        margin: 80px 0 0 440px;
        position: relative;
        height: 440px;
        float: left;
        width: 300px;
    }
    .home_box_five_q1 {
      width: 180px;
    }
    .home_box_five_2_img {
      width: 150px;
      text-align: center;
      height: 460px;
      position: absolute;
      top: -240px;
      left: -100px;
    }
  .home_box_five_2_img img {
    height: 200px;
    margin-top: 20px;
   width: 150px;
  }
    .home_box_five_2 h1{
        width: 59px;
        font-size: 30px;
        float: left;
    }
    .home_box_five_2 p {
        width: 20px;
        font-size: 14px;
        float: left;
        color: rgb(72, 72, 72);
        height: 80%;
        padding-top: 40px;
        margin-left: 18px;
    }

    .home_box_five_2 div{
        float: right;
        margin:250px 0 0 150px;
    }
    .home_box_five_3 {
        width: 28px;
        color: #9a1612;
        float: right;
        margin: 230px 250px 0 0 ;
        font-size: 28px;
    }
    /*最后一个版块*/
    .home_box_six {
        background-image: url(../assets/images/bg.png);
        height: 623px;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
    }
    .home_box_six_1 {
        width: 660px;
        float: left;
        height: 313px;
        margin: 30px 0 0 20px;
        background-image: url(../assets/images/element-6.png);
    }
    .home_box_six_1 h3{
      width: 20px;
      font-weight: 500;
      font-size: 18px;
      display: inline-block;
      margin: 100px 0 20px 300px ;
    }
  .home_box_six_1 h3:last-child{
    margin-left: 20px;
  }

    .home_box_six_2 {
        margin: 120px 100px 0 20px;
        width: 490px;
        float: left;
        height: 320px;
    }
    .home_box_six_2_right {
      width: 500px;
      height: 300px;
    }
    .home_box_six_2_right_1{
      float: left;
      width: 125px ;
      height: 165px;
      text-align: right;
      border-right: 1px solid #696969;
      margin: 5px 5px  ;
    }
    .right_last {
      margin-left: 0px;
    }
  .home_box_six_2_right_1>span {
   line-height: 20px;
    margin-right:5px;
    display: inline-block;
    width: 18px;
  }
  .home_box_six_2_right_2 {
    font-size: 24px;
    margin: -10px 15px 0 0;
    width: 24px;
    float: right;

  }
    .home_box_six_2 h1{
        font-size: 42px;
        font-weight: 500;
        margin-top: 10px;
    }
    .home_box_six_2 h1 span {
        font-size: 70px;
        color: #9a1612;
    }
    .home_box_six_2 h1:nth-child(2){
        margin-left: 50px;
    }
    .home_box_six_2 h1:nth-child(3){
        margin-top: 20px;
        margin-left: 110px;
    }
    /*右侧固定部分*/
    .home_box_seven {
        position: fixed;
        right: 20px;
        top: 170px;
    }
  .home_box_seven ul li {
      margin: 20px 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(136, 136, 136, 0.37);
  }
    .active {
        background-color: #9a1612 !important;
    }
</style>
