<template>
  <div class="act">
    <div id="album_nav"></div>
    <!-------------循环出活动列表----------->
    <div class="actbox" v-for="item in list">
      <img :src="'http://localhost:8888'+item.act_url" alt=""/>
      <!-------------循环出活动图片----------->
      <!--<img src="../../assets/ban1.jpg" alt=""/>-->
      <!-------------循环出活动标题----------->
      <div class="act-2">
        <b>{{item .act_title}}</b>
      </div>
      <!-------------循环出活动时间----------->
      <div class="act-3">
        <b>{{item .act_date}}</b>
      </div>
      <!-------------循环出活动状态----------->
      <div class="act-4">
        <b>{{item .state}}</b>
      </div>
      <!-------------循环出活动概括----------->
      <div class="act-5">
        <p>{{item .act_type}}</p>
      </div>
      <!-------------循环出活动参赛人数----------->
      <div class="smallBox"><span>121人</span><br/>参赛</div>
      <button class="act-btn" :id="item .act_id">
        <router-link :to="{name:'activityDetails'}">查看详情>></router-link>
      </button>
    </div>
    <div id="album_foot"></div>
  </div>
</template>

<script>

  export default{
    name: '',
    data: function () {
      return {
        'list': {}
      }
    },
    created: function () {
      this.axiosGet();
    },
    methods: {
      axiosGet: function () {
        var that = this;
        this.$axiosRequest({
            method: "post",
            url: '/api/activity/activityList.do',
            data: {}
          }
        ).then(function (res) {
            that.list = res;
            if (that.list.state == "1") {
              console.log(that.list.state);
              that.list.state = "报名中"
            } else {
              that.list.state = "已结束"
            }
            console.log(that.list);
          }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }

</script>

<style scoped>
  table th {
    text-align: center;
  }

  table td img {
    width: 50px;
    height: 80px;
  }

  .actbox {
    width: 1100px;
    height: 390px;
    background-color: white;
    margin: 30px auto;

  }

  .actbox div {
    position: relative;
  }

  .actbox img {
    width: 1100px;
    height: 300px;
    background-color: #0074D9;
  }

  .smallBox {
    width: 60px;
    height: 60px;
    color: black;
    background-color: white;
    border: 1px solid darkred;
    border-radius: 5px;
    font-size: 14px;
    position: relative;
    margin-left: 40px;
    margin-top: -120px;
  }

  .smallBox span {
    font-size: 18px;
    color: darkred;
  }

  .act-2 {
    width: 180px;
    height: 25px;
    text-align: left;
    font-size: 20px;
    font-family: STXingkai;

    margin-left: 180px;
    margin-top: 10px;
  }

  .act-3 {
    width: 100px;
    height: 25px;
    text-align: left;
    margin-left: 30px;
  }

  .act-4 {
    width: 80px;
    height: 25px;
    margin-left: 30px;
  }

  .act-5 {
    width: 730px;
    height: 50px;
    margin-left: 180px;
    margin-top: -50px;

  }

  button {
    width: 100px;
    height: 30px;
    border: 0;
    background-color: inherit;
    margin-left: 950px;
    margin-top: 15px;
  }

  button a {
    color: darkred;
  }

</style>
