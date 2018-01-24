<template>
  <div id="album_box">
    <div id="album_nav"></div>
    <div class="album_content"><!--内容放置处-->
      <div class="album_tabWrap">
        <div class="album_tab">
          <tabButton text="热门"></tabButton>
          <tabButton text="精选"></tabButton>
        </div>
      </div>
      <div class="album_group">
        <albumGroup></albumGroup>
        <albumGroup></albumGroup>
        <albumGroup></albumGroup>
        <albumGroup></albumGroup>
        <albumGroup></albumGroup>
        <albumGroup></albumGroup>
        <albumGroup></albumGroup>
        <albumGroup></albumGroup>
      </div>

    </div>
    <div id="album_foot"></div>
  </div>
</template>

<script>
  import albumGroup from "../components/album/albumGroup"
  import tabButton from "../components/common/tabButton"

  export default {
    name: '',
    data () {
      return {}
    },
    components: {
      albumGroup,tabButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/common.less";

  /*最外层框*/
  #album_box{
    width: 100%;
    height: auto;
    background-image: url("../assets/images/bg/fullBg.png");
  }
  /*内容放置*/
  .album_content{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding: 0 0 35px 0;
  }
  /*------选项卡------*/
  .album_tabWrap{
    height: 70px;
  }
  .album_tab{
    width: 22.5%;
    height: 40px;
    margin: 15px auto;
    /*background-color: grey;*/
  }
  /*-------相册组div-------*/
  .album_group{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

</style>
