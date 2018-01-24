<template>
  <div>
    <div class="communityNav">            <!--大的div背景-->
    </div>
    <div class="communityPublic_modal">     <!--模态框-->
      <button id="communityClose_btn">×</button>
      <textarea name="public_text" id="public_text"></textarea><!--多行输入框-->
      <div id="communityBtn_pack">           <!--按钮包-->
        <button id="communityLang"></button> <!--表情按钮-->
        <button id="communityImg"></button>  <!--图片按钮-->
        <button id="communityVideo"></button><!--视频按钮-->
      </div>

      <button id="communityPublic_sure">     <!--发表确认按钮-->
        <span>确认</span>
      </button>

      <div id="communityImgShow">

      </div>
    </div>

    <div class="communityDaohang">    <!--导航-->

    </div>
      <div class="communityHot">         <!--热门关注广场导航-->
        <button class=" btn_gz">
          <span><router-link :to="{name:'community'}">关注</router-link></span>
        </button>
        |
        <button class=" btn_rm">
          <span><router-link :to="{name:'hot'}">热门</router-link></span>
        </button>
        |
        <button class="btn_gc">
          <span><router-link :to="{name:'square'}">广场</router-link></span>
        </button>
      </div>

      <div class="communityLeft">   <!--左边部分-->
        <router-view/>
      </div>

      <div class="communityRight">  <!--右边banner部分-->
        <div class="communityTopcommunityImg">       <!--个人中心头像-->
          <div class="communityPersoncommunityImg">    <!--头像外面白框-->
            <div class="communityPersoncommunityImg_son"></div><!--头像图片-->
            <p>我是傻逼</p>
          </div>
        </div>

        <div class="communityNickname">           <!--昵称和人气粉丝-->
          <div class="communityPopularity">                   <!--人气-->
            <p>10</p>
            <span>人气</span>
          </div>

          <div class="communityLine_Y"></div>   <!--中间分割线-->

          <div class="communityFans">
            <p>55</p>
            <span>粉丝</span>
          </div>
        </div>
        <!--发文章按钮-->
        <br/>
        <!--<communityHr/>-->
        <div class="communityBtn_public">
          <button>
            发布动态
          </button>
        </div>
        <!--发文章按钮-->

        <!--发文章下方的按钮-->
        <div class="communityMyBlum">
          <button>
            我的收藏
          </button>

          <button>
            我的相册
          </button>

          <button>
            我的关注
          </button>
        </div>
    </div>
    <div id="album_foot"></div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    },
    components: {}
  }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";

  .communityNav { /*背景图*/
    width: 1347px;
    height: 710px;
    position: fixed;
    z-index: -1;
    background-image: url("../assets/images/community/u2.png");
    background-size: cover;
  }

  .communityDaohang { /*导航部分空*/
    width: 1347px;
    height: 190px;
    background-color: rgba(255, 255, 255, 0);
  }

  .communityHot { /*热门导航*/
    width: 857px;
    height: 50px;
    margin-left: 140px;
    padding-top: 20px;
    /*background-color: salmon;*/
    border-bottom: 1px solid black;
  }

  .communityHot button:nth-of-type(1) {
    margin-left: 0;
  }

  .communityHot button { /*三个关注，热门，广场按钮*/
    width: 50px;
    height: 40px;
    background-color: inherit;
    border: 0;
    outline: none;
    /*margin-left: 10px;*/
    transition: all .3s linear;
  }

  .communityHot button:hover { /*按钮移入效果*/
    cursor: pointer;
    color: #fa322d;
    background-color: inherit;
  }

  .communityLeft { /*左边部分*/
    width: 857px;
    height: 900px;
    margin-left: 140px;
    display: inline-block;
  }

  /*--------------------右边个人中心块---------------------*/
  .communityRight { /*右边个人中心轮播等*/
    width: 260px;
    height: 900px;
    /*border: 1px solid green;*/
    background-color: white;
    margin-left: 10px;
    position: absolute;
    top:260px;
    display: inline-block;
  }

  .communityTopcommunityImg { /*上方个人头像块*/
    width: 260px;
    height: 100px;
    background-image: url("../assets/images/community/bgperson.png");
    background-size: 100% 100%;
    position: relative;
  }

  .communityPersoncommunityImg { /*头像外面白色圈*/
    width: 80px;
    height: 80px;
    position: absolute;
    top: 55px;
    left: 90px;
    border-radius: 40px;
    background-color: white;
  }

  .communityPersoncommunityImg p { /*昵称*/
    width: 100px;
    font-size: 15px;
    margin-left: 10px;
    margin-top: 5px;
  }

  .communityPersoncommunityImg_son { /*头像*/
    width: 75px;
    height: 75px;
    margin-left: 2.5px;
    margin-top: 2.5px;
    border-radius: 40px;
    background-image: url("../assets/images/community/bg.gif");
    background-size: 100% 100%;
  }

  .communityNickname { /*人气，粉丝*/
    width: 260px;
    height: 70px;
    padding-top: 60px;
    /*background-color: saddlebrown;*/
  }

  .communityNickname p { /*数字0*/
    color: #ff669a;
  }

  .communityPopularity { /*人气*/
    width: 50px;
    height: 70px;
    line-height: 35px;
    /*background-color: salmon;*/
    text-align: center;
    float: left;
    color: rgb(177, 177, 177);
    margin-left: 50px;
  }

  .communityLine_Y { /*中间分割线*/
    width: 2px;
    height: 55px;
    float: left;
    margin-left: 25px;
    background-color: gray;
  }

  .communityFans { /*粉丝*/
    width: 50px;
    height: 70px;
    line-height: 35px;
    margin-left: 25px;
    color: rgb(177, 177, 177);
    text-align: center;
    float: left;
  }

  .communityHr {
    border: 1px solid rgb(177, 177, 177);
  }

  /*--------------------右边个人中心块---------------------*/
  /*发文章按钮*/
  .communityBtn_public {
    width: 260px;
    height: 65px;
    /*background-color: salmon;*/
    border-bottom: 1px solid rgb(177, 177, 177);
  }

  .communityBtn_public button {
    width: 210px;
    height: 40px;
    border: 0;
    margin: 10px 25px;
    color: #a02623;
    font-size: 18px;
    border-radius: 5px;
    outline: none;
    background-image: url("../assets/images/community/btn2.png");
    background-color: inherit;
    background-size: 100% 100%;
  }

  /*发文章按钮*/

  /*发文章之后的按钮*/
  .communityMyBlum { /*大框*/

  }

  .communityMyBlum button { /*按钮*/
    width: 210px;
    height: 50px;
    background-color: inherit;
    margin: 10px 25px;
    border: 0;
    background-image: url("../assets/images/community/btn3.png");
    background-size: 100% 100%;
    outline: none;
  }

  /*发文章之后的按钮*/

  /*---------发布文章模态框----------------*/
  .communityPublic_modal { /*模态框*/
    width: 800px;
    height: 550px;
    background-image: url("../assets/images/community/bgm.png");
    background-size: 100% 100%;
    position: fixed;
    top: 50px;
    left: 200px;
    transition: all .3s linear;
    display: none;
  }

  #communityClose_btn { /*关闭按钮*/
    width: 40px;
    height: 40px;
    font-size: 30px;
    border: 0;
    outline: 0;
    transition: all .2s linear;
    background-color: inherit;
  }

  #communityClose_btn:hover {
    color: #8b192c;
  }

  .communityPublic_modal textarea { /*多行文本框*/
    width: 700px;
    height: 150px;
    margin: 20px 50px;
    padding: 20px 10px;
    font-size: 18px;
    resize: none;
    border: none;
    outline: none;
    background-color: rgba(249, 249, 247, .7);
  }
