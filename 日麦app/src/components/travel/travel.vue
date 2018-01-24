<template>
  <div>
    <!--引用头部组件-->
    <Header/>
    <!--松坪沟组件-->
    <div class="songPing">
      <router-link to="/SongpingDatil" tag="div">
      <div>
        <p>松坪沟</p>
        <span>我的灵魂迎着猎猎的风为你而来</span>
      </div>
      </router-link>
    </div>
    <!--人气景区组件-->
    <div class="popularScenery">
      <div class="travelTitle">
        <div></div><span>人气景区</span>
      </div>
      <div class="scenicSpots">
        <div class="banKuang">
          <div class="seccerImg"><img src="../../assets/image/baiShiQiangZu.png" alt=""></div>
          <div>白石羌寨</div>
        </div>
        <div class="banKuang">
          <div class="seccerImg"><img src="../../assets/image/songPingGou.jpg" alt=""></div>
          <div>松坪沟</div>
        </div>
        <div class="banKuang">
          <div class="seccerImg"><img src="../../assets/image/luoBuZhai.png" alt=""></div>
          <div>萝卜寨</div>
       </div>
      </div>
      <div class="moreScenery">
          更多风景
      </div>
    </div>
    <!--精品游记组件-->
    <div class="popularScenery">
      <div class="travelTitle">
        <div></div><span>精品游记</span>
      </div>
      <div class="boutiqueTravel">
        <router-link to="/travelNote" tag="div" class="luobuzhai">
              <div class="luobutext">
                <p>云端上的寨子-萝卜寨</p>
                <span>2018年1月9日[三天]<br/>往事如烟</span>
              </div>
        </router-link>
        <div class="moreScenery banju">更多游记 </div>
      </div>
      <div class="footerHeight"></div>
    </div>
   </div>
</template>
<script>
  import Header from "./header.vue"
  export default{
      components:{
          "Header":Header,
      }
  }
</script>
<style>
  /*松坪沟css样式*/
  .songPing{
    position: relative;
    width: 100%;
    height: 210px;
    background-size: cover;
    background-image: url("../../assets/image/indexsencery.jpeg");
    color: white;
  }
  .songPing p{
    position: absolute;
    right: 12%;
    bottom: 15%;
    font-size: 1.3em;
  }
  .songPing span{
    position: absolute;
    right: 5%;
    bottom: 10%;
    font-size: 0.8em;
  }
  /*人气景区css样式*/
.popularScenery{
  width: 100%;
  height: 215px;
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
  .scenicSpots{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
  }
  .scenicSpots .seccerImg{
    position: relative;
    list-style-type: none;
    width: 106px;
    height: 106px;
    border-radius: 106px;
    display: flex;
    justify-content: space-around;
    border: solid #07998D 1px;
  }
  .scenicSpots .banKuang img{
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
  .scenicSpots .banKuang>:nth-child(2){
    box-sizing: border-box;
    text-align: center;
    padding-top: 8px;
  }
  .moreScenery{
    width: 25%;
    height: 30px;
    color: white;
    line-height: 30px;
    text-align: center;
    background-color: #07998D;
    border-radius: 15px;
    margin: auto;
  }
  /*精品游记css样式*/
  .boutiqueTravel{
    margin-top: 5px;
    width: 100%;
    height: 240px;
  }
  .luobuzhai{
    position: relative;
    display: flex;
    justify-content: center;
    width: 90%;
    height:180px;
    border-radius: 15px;
    background-image: url("../../assets/image/luoBuZhai11.png");
    background-size: cover;
    background-position: center;
    margin: auto;
  }
  .luobutext{
    position: absolute;
    width: 45%;
    height:60px;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin:auto ;
    color: white;
  }
  .luobuzhai .luobutext p{
    line-height: 5px;
    font-size: 1.1em;
  }
  .luobuzhai .luobutext span{
    font-size: 0.2em;
    color: rgba(255,255,255,.5);
  }
  .banju{
    margin-top: 15px;
  }
  .footerHeight{
    width: 100%;
    height: 80px;
  }

</style>
