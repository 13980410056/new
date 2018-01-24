<template>
  <div id="abdt_box">
    <div id="album_nav"></div>
    <div class="abdt_content">
      <div class="abdt_bg"><!--相册头部背景and介绍-->
        <h3>《三世书·彼岸》</h3><!--获取介绍-->
        <p>“孟婆说，我到不了彼岸 我有执念，我在等我的阿哥 金榜题名，洞房花烛”</p>
      </div>
      <div class="abdt_main"><!--相册详情内容-->
        <div class="abdt_user"><!--用户头像、用户ID、发布时间、照片总数-->
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt=""><!--头像-->
          <span>迦南</span><!--ID-->
          <span>| 2017-11-15 18:34:51</span><!--时间-->
          <!--<span>共14张照片</span>&lt;!&ndash;照片总数&ndash;&gt;-->
          <button class="abdt_btn">+ 关注</button>
        </div>
        <div class="abdt_intro"><!--摄像师、出镜人-->
          <p>摄影| <span>迦南</span></p><!--获取用户名-->
          <p>出镜| <span>wuli可可</span></p>
        </div>
        <div class="abdt_smallImg"><!--小图合集-->
          <img src="../../assets/images/album/蒂莲/4.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/5.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/6.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/1.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/2.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/3.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/7.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/8.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/9.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/1.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/2.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/3.jpg" alt="">
        </div>
        <div class="abdt_bigImg"><!--大图片合集-->
          <img src="../../assets/images/album/蒂莲/1.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/2.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/3.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/1.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/2.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/3.jpg" alt="">
        </div>
        <div class="abdt_btn">点赞 <span>15</span></div>
        <div class="abdt_btn">收藏</div>
        <div class="abdt_top">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
          <img src="../../assets/images/album/蒂莲/f15.jpg" alt="">
        </div>
      </div>
    </div>
    <div id="album_foot"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'albumDetails',
        data () {
            return {}
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/css/common.less";
  /*最外层框*/
  #abdt_box{
    width: 100%;
    height: auto;
    background-image: url("../../assets/images/bg/fullBg.png");
  }
  /*内容放置*/
  .abdt_content{
    width: 1100px;
    height: 100%;
    /*outline: 1px solid black;*/
    margin: 0 auto;
  }
  /*相册头部背景*/
  .abdt_bg{
    width: 100%;
    height: 250px;
    background-image: url("../../assets/images/album/蒂莲/background.jpg");
    background-size: cover;
    text-align: center;
    overflow: hidden;
  }
  /*相册介绍*/
  .abdt_bg>h3{
    color: white;
    font-size: 24px;
    margin-top: 73px;
  }
  .abdt_bg>p{
    color: white;
    margin-top: 35px;
  }
  /*相册详情内容*/
  .abdt_main{
    /*width: 100%;*/
    height: auto;
    background-color: @whiteBg5;
    padding: 50px 170px 100px 170px;
  }
  /*用户信息*/
  .abdt_user{
    width: 100%;
    height: 50px;
  }
  .abdt_user>img{
    width: 50px;
    height: 50px;
  }
  .abdt_user>span:nth-of-type(1){
    vertical-align: middle;
    color: #333;
  }
  .abdt_user>span:nth-of-type(2){
    vertical-align: middle;
    color: #666;
  }
  .abdt_user>span:nth-of-type(3){
    float: right;
    margin-top: 18px;
    color: #666;
  }
  /*人物介绍*/
  .abdt_intro{
    width: 100%;
    height: 130px;
    background-color: #f8f8f8;
    margin-top: 35px;
    margin-bottom: 35px;
    overflow: hidden;
  }
  .abdt_intro>p{
    text-align: center;
    margin-top: 32px;
    color: #666;
  }
  .abdt_intro>p>span{
    color: #333;
  }
  /*小图片合集*/
  .abdt_smallImg{
    width: 100%;
    height: auto;
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 30px;
  }

  .abdt_smallImg>img{
    width: auto;
    height: 130px;
    margin-top: 5px;
  }
  /*大图片合集*/
  .abdt_bigImg{
    width: 100%;
    height: auto;
    padding-top: 35px;
    padding-bottom: 35px;
    text-align: center;
  }
  .abdt_bigImg>img{
    width: 700px;
    height: auto;
    margin-top: -1px;
    margin-bottom: -1px;
  }
  .abdt_btn{
    display: inline-block;
    width: 100px;
    height: 30px;
    outline: none;
    color:@fontColorHover;
    margin-left: 395px;
    vertical-align: middle;
    background: none;
    font-size: 16px;
    cursor: pointer;
  }
  /*点赞*/
  .abdt_top{
    width: 100%;
    height: auto;
    margin-top: 35px;
    background-color: #f3f3f3;
  }
  .abdt_top>img{
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: 10.5px;
    margin-bottom: 20px;
  }
</style>
