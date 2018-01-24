<template>
    <div class="tabWarp">
      <button @click="tabBtnClick" class="tabBtn">{{text}}</button>
    </div>
</template>

<script>
  export default{
    name: "tabButton",
    props: {
      "text": {
        type: String,
        default: "按钮",
        required: true,
        validator: function(value){
          return value.length>=2;
        }
      }
    },
    methods: {
      tabBtnClick:function(msg){
//        console.log(this.msg);
//        var tabBtn = document.getElementsByClassName("tabBtn");
//        tabBtn[0].style.backgroundColor = "#9A1612";
//        tabBtn[0].style.color = "white";
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .tabWarp{
    display: inline-block;
  }
  button{
    height: 40px;
    width: 120px;
    color: @fontColor;
    background:@whiteBg8;
    cursor: pointer;
    outline: none;
  }

</style>
