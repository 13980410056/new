<template>
  <div class="perCen-address">
    <p class="perCen-da-alter">收货地址管理</p>
    <div class="perCen-sa-acaddress perCen-sa-security">
      <p class="perCen-sa-phNum">
        <span>选择地区</span>
        <select>
          <option value="month" selected="selected">选择省份</option>
          <option value="m1">1</option>
          <option value="m2">2</option>
          <option value="m3">3</option>
        </select>
        <select>
          <option value="month" selected="selected">城市</option>
          <option value="m1">1</option>
          <option value="m2">2</option>
          <option value="m3">3</option>
        </select>
        <select>
          <option value="month" selected="selected">地区</option>
          <option value="m1">1</option>
          <option value="m2">2</option>
          <option value="m3">3</option>
        </select>
      </p>
      <p class="perCen-sa-">
        <span>详细地址</span>
        <textarea></textarea>
      </p>
      <p class="perCen-sa-oldpass">
        <span>收件人</span>
        <input type="text" name="newphone" class="perCen-sa-oldpwd"/>
      </p>
      <p class="perCen-sa-oldpass">
        <span>手机号码</span>
        <input type="text" name="newphone" class="perCen-sa-oldpwd"/>
      </p>
      <div><input type="button" class="perCen-sa-save" value="保存"/></div>
    </div>
    <div class="perCen-deaddress">
      <ul>
        <li>
          <p>
            <span>省级</span>
            <span>市</span>
            <span>地区</span>
          </p>
          <p>adress</p>
          <p>name</p>
          <p>1555555566</p>

          <div class="perCen-deaddress_box perCen-deaddress_box_de">
            <span>默认</span>
          </div>
          <div class="perCen-deaddress_box perCen-deaddress_box_del">
            <span>修改</span>
            <span>删除</span>
          </div>
        </li>
        <li>
          <p>
            <span>省级</span>
            <span>市</span>
            <span>地区</span>
          </p>
          <p>adress</p>
          <p>name</p>
          <p>1555555566</p>

          <!--<div class="perCen-deaddress_box perCen-deaddress_box_de">-->
          <!--<span>默认</span>-->
          <!--</div>-->
          <div class="perCen-deaddress_box perCen-deaddress_box_del">
            <span>修改</span>
            <span>删除</span>
          </div>
        </li>
        <li>
          <p>
            <span>省级</span>
            <span>市</span>
            <span>地区</span>
          </p>
          <p>adress</p>
          <p>name</p>
          <p>1555555566</p>

          <!--<div class="perCen-deaddress_box perCen-deaddress_box_de">-->
          <!--<span>默认</span>-->
          <!--</div>-->
          <div class="perCen-deaddress_box perCen-deaddress_box_del">
            <span>修改</span>
            <span>删除</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'perCenAddress',
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
