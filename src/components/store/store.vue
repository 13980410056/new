<template>
  <div>
    <!--头部组件-->
    <Header></Header>
    <!--搜索条-->
    <div class="search">
      <input type="text" placeholder="搜索你想要的商品"/>
      <img src="../../assets/image/search.png" alt="">
    </div>
    <!--传统羌绣组件-->
    <div class="traditionQX">
      <div class="travelTitle">
        <div></div><span>传统羌绣</span>
      </div>
      <div class="traditionImg">
          <div>
            <img src="../../assets/image/yunxie.jpg" alt="">
            <p>云云鞋</p>
          </div>
        <div>
          <img src="../../assets/image/cixiu.jpg" alt="">
          <p>羌族服装</p>
        </div>
        <div>
          <img src="../../assets/image/cixiu.jpg" alt="">
          <p>羌族刺绣</p>
        </div>

      </div>
    </div>
    <!--羌绣分类组件-->
    <div class="qxclass">
      <div class="travelTitle">
        <div></div><span>羌绣分类</span>
      </div>
      <div class="qxclassImg">
          <div class="Imgfu">
            <img src="../../assets/image/class1.jpg" alt="">
            <div class="classtext">刺绣</div>
          </div>
          <div class="Imgfu">
            <img src="../../assets/image/class2.jpg" alt="">
            <div class="classtext">首饰</div>
          </div>
        <div class="Imgfu">
          <img src="../../assets/image/class3.jpg" alt="">
          <div class="classtext">钱包</div>
        </div>
        <div class="Imgfu">
          <img src="../../assets/image/class4.jpg" alt="">
          <div class="classtext">抱枕</div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Header from "./header.vue";
  export default{
      components:{
          "Header":Header,
      }
  }
</script>
<style>
  .search{
    width: 100%;
    height: 60px;
  }
  .search input{
    width: 55%;
    height: 30px;
    text-align: center;
    font-size: 1em;
    line-height: 30px;
    border-radius: 15px;
    border: solid #099894 1px;
    margin-top: 15px;
    margin-left: 17%;
  }
  .search img{
    /*box-sizing: border-box;*/
    width: 30px;
    height: 30px;
    margin-left: 8px;
    opacity: .6;
    vertical-align: bottom;
  }
  /*传统羌绣css样式*/
  .traditionQX{
    width: 100%;
    height: 200px;
  }
  .traditionImg{
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
  .traditionImg img{
    width: 100px;
    height: 120px;
    border-radius: 10px;
  }
  .traditionImg p{
    margin-top: 6px;
  }
  .travelTitle{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .travelTitle div{
    width: 8px;
    height: 8px;
    margin-left: 4%;
    margin-right: 5px;
    background-color: #07998D;
    display: inline-block;
  }
  /*羌绣分类css样式*/
  .qxclass{
    width: 100%;
    height: 430px;
  }
  .qxclassImg{
    display: flex;
    justify-content: space-around;
    /*去掉行距*/
    align-content: flex-start;
    /*换行*/
    flex-wrap: wrap;
    width: 100%;
    height: 400px;
  }
  .qxclassImg img{
    width: 150px;
    height: 120px;
  }
  .Imgfu{
    position: relative;
    margin-bottom: 20px;
  }
  .classtext{
    position: absolute;
   left: 35%;
    top: 27%;
   color: rgba(255,255,255,.7);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    background-color: rgba(0,0,0,.4);
  }

</style>
