<template>
  <div>
    <!--头部组件-->
    <Header></Header>
    <div class="personal">
      <div class="perlogin">
        <div>
          <img src="../../assets/image/header.png" alt=""><div>未登录</div>
        </div>
      </div>
      <div class="perlink">
        <router-link to="/Culture" tag="div">
          <div><i class="iconfont icon-wodedingdan3"></i></div>
          <div>我的订单</div>
        </router-link>
        <router-link to="/Myfavorite" tag="div">
          <div><i class="iconfont icon-taoxin-line"></i></div>
          <div>我的收藏</div>
        </router-link>
        <router-link to="/" tag="div">
          <div><i class="iconfont icon-cart1"></i></div>
          <div>我的购物车</div>
        </router-link>
      </div>
      <div>
      </div>

      <div class="peractive">
        <ul>
          <li><i class="iconfont icon-shequjiaoliu"></i>我的社区</li>
          <li><i class="iconfont icon-huodong"></i>我参加的活动</li>
          <li><i class="iconfont icon-shezhi2"></i>设置</li>
          <li><i class="iconfont icon-guanyu"></i>关于</li>
        </ul>
      </div>
    </div>

   </div>
</template>
<script>
  import Header from "./header.vue";
export default{
    components:{
        "Header":Header
    }
}
</script>
<style>
  .personal{
    width: 100%;
    height: 140px;
    background-color: #099894;
  }
  .perlogin{
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: rgba(255,255,255,.8);
    font-size: 1.2em;
  }
  .perlogin img{
    width: 100px;
  }
  .perlink{
    width: 100%;
    height: 70px;
    background-color: #099894;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color:rgba(255,255,255,.8);
    margin-top: 5px;
  }
  .perlink i{
    font-size: 1.7em;
  }
  .peractive ul li{
    width: 80%;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    list-style-type: none;
    border-bottom: solid #F0F0F0 1px;
    margin-left: 8%;
  }
  .peractive ul li i{
    font-size: 1.7em;
    color: rgba(0,0,0,.6);
    margin-right: 13%;
  }
</style>
