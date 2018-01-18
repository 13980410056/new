<template>
  <div>
  <Header></Header>
    <!--社区话题组件-->
    <div class="community">
      <div><img src="../../assets/image/huatiimg.jpg" alt=""></div>
      <div>
        <p>吃货小姐姐</p>
        <span>15分钟前</span>
        <p>终于来到了期盼已久的松坪沟，这个冬季我在松坪沟</p>
        <div>

        </div>
      </div>

    </div>
  </div>

</template>
<script>
  import Header from "./header.vue"
  export default{
      components:{
          "Header":Header
      }
  }

</script>
<style>
  .community{

  }
</style>
