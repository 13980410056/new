<template>
  <div class="footer">
    <router-link to="/Index/mainIndex" tag="div">
    <div><i class="iconfont icon-qiyewenhua"></i></div>
    <div>文化</div>
    </router-link>
    <router-link to="/Index/Travel" tag="div">
      <div><i class="iconfont icon-xiangji3"></i></div>
      <div>旅游</div>
    </router-link>
    <router-link to="/Index/Store" tag="div">
      <div><i class="iconfont icon-zaixianyuyue1"></i></div>
      <div>商城</div>
    </router-link>
    <router-link to="/Index/Personal" tag="div">
      <div><i class="iconfont icon-gerenzhongxin"></i></div>
      <div>个人中心</div>
    </router-link>
  </div>
</template>
<script></script>
<style scoped>
  .footer{
    position: fixed;
    bottom: 0px;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    background-color: #099894;
    display: flex;
    justify-content: space-around;
    color: white;
    text-align: center;
    padding-top: 5px;
  }
  .footer i{
    font-size: 7vw;
    line-height:40px ;
    margin-top: 10px;
  }

</style>
