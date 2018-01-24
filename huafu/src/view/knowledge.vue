<template>
  <div id="know_box">
    <div id="album_nav"></div>

    <div class="know_content">

      <ul>
        <li>
          <!--<img :src="'http://localhost:8888'+item.nlg_url" alt=""/>-->
          <!--<p>{{item.nlg_title}}</p>-->
          <!--<p v-html="item.nlg_title">汉服·<span>科普</span></p>-->
          <!--<p>维天有汉，天汉有光。</p>-->
          <!--<p>汉之广矣，玉帛煌煌。</p>-->
          <!--<p>华夏之美，源远流长</p>-->
          <!--<p>礼仪之邦，衣冠上国</p>-->
          <!--</li>-->
        <li>
          <img src="../assets/images/knowledge/kind/liyi.jpg" alt=""/>
          <p>汉服·<span>礼仪</span></p>
          <p>有章服之美，谓之华</p>
          <p>有礼仪之大，故称夏</p>
        </li>
        <li>
          <img src="../assets/images/knowledge/kind/xingzhi.jpg" alt=""/>
          <p>汉服·<span>形制</span></p>
          <p>华夏复兴，衣冠先行</p>
          <p>始于衣冠，达于博远</p>
        </li>
        <li>
          <img src="../assets/images/knowledge/kind/tuwen1.jpg" alt=""/>
          <p>汉服·<span>图文</span></p>
          <!--<p>陌上长歌，与子同衿</p>-->
          <!--<p>岂曰无衣，与子同袍</p>-->
          <!--<p>着我汉家衣裳，兴我礼仪之邦。</p>-->
          <p>天地间，人最贵</p>
          <p>人之中，汉最大</p>
          <p></p>
        </li>
      </ul>

    </div>

    <div id="album_foot"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'knowledge',
    data :function() {
      return {

      }
    },
//    created:function(){
//      this.axiosGet()
//    },
    methods:{
//      axiosGet: function () {
//        var that = this;
//        this.$axiosRequest({
//          method: "get",
//          url: 'http://localhost:8888/bbs/bbsList.do',
//          data: {}
//        }).then(function (data) {
//          that.list = data;
//          console.log(that.list);
//        }).catch(function (err) {
//          console.log(err)
//        })
//      },
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/common.less";

  /*最外层框*/
  #know_box {
    width: 100%;
    height: auto;
    background-image: url("../assets/images/bg/fullBg.png");
  }

  /*内容放置*/
  .know_content {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding: 35px 0 35px 0;
    display: flex;
    justify-content: space-between;
  }
  .know_content>ul>li{
    float: left;
    width: 260px;
    text-align: center;
    border: 10px solid rgba(0,0,0,0);
    height: 470px;
    list-style-type: none;
    transition: all .3s linear;
  }
  .know_content>ul>li:hover{
    transform: scale(1.05);
    background-color: white;
    border: 10px solid white;
    box-shadow:
      -3px 0 5px #d8d8d8, /*左边框阴影*/
      3px 0 5px #d8d8d8, /*右边框阴影*/
      0 10px 15px #d8d8d8; /*下边框阴影*/
  }
  .know_content>ul>li>img{
    width: 240px;
    height: 315px;
  }
  .know_content>ul>li>p:nth-child(2){
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    color: #9a1612;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .know_content>ul>li>p:nth-child(3){
    margin-bottom: 5px;
  }

</style>
