<template>
  <div class="headerModal">
    <div></div>
    <p><router-link to="/perCenIndex">个人中心</router-link></p>
    <p><router-link to="/userPage">个人主页</router-link></p>
    <p @click="headerUserQuit">退出</p>
    <div class="headerModal_three"></div>
  </div>
</template>
<script>
    export default{
        name: 'headerModal',
        data () {
            return {}
        },
        components: {},
      methods:{
        headerUserQuit(){
            this.$emit('userQuit')
        }
      }
    }
</script>
<style scoped lang="less">
    @import "../../assets/css/common.less";
    @headerModal_width:100px;  /*宽*/
    @headerModal_height:30px;  /*每个行高*/
    @headerModal_bgcolor:white;
    @headerModal_hoverfontcolor:@fontColorHover;
  .headerModal{
    width: @headerModal_width;
    text-align: center;
    border-radius: 3px;
    position: absolute;
    /*left: 0px;*/
    /*height: 0px;*/
    background-color: @headerModal_bgcolor;
    box-shadow: 2px 2px 5px black;
    line-height: @headerModal_height;
  }
    .headerModal>.headerModal_three{
      border-bottom:solid  10px white;
      border-top:solid  10px transparent;
      border-left:solid  10px transparent;
      border-right:solid  10px transparent;
      width: 10px;
      height: 10px;
      position: absolute;
      left: 48%;
      top: -20px;
    }
    .headerModal>p:hover {
      cursor:pointer;
      color: @headerModal_hoverfontcolor;
    }
    .headerModal>p:nth-child(1):hover .headerModal>.headerModal_three{
      border-bottom:solid  10px black;
    }
</style>
