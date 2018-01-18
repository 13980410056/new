<template>
  <div>
      <div class="header">
        <p class="iconfont icon-portal-icon-caidan"></p>
        <p>旅游</p>
        <router-link to="/Index/Personal" tag="div">
          <p class="iconfont icon-gerenzhongxin"></p>
        </router-link>
      </div>

  </div>
</template>
<script>
</script>
<style scoped>
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
