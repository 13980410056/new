<template>
  <div class="perCen-indent">
    <div class="perCen-in">
      <ul>
        <li>所有订单</li>
        <li>代付款</li>
        <li>代发货</li>
        <li>待收货</li>
        <li>已签收</li>
        <li>退款</li>
      </ul>
    </div>
    <div class="perCen-in-odr">
      <ul>
        <li>商品信息</li>
        <li>单价（元）</li>
        <li>数量</li>
        <li>实付款（元）</li>
        <li>状态</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="perCen-in-inOdr">
      <div class="perCen-in-time">
        <span>2017-12-12</span>
        <span>订单号：</span>
        <span>151304727300138321</span>
      </div>
      <ul>
        <li>
          <img src="#" alt=""/>
          <div class="perCen-in-text">
            <p>汉尚华莲传统汉服女装配饰流苏白色毛领围脖秋冬款</p>
            <p><span>尺码：</span><span>默认</span></p>
            <p><span>样式：</span><span>浅蓝色毛领一个-现货</span></p>
          </div>
          <div class="perCen-in-money">
            <span>58</span>
            <span>1</span>
            <span>￥58.00</span>
            <span>代付款</span>
            <span>立即付款<br/>关闭订单</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'perCenIndent',
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
