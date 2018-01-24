<template>
<div class="travelDay">
  <div class="dayName">{{taTle}}</div>
  <div class="contentDay">
    <p><img src="../../assets/image/shaung.png" class="shuang">
       {{content}}
    </p><img src="../../assets/image/shuang2.png" class="shuang1">
  </div>
</div>
</template>

<script>

  export default{
    data() {
      return {
        taTle:"第一天",
        content:"我们先走的车行区，人很少，我们在马路上拍照十几分钟都没看。见一个车经过。景区里面大太阳照着很舒服，完全可以短袖短裤，5第要不吹风。车行区开车大概半个小时就可以游览完，可是我们一路走一路照相，花费了很多时间，而且最后为了找步行区的入口，折腾了大 好一半天，原来就在进景区不远的停了很多车开始我们还以为是餐馆",
      }
    }
  }
</script>


<style scoped>
  .travelDay{
    position: relative;
  }
  .dayName{
    width: 30px;
    height: 70px;
    position:absolute;
    padding-top: 10px;
    top: 20px;
    left: 2px;
    background-color: white;
    text-align: center;
    color: grey;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
  }
.shuang{
  width: 40px;
  height: 40px;
}
  .shuang1{
    position: relative;
    width: 40px;
    height: 40px;
    left:80%;
  }
  .contentDay{
    margin-top: 20px;
    color: rgba(255,255,255,0.9);
    font-weight: 300;
    font-size: 0.8em;
    width:76%;
    margin-left: 12%;
  }
</style>
