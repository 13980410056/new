<template>
  <div class="communityConcern">       <!--关注主体-->
    <div class="communityHeader">     <!--头像块-->
      <div class="communityHeaderImg"><!--头像图片-->

      </div>

      <p class="communityName">热点内容</p><br/>
      <button class="communityConcern_btn">
        <span>+ 关注</span>
      </button>
      <p class="communityTimer">2017年12月11日17:20:32</p>
    </div>

    <div class="communityContent">        <!--内容块-->
      <p>
        "你若是沙，我便风尘，随你起落。夕阳沉沙，风尘望你，卷起昏黄岁月，与你沉沦敦煌，一夜千古。圢上孤灯，乱起牵念。沙场无眼，索你苍西，守你沙见，不启不昧。”
      </p>
    </div>

    <div class="communityContentImg">        <!--内容图片块-->
      <img src="../../../assets/images/community/2.jpg" alt=""/>
      <img src="../../../assets/images/community/2.jpg" alt=""/>
      <img src="../../../assets/images/community/2.jpg" alt=""/>
      <img src="../../../assets/images/community/2.jpg" alt=""/>
      <img src="../../../assets/images/community/2.jpg" alt=""/>
      <img src="../../../assets/images/community/3.jpg" alt=""/>
      <img src="../../../assets/images/community/3.jpg" alt=""/>
      <img src="../../../assets/images/community/3.jpg" alt=""/>
      <img src="../../../assets/images/community/3.jpg" alt=""/>
      <img src="../../../assets/images/community/3.jpg" alt=""/>
    </div>

    <div class="communityComment">           <!--评论块-->
      <button>
        <span>赞</span>
      </button>
      <span class="communityYline">&nbsp</span>               <!--竖线-->
      <button>
        <span>评论</span>
      </button>
    </div>

    <div class="communityComment_text">
      <textarea name="communityComment_text" id="communityCommentText"></textarea>
      <button class="communityComment_btn">
        发表
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .communityConcern { /*主体框*/
    width: 860px;
    height: 565px;
    z-index: 10;
  }

  /*------------头像块-----------------*/
  .communityHeader { /*头像块*/
    width: 855px;
    height: 95px;
    padding-left: 5px;
    padding-top: 5px;
    /*background-color: saddlebrown;*/
  }

  .communityHeaderImg { /*头像图片*/
    width: 90px;
    height: 90px;
    float: left;
    border-radius: 45px;
    background-image: url("../../../assets/images/community/bg.gif");
    background-size: 100% 100%;
  }

  .communityName { /*昵称*/
    width: 250px;
    height: 20px;
    float: left;
    margin-left: 20px;
    font-size: 21px;
    font-family: "楷体";
    /*background-color: firebrick;*/
  }

  .communityConcern_btn { /*关注按钮*/
    width: 80px;
    margin-right: 20px;
    height: 20px;
    float: right;
    border: 0;
    background-color: inherit;
    outline: none;
  }

  .communityConcern_btn:hover {
    cursor: pointer;
    color: #fa3032;
  }

  .communityTimer { /*时间*/
    width: 250px;
    height: 20px;
    float: left;
    margin-left: -250px;
    margin-top: 40px;
    font-size: 12px;
    color: rgb(177, 177, 177);
  }

  /*------------头像块-----------------*/

  /*------------内容块-----------------*/

  .communityContent { /*内容块*/
    width: 720px;
    height: 90px;
    margin-left: 100px;
    padding-right: 40px;
    /*background-color: silver;*/
  }

  .communityContentImg { /*内容图片块*/
    width: 760px;
    height: 300px;
    margin-left: 100px;
    /*background-color: aqua;*/
  }

  .communityContentImg img {
    width: 135px;
    height: 135px;
    margin-left: 5px;
    margin-top: 5px;
  }

  /*------------内容块-----------------*/

  .communityComment { /*评论块*/
    width: 860px;
    height: 60px;
    /*background-color: rosybrown;*/
  }

  .communityComment button { /*评论按钮*/
    width: 423px;
    height: 60px;
    border: 0;
    background-color: rgba(155, 155, 155, .1);
    transition: all .3s linear;
    outline: none;
  }

  .communityYline { /*竖线*/
    display: inline-block;
    width: 1px;
    height: 30px;
    background-color: gray;
  }

  .communityComment button:hover {
    cursor: pointer;
    background-color: rgba(177, 177, 177, .5);
  }

  .communityComment_text { /*评论区域*/
    width: 860px;
    height: 100px;
    text-align: right;
  }

  #communityCommentText { /*评论文本框*/
    width: 860px;
    height: 80px;
    padding: 5px;
    resize: none;
  }

  .communityComment_btn { /*发表评论按钮*/
    margin-top: 10px;
    width: 160px;
    height: 40px;
    border: 0;
    outline: 0;
    background-color: inherit;
    background-image: url("../../../assets/images/community/btn3.png");
    background-size: 100% 100%;
  }

  .communityComment_btn:hover {
    cursor: pointer;
    color: #90201c;
  }
</style>
