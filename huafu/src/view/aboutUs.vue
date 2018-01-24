<template>
  <div class="aboutUsBox">
    <div id="album_nav"></div>
    <div class="aboutUsBox_1">
      <h2>关于我们</h2>
      <p>
        华风汉服上线于2017年10月，是一个以汉服为中心的垂直社区，主要有摄影、社区、商城等数个模块。通过平台可以分享汉服摄影、汉服日常，可以勾搭同袍、寻找组织。
      </p>
      <p>
        2017年上线12月商城，实现一站解决汉服购买需求。
      </p>
      <div class="aboutUsBox_1_1"></div>
      <p><strong>地址：</strong>四川.成都</p>
      <p><strong>电话：</strong>0101-02020202</p>
      <p><strong>粉丝交流群：</strong>88888888</p>
    </div>
    <div id="album_foot"></div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    },
    methods: {}

  }
</script>
<style scoped lang="less">
  @import "../assets/css/common.less";
  .aboutUsBox {
    background-image: url(../assets/images/bgs.png);
    width: 100%;
    height: auto;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .aboutUsBox_1 {
    width: 80%;
    margin: 30px auto;
    padding: 20px;
    background-color: #fff;
    font-family: "Microsoft YaHei", "微软雅黑", tahoma, arial, simsun, "宋体";
  }

  .aboutUsBox_1_1 {
    border: 0.5px rgba(104, 104, 104, 0.72) dashed;
    width: 60%;
  }

  .aboutUsBox_1 p {
    margin: 28px 0;
  }

</style>
