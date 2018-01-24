<template>
  <div class="app">
    <div class="navDiv">
      <nav>
        <ul>
          <li><router-link :to="{name:'home'}">首页</router-link></li>
          <li><router-link :to="{name:'knowledge'}">知识</router-link></li>
          <li><router-link :to="{name:'album'}">摄影</router-link></li>
          <li><router-link :to="{name:'community'}">社区</router-link></li>
          <li id="logo"><h1><router-link :to="{name:'home'}"><img src="./assets/images/nav/logo.png" alt="" width="91" height="91"></router-link></h1></li>
          <li><router-link :to="{name:'goods'}">商城</router-link></li>
          <li><router-link :to="{name:'activity'}">活动</router-link></li>
          <li><router-link :to="{name:'news'}">资讯</router-link></li>
          <li id="navLast"><login></login></li>
        </ul>
      </nav>
    </div>
    <router-view/>

    <myFooter></myFooter>
  </div>
</template>

<script>
  import myFooter from './components/common/foot.vue'
  import login from './components/common/login.vue'
  import register from './components/common/register.vue'
  export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
      myFooter,login,register
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  @import "./assets/css/common.less";
  .navDiv{
    width: 100%;
    position: absolute;
    left: 0;
    top:0;
  }
  nav{
    width: 1100px;
    margin: 0 auto;
    height: 150px;
    overflow: hidden;
  }
  nav ul{
    padding: 0;
  }
  nav ul li{
    float: left;
    /*height: 150px;*/
    margin-right: 77px;
    font-size: 24px;
    width: 24px;
    line-height: 24px;
    margin-top: 51px;
  }
  nav ul li a{
    color:@fontColor;
  }
  nav ul li a:hover{
    color:@fontColorHover;
    text-decoration: none;
  }
  #logo{
    width: 250px;
    height: 160px;
    background-image: url(./assets/images/nav/logoBorder.png);
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    padding: 0;
    margin-top: 0;
  }
  nav ul li img{
    margin: 0 auto;
    display: block;
    margin-top: 34px;
  }
  #navLast{
    margin-right: 0;
    width: 60px;
  }
  #navLast span{
    display: block;
    width: 24px;
    line-height: 24px;
    float: left;
  }
  #navLast span:nth-child(1){
    margin-right: 10px;
  }
</style>
