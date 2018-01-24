<template>
<div class="allBack">
  <!--引用头部组件-->
  <Header/>
  <!--游记-->
    <div class="content">
      <p class="content1">{{address}}</p>
      <p class="content2">{{addressE}}</p>
      <p class="content3">--门票：{{price}}元 | 游览{{time}}小时--</p>
      <p class="content4"> 我的评价: <el-rate v-model="value2" :colors="['#99A9BF', 'white', 'white']">
      </el-rate></p>
      <p class="content5"> {{inform}}</p>
    </div>
  <div class="fenge"></div>
  <div>
  <travelDay></travelDay>
   <imge></imge>
   <travelDay></travelDay>
    <div class="writer">
      <p>{{Name}}</p>
      <p>{{write}}</p>
         </div>
  </div>
</div>
</template>

<script>
  import Header from "./header.vue"
  import travelDay from "./travelDay.vue"
  import imge from "./imge.vue"
  export default{
    components:{
      "Header":Header,
      "travelDay":travelDay,
      "imge":imge
    },
    data() {
      return {
        value2: null,
        inform:"这些沟都是碧绿色的海子，跟牟尼沟有点像，太阳照非常热，穿短袖短裤都可以，门票80还是有点贵，但是学生证给力啊，减半。面有车行区和步行区，步行上去要走几个小时才能到顶，而且沿途的水都干了，所以放弃。",
        price:'80',
        time:'3',
        address:'松坪沟',
        addressE:'Songping ditch',
        write:"博主: 鱼鳅波仔",
        Name:"摘自《蝉游记》"
      }
    }
  }
</script>


<style scoped>
.allBack{
  background-color: #099894;
}
  .content{
    text-align: center;
    color: rgba(255,255,255,0.9);
    font-weight:300 ;
  }
  .content p{
    margin-top: 12px;
  }
  .content1{
    font-size: 1.2em;
  }
  .content2{
    font-size: 0.8em;
  }
  .content3{
    font-size: 0.9em;
  }
  .content4{
    font-size: 0.8em;
  }
  .content5{
    width: 80%;
    font-size: 0.8em;
    margin-left: 10%;
    text-align: left;
  }
  .fenge{
    width: 100%;
    height: 1px;
    background-color: white;
    margin-top: 20px;
  }
  .writer{
    color: rgba(255,255,255,0.9);
    font-size: 0.9em;
    padding: 20px;
    margin-left: 60%;
  }
</style>