.communitysect{
  height: auto;
}
  #communityBtn_pack {
    margin-left: 80px;
  }

  .communityPublic_modal button:hover { /*按钮包*/
    cursor: pointer;
  }

  #communityLang { /*表情按钮*/
    width: 20px;
    height: 20px;
    border: 0;
    outline: none;
    background-color: inherit;
    background-image: url("../assets/images/community/Lang.png");
    background-size: 100% 100%;
  }

  #communityImg { /*图片按钮*/
    width: 20px;
    height: 20px;
    border: 0;
    outline: none;
    margin-left: 10px;
    background-color: inherit;
    background-image: url("../assets/images/community/Img.png");
    background-size: 100% 100%;
  }

  #communityVideo { /*视频按钮*/
    width: 20px;
    height: 20px;
    border: 0;
    outline: none;
    margin-left: 10px;
    background-color: inherit;
    background-image: url("../assets/images/community/Video.png");
    background-size: 100% 100%;
  }

  #communityPublic_sure { /*发表确认按钮*/
    width: 120px;
    height: 40px;
    border: 0;
    outline: none;
    margin-top: 20px;
    margin-left: 600px;
    font-size: 16px;
    background-color: inherit;
    background-image: url("../assets/images/community/btn1.png");
    background-size: 100% 100%;
    transition: all .3s linear;
  }

  #communityPublic_sure:hover { /*按钮移入效果*/
    color: #fa3e39;
    background-image: url("../assets/images/community/btn2.png");
  }

  #communityImgShow { /*图片显示部分*/
    width: 700px;
    height: 200px;
    margin: 30px 50px;
    outline: 1px solid red;
  }

  /*---------发布文章模态框----------------*/
</style>
