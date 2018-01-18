<template>
  <div>
  <MainIndex></MainIndex>
  <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "./footer.vue"
  import MainIndex from "./mainIndex.vue"

  export default{

    name:'',
    data:function(){
      return{

      }
    },
    components:{
      "Footer":Footer,
      "MainIndex":MainIndex
    }
  }
</script>
<style></style>
