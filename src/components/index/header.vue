<template>
  <!--<div class="headertop">-->
      <div class="header">
        <router-link to="/Menu" tag="div">
        <p class="iconfont icon-portal-icon-caidan"></p>
        </router-link>
        <p>首页</p>
        <router-link to="/Index/Personal" tag="div">
        <p class="iconfont icon-gerenzhongxin"></p>
        </router-link>
      </div>
  <!--</div>-->
</template>
<script>
</script>
<style scoped>
  /*.headertop{*/
    /*position: fixed;*/
    /*top: 0px;*/
    /*left: 0px;*/
  /*}*/
  .header{
    width: 100%;
    height: 60px;
    background-color: #099894;
    display: flex;
    justify-content: space-around;
    color: white;
    font-size: 5vw;
  }
  .iconfont{
    font-size: 6vw;
  }
  .header p{
    line-height: 60px;
  }

</style>
