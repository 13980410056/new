<template>
  <div class="perCen-datum">
    <p class="perCen-da-alter">资料修改</p>
    <p class="perCen-da-img">
      <span>头像</span>
      <img src="#" alt=""/>
      <span>上传头像</span>
    </p>
    <p class="perCen-da-name">
      <span>昵称</span>
      <input type="text" name="nickname" class="perCen-da-nickname"/>
    </p>
    <p class="perCen-da-sex">
      <span>性别</span>
      <input type="radio" checked="checked" name="Sex" value="male"/>粗汉子
                <input type="radio" name="Sex" value="female"/>萌妹子
            </p>
    <p class="perCen-da-birthday">
      <span>生日</span>
      <select>
        <option value="year" selected="selected">选择年份</option>
        <option value="y1995">1995</option>
        <option value="y1996">1996</option>
        <option value="y1997">1997</option>
      </select>
      <select>
        <option value="month" selected="selected">月份</option>
        <option value="m1">1</option>
        <option value="m2">2</option>
        <option value="m3">3</option>
      </select>
      <select>
        <option value="day" selected="selected">日期</option>
        <option value="d1">1</option>
        <option value="d2">2</option>
        <option value="d3">3</option>
      </select>
    </p>
    <p class="perCen-da-location">
      <span>所在地</span>
      <select>
        <option value="province" selected="selected">选择省份</option>
        <option value="p1">四川</option>
        <option value="p2">上海</option>
        <option value="p3">北京</option>
      </select>
      <select>
        <option value="city" selected="selected">城市</option>
        <option value="c1">成都</option>
        <option value="c2">浦东</option>
        <option value="c3">北京</option>
      </select>
    </p>
    <p>
      <input type="button" class="perCen-da-save" value="保存"/>
    </p>

  </div>
</template>

<script>
    export default{
        name: 'perCenDatum',
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
