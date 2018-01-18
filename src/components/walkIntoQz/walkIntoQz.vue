<template>
  <div>
  <!--头部组件使用-->
  <Header></Header>
   <!--走进羌族组件-->
    <div class="walkinto">
      <div class="walkintoImg">
        <img src="../../assets/image/walkinto1.jpg" alt="">
        <div class="walkintoText">
          <img src="../../assets/image/bofang.png" alt="">
          <p>宗教信仰</p>
        </div>
      </div>
      <div class="walkintoImg">
        <img src="../../assets/image/walkinto2.jpg" alt="">
        <div class="walkintoText">
          <img src="../../assets/image/bofang.png" alt="">
          <p>宗教信仰</p>
        </div>
      </div>
      <div class="walkintoImg">
        <img src="../../assets/image/walkinto3.jpg" alt="">
        <div class="walkintoText">
          <img src="../../assets/image/bofang.png" alt="">
          <p>宗教信仰</p>
        </div>
      </div>


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
  .walkinto{
    width: 100%;
    height: 680px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .walkintoImg{
    position: relative;
    width: 85%;
    height: 180px;
    margin-top: 15px;
  }
  .walkintoImg img{
    width: 100%;
    height: 180px;
    border-radius: 10px;
    text-align: center;
  }
  .walkintoText{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 180px;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(0,0,0,.4);
    color:rgba(255,255,255,.8);
  }
  .walkintoText img{
    margin-top: 60px;
    width: 40px;
    height: 40px;
  }
</style>
