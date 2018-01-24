<template>
  <div class="personCenter">
    <!-- 左边-->
    <div class="perCen-left">
      <div class="perCen-head">
        <img src="#" alt=""/>
        <p>小先生</p>
      </div>
      <div class="perCen-store">
        <ul>
          <li>商城管理</li>
          <li><router-link to="/perCenIndex/indent">我的订单</router-link></li>
          <li><router-link to="/perCenIndex/collect">我的收藏</router-link></li>
          <li><router-link to="/perCenIndex/estimate">我的评价</router-link></li>
          <li>我的购物车</li>
        </ul>
      </div>
      <div class="perCen-per">
        <ul>
          <li>个人管理</li>
          <li><router-link to="/perCenIndex/datum">我的资料</router-link></li>
          <li><router-link to="/perCenIndex/safety/pw">账户安全</router-link></li>
          <li><router-link to="/perCenIndex/address">收货地址</router-link></li>
        </ul>
      </div>
    </div>
    <!-- 右边-->
    <div class="perCen-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'perCenIndex',
    data () {
      return {}
    },
    components: {}
  }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/personCenter.less";

</style>
