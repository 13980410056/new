<template>
  <div id="knowKind_box">
    <div id="album_nav"></div>
    <div class="knowKind_content">
      <p>汉服知识 > 科普</p>
      <div class="knowKind_main">
        <div>
          <img src="../../assets/images/knowledge/分类页面/u13.jpg" alt="">
          <div>
            <h3>中国汉族的传统民族服饰—汉服的文化内涵</h3>
            <span>2017-12-11</span><!--发布时间-->
            <p>汉服，就是中国汉族的传统民族服饰，也就是我们经常说的“华夏衣冠”，一般具有交领、无扣、右衽等特点，潇洒飘逸的形象，让人印象深刻。这里的“汉”指的是汉族，而不是指汉朝...</p>
          </div>
        </div>
        <div>
          <img src="../../assets/images/knowledge/分类页面/u18.png" alt="">
          <div>
            <h3>中国汉族的传统民族服饰—汉服的文化内涵</h3>
            <span>2017-12-11</span><!--发布时间-->
            <p>汉服，就是中国汉族的传统民族服饰，也就是我们经常说的“华夏衣冠”，一般具有交领、无扣、右衽等特点，潇洒飘逸的形象，让人印象深刻。这里的“汉”指的是汉族，而不是指汉朝...</p>
          </div>
        </div>
        <div>
          <img src="../../assets/images/knowledge/分类页面/u29.png" alt="">
          <div>
            <h3>中国汉族的传统民族服饰—汉服的文化内涵</h3>
            <span>2017-12-11</span><!--发布时间-->
            <p>汉服，就是中国汉族的传统民族服饰，也就是我们经常说的“华夏衣冠”，一般具有交领、无扣、右衽等特点，潇洒飘逸的形象，让人印象深刻。这里的“汉”指的是汉族，而不是指汉朝...</p>
          </div>
        </div>
        <div>
          <img src="../../assets/images/knowledge/分类页面/u40.jpg" alt="">
          <div>
            <h3>中国汉族的传统民族服饰—汉服的文化内涵</h3>
            <span>2017-12-11</span><!--发布时间-->
            <p>汉服，就是中国汉族的传统民族服饰，也就是我们经常说的“华夏衣冠”，一般具有交领、无扣、右衽等特点，潇洒飘逸的形象，让人印象深刻。这里的“汉”指的是汉族，而不是指汉朝...</p>
          </div>
        </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/css/common.less";
  /*最外层框*/
  #knowKind_box{
    width: 100%;
    height: auto;
    background-image: url("../../assets/images/bg/fullBg.png");
  }
  /*内容放置*/
  .knowKind_content{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding: 35px 0 35px 0;
  }
  .knowKind_main{
    width: 100%;
    padding-top: 70px;
    padding-bottom: 35px;
  }
  .knowKind_main>div{
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 200px;
    margin-top: 35px;
    /*padding-bottom: 10px;*/
  }

  .knowKind_main>div>img{
    width: 300px;
    float: left;
  }
  .knowKind_main>div>div{
    float: left;
    margin-left: 55px;
  }
  .knowKind_main>div>div>h3{
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .knowKind_main>div>div>span{
    color: #666;
  }
  .knowKind_main>div>div>p{
    width: 650px;
    margin-top: 25px;
    line-height: 25px;
  }
</style>
