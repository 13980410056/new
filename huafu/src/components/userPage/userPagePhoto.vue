<template>
    <!--相册 -->
    <div class="userPage-photo userPagePhoto" >
      <div class="userPage-ph-myPhoto">
        <span>我的相册 </span>
        <span>我赞过的相册 </span>
        <span>我收藏的摄影作品 </span>
      </div>
      <ul class="userPage-ph-ul">
        <li>
          <span>＋</span>
        </li>

        <li>
            <img src="../../assets/images/active/1.jpg" alt=""/>
          <!--<div>-->
            <h3>  轻轻资金</h3>
            <p class="userPage-ph-AlName">  by 带娃娃    <span>赞 10</span></p>
          <!--</div>-->
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'userPagePhoto'
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
