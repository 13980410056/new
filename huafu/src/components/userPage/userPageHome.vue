<template>
  <div class="userPage-homepage userPageHome">
    <div class="userPage-post">
      <!--内容-->
    </div>
    <div class="userP-hp-popular">
      <div class="userP-hp-pNum">
        <span><router-link to="/userPage/fans">1</router-link></span>
        <span>2</span>
        <span>3</span>
      </div>
      <span>人气</span>
      <span>粉丝</span>
      <span>关注</span>
    </div>
    <div class="userP-hp-fan">
      <p class="userP-hp-fans">他的粉丝</p>
      <div class="userP-hp-fans_list">
        <img src="../../assets/images/active/1.jpg" class="userP-hp-FHeadImg" alt="">
        <div class="userP-hp-FHeadName">
          <p>呜呜呜</p>
          <p>地址</p>
        </div>
        <div class="userP-hp-Fattention">
          <!--关注按钮-->
        </div>
      </div>
      <div class="userP-hp-fans_list">
        <img src="../../assets/images/active/1.jpg" class="userP-hp-FHeadImg" alt="">
        <div class="userP-hp-FHeadName">
          <p>呜呜呜</p>
          <p>地址</p>
        </div>
        <div class="userP-hp-Fattention">
          <!--关注按钮-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'userPageHome'
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  @import "../../assets/css/userPage.less";

</style>
