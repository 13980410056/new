<template>
    <div class="">
      <div class="shopUpdateAddress">       <!--修改框-->
        <button class="shopClouse">
          ×
        </button>
        <div class="shopUpdateAD">
          <p><span>地址</span></p>
          <input type="text"/>省
          <input type="text"/>市
          <input type="text"/>区
          <input type="text"/>
        </div>

        <p >
          姓名：<input type="text"/><br/>
          电话：<input type="text"/>
        </p>




      </div>

      <div class="shopPayBack">         <!--上方背景大框-->

        <div class="shopDaohang">    <!--导航空-->

        </div>

        <div class="shopAddressBans">                   <!--地址框-->
          <div class="shopAddress">            <!--默认地址-->
            <p>                         <!--装信息的p-->
              <span>四川</span>&nbsp;
              <span>成都</span>&nbsp;
              <span>青羊</span>&nbsp;
              <button @click="clouse1">修改</button>
              <button>删除</button>
              <br/><br/>

              <span>同善桥南街6号潮蓉花园</span>&nbsp;<br/><br/>

              <span>小先生</span>&nbsp;<br/>
              <span>15554550888</span>
            </p>
          </div>

          <!--新增地址-->
          <div class="addAddress">  <!--新增地址大框-->
            <p>
              <span>+</span>
              <span>使用新地址</span>
            </p>
          </div>
        </div>
      </div>

      <div class="shopSecond">         <!--下方背景-->
        <div class="shopCommodities">  <!--商品框-->
          <p class="shopTitle">汉服</p>   <!--灰色条-->
          <div class="shopMation">
            <p>商品信息</p>  <!--商品信息-->
            <p>单价(元)</p>  <!--商品单价-->
            <p>购买数量</p>  <!--商品数量-->
            <p>小计(元)</p><br/>       <!--小计-->
            <hr/>
            <br/>
          </div>
          <!------------------------商品展示块--------------------------------->
          <div class="shopShow">      <!--商品显示-->
            <div class="shopImg">     <!--商品图片-->
              <p><img src="images/bg.gif" alt=""/></p>
            </div>
            <div class="shopRemark">             <!--商品描述-->
              <p>古风饰品汉服头饰发饰景泰蓝发簪古典发钗盘发簪烧蓝头饰簪子</p>
              <p>尺码：默认</p>
              <p>样式：样式二定制</p>
            </div>

            <div class="shopPress">29.5</div>   <!--商品价格-->

            <div class="shopNumber">        <!--商品数量-->
              <input type="text" placeholder="2"/>
            </div>

            <div class="shopCount">   <!--小计-->
              128
            </div>
          </div>
          <!------------------------商品展示块--------------------------------->
          <div class="shopDashed "></div>     <!--虚线-->

          <!--卖家留言块-->
          <div class="shopMessage">
            <div class="shopSeller">     <!--卖家留言信息-->
              <p>给卖家留言：</p>
            </div>

            <div class="shopMessageText"> <!--卖家留言输入框-->
              <input type="text"/>
            </div>

            <div class="shopPostage">     <!--邮费text-->
              <span>邮费</span>
            </div>

            <div class="shopPostageNumber">
              <span>0.00</span>
            </div>
          </div>
          <!--卖家留言块-->

          <!--合计-->
          <div class="shopPressCount">
            <p>
              <span>合计</span>
              <span class="shopHeji">￥29.5</span>
              <button id="shopSubmit">
                <a href="pay.html">提交订单</a>
              </button>
            </p>
          </div>
          <!--合计-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {

            }
        },
        components: {},
      mothed:{
        clouse1(){
            console.log('sb')
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/css/common.less";

  .shopDaohang{           /*导航部分空*/
    width: 1347px;
    height: 190px;
    outline: 1px solid red;
    background-color: rgba(255,255,255,0);
  }

  .shopPayBack{   /*大框*/
    width: 1347px;
    height: 500px;
    /*padding: 50px 100px;*/
    background-image: url("../../assets/images/bg/bgl.png");
    background-size: 100% 100%;
  }

  .shopAddressBans{ /*上方的地址栏*/
    width: 1050px;
    height: 195px;
    padding: 50px;
    margin-left: 100px;
    background-color: rgba(255,255,255,.5);
  }
  /*默认地址框*/
  .shopAddress{                  /*默认地址栏*/
    width: 350px;
    height: 200px;
    display: inline-block;
    transition: all .3s linear;
    background-color: rgba(233,233,233,.5);
  }

  .shopAddress:hover{          /*默认地址框移入*/
    outline: 1px solid rgb(154,22,18);
  }
  .shopAddress:hover button{
    outline: 1px solid rgb(154,22,18);
    opacity: 1;
  }

  .shopAddress p{                /*装信息的p*/
    width: 270px;
    height: 180px;
    padding-top:10px;
    padding-left: 30px;
    padding-right: 0;
  }

  .shopAddress p button{         /*删除与修改按钮*/
    width: 40px;
    height: 35px;
    margin-left: 65px;
    border: 0;
    outline: 0;
    transition: all .3s linear;
    background-color: inherit;
    opacity: 0;
  }
  .shopAddress p button:hover{
    cursor: pointer;
    color: #902b2a;
  }
  .shopAddress p button:nth-of-type(2){/*删除按钮*/
    margin-left: -5px;
  }

  .shopAddress span:nth-of-type(5){  /*姓名*/
    display: inline-block;
    margin-top: 30px;
    font-size: 30px;
    font-family: "楷体";
  }
  /*默认地址框*/

  /*新增地址*/
  .addAddress{          /*新增地址大框*/
    width: 350px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    /*margin-left: 50px;*/
    transition: all .3s linear;
    background-color: rgba(233,233,233,.5);
  }
  .addAddress:hover{      /*新增框移入*/
    cursor: pointer;
    outline: 1px solid rgb(154,22,18);
  }
  .addAddress p{        /*新增框p*/
    height: 200px;
    line-height: 200px;
  }
  .addAddress p span{       /*新增框span*/
    font-size: 30px;
    color: rgb(188,188,188);
    font-weight:lighter;
  }


  /*新增地址*/




  .shopSecond{   /*下方背景大框*/
    width: 1147px;
    height: 700px;
    padding: 50px 100px;
    background-image: url("../../assets/images/bg/bgm.png");
    background-size: 100% 100%;
  }

  .shopCommodities{ /*商品框*/
    width: 1150px;
    height: 480px;
    background-color: rgba(245,245,249,.8);
  }
  .shopTitle{  /*上方灰色条*/
    width: 1100px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    padding-left: 50px;
    background-color: rgba(200,200,200,.7);
  }

  .shopMation{                      /*商品信息展示条*/
    width: 1150px;
    height: 50px;
    line-height: 50px;
    color:rgb(120,120,120);
    /*background-color: green;*/
  }
  .shopMation p{                    /*每一个p*/
    margin-left: 150px;
    display: inline-block;
  }
  .shopMation p:nth-of-type(1){     /*商品信息*/
    margin-left: 50px;
  }
  .shopMation p:nth-of-type(2){     /*商品单价*/
    margin-left: 500px;
  }
  .shopMation p:nth-of-type(4){     /*商品单价*/
    margin-left: 105px;
  }

  .shopMation hr{
    width: 1050px;
    margin-left: 50px;
  }

  /*商品显示，数据行*/
  .shopShow{                /*商品行大框*/
    width: 1050px;
    height: 120px;
    /*line-height: 120px;*/
    margin-top: 20px;
    margin-left: 50px;
    /*background-color: seagreen;*/
  }
  .shopImg{               /*商品图片展示*/
    display: inline-block;
    width: 100px;
    height: 100px;
    /*outline: 1px solid red;*/
    vertical-align: top;
  }
  .shopImg img{         /*商品图片*/
    width: 100px;
    height: 100px;
  }

  .shopRemark{          /*商品描述*/
    width: 430px;
    height: 100px;
    /*outline: 1px solid red;*/
    display: inline-block;
    vertical-align: top;
  }
  .shopRemark p:nth-of-type(1){   /*商品名*/
    font-size: 15px;
  }
  .shopRemark p:nth-of-type(2){   /*商品尺码*/
    margin-top: 50px;
    font-size: 11px;
    color: rgb(120,120,120);
  }
  .shopRemark p:nth-of-type(3){   /*商品样式*/
    font-size: 11px;
    color: rgb(120,120,120);
  }

  .shopPress{         /*商品价格*/
    width: 110px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    /*outline: 1px solid red;*/
    display: inline-block;
    vertical-align: top;
  }

  .shopNumber{        /*商品数量*/
    width: 20px;
    height: 20px;
    padding: 40px;
    margin-left: 100px;
    /*outline: 1px solid red;*/
    display: inline-block;
    vertical-align: top;
  }
  .shopNumber input{    /*数量输入框*/
    background-color: inherit;
    border: 0.5px solid black;
    outline: none;
    text-align: center;
    width: 30px;
    height: 20px;
  }

  .shopCount{         /*商品小计*/
    width: 110px;
    height: 100px;
    text-align: center;
    margin-left: 50px;
    line-height: 100px;
    font-size: 25px;
    color: #9a1612;
    /*outline: 1px solid red;*/
    display: inline-block;
    vertical-align: top;
  }

  /*商品显示，数据行*/
  .shopDashed{      /*虚线*/
    width: 1050px;
    margin-left: 50px;
    height: 0;
    border: 1px dashed rgb(177,177,177);
  }


  /*卖家留言行*/
  .shopMessage{             /*卖家留言大框*/
    width: 1050px;
    height: 120px;
    /*line-height: 120px;*/
    margin-top: 20px;
    margin-left: 50px;
    /*background-color: seagreen;*/
  }

  .shopSeller{            /*卖家留言text*/
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    /*outline: 1px solid red;*/
    vertical-align: top;
  }

  .shopMessageText{       /*卖家留言输入框*/
    width: 430px;
    height: 100px;
    /*outline: 1px solid red;*/
    display: inline-block;
    vertical-align: middle;
  }
  .shopMessageText input{   /*输入框*/
    width: 550px;
    height: 90px;
    border: 0;
    outline: 0;
    padding-left: 20px;
  }

  .shopPostage{             /*邮费*/
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    margin-left: 230px;
    display: inline-block;
    vertical-align: top;
  }

  .shopPostageNumber{     /*邮费数字*/
    width: 110px;
    height: 100px;
    text-align: center;
    margin-left: 50px;
    line-height: 100px;
    font-size: 13px;
    color: #888;
    display: inline-block;
    vertical-align: top;
  }

  /*价格汇总合计*/
  .shopPressCount{        /*合计大框*/
    width: 1050px;
    height: 80px;
    line-height: 80px;
    text-align: right;
    margin-left: 50px;
    /*background-color: seagreen;*/
  }
  .shopPressCount span:nth-of-type(1){  /*合计字体*/
    font-size: 15px;
    color:#888;
  }
  .shopHeji{              /*合计数字*/
    font-size: 30px;
    font-weight: bold;
    color:#9A1612;
    margin-left: 20px;
  }
  #shopSubmit{ /*提交按钮*/
    width: 120px;
    height: 40px;
    border: 0;
    margin-left: 20px;
    font-size: 15px;
    outline: none;
    background-color: inherit;
    /*background-image: url("images/btn1.png");*/
    background-size: 100% 100%;
    transition: all .2s linear;
  }
  #shopSubmit:hover{
    font-size: 16px;
    cursor: pointer;
    /*background-image: url("images/btn2.png");*/
  }


  /*修改模态框*/

  .shopUpdateAddress{     /*大框*/
    width: 800px;
    height: 300px;
    padding-left: 20px;
    background-color: rgba(233,233,233,.8);
    position: fixed;
    top:150px;
    left: 300px;
    display: none;
  }
  .shopClouse{          /*关闭按钮*/
    width: 30px;
    height: 30px;
    font-size: 30px;
    background-color: inherit;
    border: 0;
    outline: 0;
    margin-left: 760px;
  }
  .shopClouse:hover{
    cursor: pointer;
    color:#9A1612;
  }
  .shopUpdateAD{
    width: 800px;
    padding-top: 20px;
  }
  /*修改模态框*/

</style>
