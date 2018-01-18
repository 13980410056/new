<template>
  <div>
    <Header></Header>
    <IndexContent/>
    <div class="footerHeight"></div>
  </div>
</template>
<script>
  import Header from './header.vue';
  import IndexContent from './IndexContent'
  export default{
    components:{
      "Header":Header,
      "IndexContent":IndexContent
    }
  }
</script>
<style>
  .footerHeight{
    width: 100%;
    height: 80px;
  }
</style>
