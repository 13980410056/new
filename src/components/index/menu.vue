<template>
  <!--菜单组件-->
  <div class="menu">
      <router-link to="/Community" class="Menufirst" tag="div">
      <img src="../../assets/image/shequ.png" alt="">
      <p>社区</p>
      <span></span>
      </router-link>
    <div class="Menufirst">
      <img src="../../assets/image/perzhiyuan.png" alt="">
      <p>志愿者</p>
      <span></span>
    </div>
    <div class="Menufirst">
      <img src="../../assets/image/active1.png" alt="">
      <p>活动</p>
      <span></span>
    </div>
    <router-link to="/Index/mainIndex" class="close" tag="div">
      <img src="../../assets/image/close.png" alt="">
    </router-link>

  </div>

</template>
<script></script>
<style>
  .menu{
    width: 100%;
    height: 667px;
    color: white;
    font-size: 1.2em;
    text-align: center;
    background-color: #099894;
  }
  .Menufirst{
    box-sizing: border-box;
    padding-top: 50px;
  }
  .Menufirst img{
    width: 60px;
    height: 60px;
    opacity: .8;
  }
  .menu span{
    display:inline-block;
    width:30% ;
    border: solid rgba(255,255,255,.4) 1px;
  }
  .close img{
    width: 50px;
    height: 50px;
    margin-top: 40px;
  }
</style>
