<template>
  <div class="userPageNotice userPage-inform">

  <div class="userPage-ph-myPhoto">
    <span><router-link to="/userPage/notice/AT">@我的</router-link></span>
    <span> <router-link to="/userPage/notice/comment">评论</router-link></span>
    <span><router-link to="/userPage/notice/like">赞</router-link></span>
  </div>
  <div class="userPage-post">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'userPageNotice'
//    data () {
//      return {
//        msg: 'Welcome to Your Vue.js App'
//      }
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/css/common.less";
  @import "../../assets/css/userPage.less";

</style>
