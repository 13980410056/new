<template>
  <div>
    <div id="album_nav"></div>
    <div class="userPage userPageIndex">
      <!--头像 -->
      <div class="userPage-Head">
        <div class="userPage_headerborder"><img src="../assets/images/active/1.jpg" alt=""></div>
        <h3>小先生</h3>
        <p>四川  成都</p>
        <p>个人简介： 我的头像牛逼吗？</p>
      </div>

      <!-- 主页 相册 通知 参与活动 选项卡-->
      <div class="userPage-ul">
        <ul>
          <li ><router-link to="/userPage">主页</router-link></li>
          <li><router-link to="/userPage/photo">相册</router-link></li>
          <li><router-link to="/userPage/notice/AT">通知</router-link></li>
          <li><router-link to="/userPage/active">参与活动</router-link></li>
        </ul>
      </div>
      <div class="userPage-body">
        <router-view></router-view>
      </div>

    </div>
    <div id="album_foot"></div>
  </div>

</template>

<script>
  //  import userPageHome from './userPageHome.vue'
  export default {
    name: 'userPageIndex',
    components: {//  2. 注册组件
//      'userPageHome': userPageHome
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/userPage.less";
</style>
