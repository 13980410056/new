<template>
  <div id="app">
    <!--<Index></Index>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Index from './components/index/index.vue'
  import "../static/mui-0.9.35/js/mui.min.js"
export default {
  name: 'app',
  data:function(){
      return{

      }
  },
  components:{
      "Index":Index
  }
}
</script>

<style>
  @import './assets/font/iconfont.css';
  @import "../static/mui-0.9.35/css/mui.min.css";
  *{
    margin: 0px;
    padding: 0px;
  }
</style>
