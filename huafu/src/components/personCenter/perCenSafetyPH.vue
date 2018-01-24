<template>
  <div class="perCen-sa-acPhone perCen-sa-security">
    <p class="perCen-sa-phNum">
      <span>手机号码</span>
      <input type="text" name="phone" class="perCen-sa-phone"/>
    </p>
    <p class="perCen-sa-">
      <span>验证码</span>
      <input type="text" name="code" class="perCen-sa-code"/>
      <input type="button" value="获取验证码"/>
    </p>
    <p class="perCen-sa-oldpass">
      <span>新手机</span>
      <input type="text" name="newphone" class="perCen-sa-oldpwd"/>
    </p>
    <p class="perCen-sa-newpass">
      <span>验证码</span>
      <input type="text" name="code" class="perCen-sa-code"/>
      <input type="button" value="获取验证码"/>
    </p>
    <p>
      <input type="button" class="perCen-sa-save" value="保存"/>
    </p>
  </div>
</template>

<script>
    export default{
        name: 'perCenSafetyPH',
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
