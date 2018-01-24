<template>
      <div class="header">
        <router-link to="/Menu" tag="div">
        <p class="iconfont icon-xiangzuo3"></p>
        </router-link>
       <div class="typicTitle">
         <p>话题</p>
         <p>热门</p>
         <p>交流</p>
       </div>
        <router-link to="/Personal" tag="div">
        <p class="iconfont icon-xiangji4"></p>
        </router-link>
      </div>
</template>
<script>
</script>
<style scoped>
  .header{
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding-left: 10%;
    padding-right: 10%;
    background-color: #099894;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5vw;
  }
  .iconfont{
    font-size: 6vw;
  }
  .header p{
    line-height: 60px;
  }
  .typicTitle{
    display: flex;
    background-color: #5CB4B6;
    width: 150px;
    height: 30px;
    /*line-height: 40px;*/
    text-align: center;
    justify-content: space-around;
    border-radius: 20px;
    margin: auto;
  }
  .typicTitle p{
    font-size: 0.8em;
    line-height: 30px;
  }
  .typicTitle :nth-child(2){
    background-color: #0A9794;
    width: 50px;
    height: 30px;
    border-radius: 20px;
    line-height: 30px;
    /*border: solid red 1px;*/
  }

</style>
