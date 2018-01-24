<template>
  <div class="content">
    <!--轮播-->
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/image/IndexLunbo1.jpg"></div>
          <div class="swiper-slide"><img src="../../assets/image/IndexLunbo1.jpg"></div>
          <div class="swiper-slide"><img src="../../assets/image/IndexLunbo1.jpg"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <!--图标连接-->
    <div class="IconLink">
      <router-link :to="{name:'index'}" tag="div">
         <div class="IconBg">
           <img src="../../assets/image/indeximg11.png" alt="">
         </div>
          <div> 每日羌族</div>
      </router-link>
      <router-link :to="{name:'index' }" tag="div">
        <div class="IconBg">
          <img src="../../assets/image/indeximg11.png" alt="">
        </div>
        <div>羌族文化</div>
      </router-link>
      <router-link :to="{name:'index'}" tag="div">
        <div class="IconBg">
          <img src="../../assets/image/indeximg11.png" alt="">
        </div>
        <div> 名胜古迹</div>
      </router-link>
      <router-link to="/WalkIntoQz" tag="div">
        <div class="IconBg">
          <img src="../../assets/image/indeximg11.png" alt="">
        </div>
        <div>走进羌族</div>
      </router-link>
    </div>
    <!--分割条-->
      <div class="fengetiao"></div>
    <!--不可错过的景点-->
    <div class="SceneryLink">
    <div>
      <img src="../../assets/image/indexsencery.jpeg" alt="">
      <div >
        <p>不可错过的风景<span>来羌族就要去这里</span></p>
        <p class="iconfont icon-right"></p>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
//import 'swiper/dist/vue-awersome-swiper.js'

//  var mySwiper = new Swiper ('.swiper-container', {
//    direction: 'vertical',
//    loop: true,
//    // 如果需要分页器
//    pagination: '.swiper-pagination',
//    // 如果需要滚动条
//    scrollbar: '.swiper-scrollbar',
//  })

</script>
<style scoped>
  .content{
    width: 100%;
    height: 640px;
  }
  /*轮播样式设置*/
  .swiper-container {
    width: 100%;
    height: 250px
  }
  .swiper-slide img{
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  /*图标链接*/
  .IconLink{
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 10px;
  }
  .IconBg{
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background-color: #D43D28;
  }
  .IconBg img{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    width: 60px;
  }
  .fengetiao{
    width: 100%;
    height: 10px;
    background-color: #F2F2F2;
  }
  /*不可错过的风景*/
  .SceneryLink{
    position: relative;
    width: 100%;
    height: 200px;
  }
  .SceneryLink img{
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .SceneryLink div{
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 40px;
    color: white;
    background-color: rgba(0,0,0,.6);
  }
  .SceneryLink div>:first-child{
    float: left;
  }
  .SceneryLink div>:last-child{
    box-sizing: border-box;
    float: right;
    padding-right: 10px;
    line-height: 40px;
  }
</style>
