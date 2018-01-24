<template>
  <div class="perCen-sa-security as">
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
      <span>旧密码</span>
      <input type="text" name="oldpwd" class="perCen-sa-oldpwd"/>
    </p>
    <p class="perCen-sa-newpass">
      <span>新密码</span>
      <input type="text" name="newpwd" class="perCen-sa-newpwd"/>
    </p>
    <p class="perCen-sa-renewpass">
      <span>重复新密码</span>
      <input type="text" name="renewpwd" class="perCen-sa-renewpwd"/>
    </p>
    <p>
      <input type="button" class="perCen-sa-save" value="保存"/>
    </p>
  </div>
</template>

<script>
    export default{
        name: 'perCenSafetyPW',
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
