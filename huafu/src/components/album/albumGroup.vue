<template>
    <div class="album_img">
      <router-link :to="{name:'albumDetails'}">
      <div class="album_wrap"><!--每一条图片数据-->
        <img src="../../assets/images/album/1.png" alt="">
        <div class="album_hide">
          <p>
            <span>《</span>
            <span>三世书·彼岸</span>
            <span>》</span>
          </p>
          <span>by</span>
          <span>迦南</span><!--此处读取用户数据-->
        </div>
      </div>
      </router-link>
    </div>
</template>

<script>
    export default{
        name: "albumGroup"
    }
</script>

<style scoped lang="less">

  .album_img{
    display: inline-block;
    position: relative;
  }
  /*每一条图片的div*/
  .album_wrap{
    width: 250px;
    height: 250px;
    position: relative;
    border: 10px solid rgba(255,255,255,0);
    transition: all .5s ease;
    display: inline-block;
    cursor: pointer;
  }
  .album_wrap:hover{
    border: 10px solid rgba(255,255,255,1);
    transform: scale(1.2);
    z-index: 80;
  }
  /*每一张图片*/
  .album_wrap>img{
    width: 100%;
    height: 100%;
  }
  /*遮罩层*/
  .album_hide{
    width: 100%;
    height: 60px;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    padding-top: 10px;
  }
  /*遮罩层移入效果*/
  .album_wrap:hover .album_hide{
    visibility: visible;
    opacity: 1;
  }
  /*遮罩层中的标题*/
  .album_hide>p{
    font-size: 16px;
    color: white;
    margin-left: 5px;
  }
  /*遮罩层中的用户名*/
  .album_hide>span{
    color: white;
    font-size: 14px;
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
  }

</style>
