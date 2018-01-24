<template>
  <div class="perCen-safety">
    <p class="perCen-sa-acSecurity">账户安全</p>
    <p class="perCen-sa-acMima"><span><router-link to="/perCenIndex/safety/pw">密码设置</router-link></span><span><router-link to="/perCenIndex/safety/ph">手机号绑定</router-link></span></p>

    <router-view></router-view>

  </div>
</template>

<script>
    export default{
        name: 'perCenSafety',
        data () {
            return {}
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @import "../../assets/css/common.less";
    @import "../../assets/css/personCenter.less";



</style>
