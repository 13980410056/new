<template>
  <div>
  <!--引用头部组件-->
  <Header></Header>
  <div class="myfavorite">
    <div>
      <img src="../../assets/image/myfavorite.jpg" alt="">
    </div>
    <div class="myfavoriteText">
      羌族几乎每个妇女都擅长挑花刺绣.2008年,羌族刺绣入选第二批国家级非物质文化遗产近几年,民族特色浓厚的羌绣工艺品日益受到追捧
    </div>
    <div class="photographer">
      <p>萝卜寨  &emsp; 摄</p>
      <span>2017/12/23</span>
    </div>
    <div class="collect"><i class="iconfont icon-27kongxintaoxin"></i></div>
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
  .myfavorite{
    width: 100%;
    height: 605px;
    background-color: #099894;
  }
  .myfavorite img{
    width: 365px;
    height: 270px;
    border-radius: 100%;
    border: solid white 4px;
   margin-top: 10px;
  }
  .myfavoriteText{
    width: 53%;
    height: 135px;
    color: rgba(255,255,255,.8);
    line-height: 20px;
    margin: auto;
  }
  .photographer{
    width: 90%;
    height: 50px;
    color: rgba(255,255,255,.4);
    text-align: right;
  }
  .photographer p{
    color: rgba(255,255,255,.8);
    font-size: 1em;
  }
  .collect{
    text-align: center;
    color: white;
  }
  .collect i{
    font-size: 4em;
  }
</style>
