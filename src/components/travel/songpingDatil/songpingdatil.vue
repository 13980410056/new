<template>
  <div>
  <!--头部组件引用-->
  <Header></Header>
    <!--松坪沟图片集-->
    <div class="songpingImg">
      <div class="first"><img src="../../../assets/image/songpingdatil2.jpg" alt=""></div>
      <div class="two">
        <img src="../../../assets/image/sonpingdatil1.jpg" alt="">
        <img src="../../../assets/image/songpingdatil3.jpg" alt="">
      </div>
    </div>
    <!--松坪沟简介-->
    <div class="spintroduction">
    <p>松坪沟乡位于茂县西北部，距县府61公里。面积419平方公里，最新的人口普查人口0.1279万。有公路东南接213国道。
松坪沟景区以"雄（富贵山、狮子山）、秀（叠溪上 下海子、五彩池）、异（特有的地震遗迹秀丽景观）、奇（原始森林奇树异景）、幽（鱼儿寨、长海原始森林）"为景观特征，以雄山、异水、秀林、幽沟为景观内容。</p>
    </div>
    <div class="fengeline"></div>
    <!--地点、时间-->
    <div class="location">
        <div class="telephone">
          <h4>电话</h4>
          <p>0837-7441588</p>
        </div>
        <div class="time">
          <h4>用时参考</h4>
          <p>步行3-5小时</p>
        </div>
      <div class="jiaot">
        <h4>交通</h4>
        <p>茂县有客车直达松坪沟景区，车票30元/人，坐大巴不收门票</p>
      </div>
      <div class="jiaot">
        <h4>景区门票</h4>
        <p>景区门票80，网上团购有优惠</p>
      </div>
      <div class="jiaot">
        <h4>开放时间</h4>
        <p>全天</p>
      </div>
    </div>
    <div class="fengeline"></div>
    <!--景点位置-->
    <div class="position">
      <h4>景点位置</h4>
      <p>四川省阿坝藏族羌族自治州茂县</p>
      <img src="../../../assets/image/ditu.jpg" alt="">
    </div>
    <div class="fengeline"></div>
    <!--热门优惠-->
    <div class="privilege">
      <h4>热门优惠</h4>
      <table class="active">
        <tr>
          <th>类型</th>
          <td></td>
          <th>价格</th>
        </tr>
        <tr>
          <td>景点门票</td>
          <td class="colorred">松坪沟门票</td>
          <td class="colorred">￥49元起</td>
          <td>立即预定</td>
        </tr>
        <tr>
          <td>景点门票</td>
          <td class="colorred">松坪沟门票</td>
          <td class="colorred">￥49元起</td>
          <td>立即预定</td>
        </tr>
        <tr>
          <td>景点门票</td>
          <td class="colorred">松坪沟门票</td>
          <td class="colorred">￥49元起</td>
          <td>立即预定</td>
        </tr>
        <tr></tr>


      </table>


    </div>
  </div>
</template>
<script>
  import Header from "./header.vue"
  export default{
      components:{
          "Header":Header
      }
  }
</script>
<style>
  .songpingImg{
    width: 100%;
    height: 290px;
    /*border: solid red 1px;*/
  }
  .first{
    display: flex;
    justify-content: center;
  }
  .first img{
    margin-top: 10px;
    width: 90%;
    height: 150px;
    object-fit:cover;
  }
  .two{
    display: flex;
    justify-content: center;
  }
  .two img{
    margin-top: 5px;
    width: 44%;
    height: 120px;
  }
  .two>:nth-child(1){
    margin-right: 2%;
  }
  /*松坪沟简介css样式*/
  .spintroduction{
    width: 90%;
    margin: auto;
  }
  .spintroduction p{
    text-indent: 2em;
    color:rgba(0,0,0,.6)
  }
  .fengeline{
    width: 90%;
    margin: auto;
    border-bottom: solid rgba(0,0,0,.3) 1px;
  }
  /*地点、时间css样式*/
  .location{
    width: 90%;
    height: 260px;
    margin: auto;
    /*border: solid red 1px;*/
  }
  .telephone{
    float: left;
    width: 50%;
  }
  .time{
    float: right;
    width: 49%;
    /*border: solid red 1px;*/
  }
  .location h4{
    line-height: 15px;
    font-size: 1.1em;
    color: rgba(0,0,0,.7);
  }
.position h4{
    line-height: 15px;
    font-size: 1.1em;
    color: rgba(0,0,0,.7);
  }
  .location,.position p{
    font-size: 1em;
    color: rgba(0,0,0,.5);
  }
  .position{
    width: 90%;
    height: 260px;
    margin: auto;
  }
  /*热门优惠*/
  .privilege{
    width: 90%;
    height: 280px;
    margin: auto;
    /*border: solid red 1px;*/
  }
  .active{
    width: 100%;
    height: 180px;
    text-align: center;
    background-color: #EBEBEB;
    /*border: solid red 1px;*/
  }
 table tr{
    height: 30px;
    border-bottom: solid red 1px;
    /*border: solid red 1px;*/
  }
  table tr :nth-child(4){
    background-color: #DE642F;
    color: white;
    width: 70px;
    height: 18px;
    border-radius: 15px;
    font-size: .4em;
  }
  .colorred{
    color: rgba(240,0,0,.7);
  }
</style>
