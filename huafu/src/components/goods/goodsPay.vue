<template>
    <div class="">
      <div class="payUp">
        <div class="payDaohang">      <!--导航-->

        </div>

        <div class="payMessage">      <!--订单信息-->
          <div class="payToptiao">                     <!--灰色条-->
            <span>订单信息</span>
          </div>

          <div class="payMessageShow">                 <!--信息展示-->
            <p>
              订单号：<span class="payOrderNumber">151247197802761225</span>   <!--订单号-->
              <span>|</span>
              付款金额：<span class="payPress">￥29.50</span>            <!--金额-->
            </p>

            <p>
              商品名称：<span class="payProductName">古风饰品汉服头饰发饰景泰蓝发簪古典发钗盘发簪烧蓝头饰簪子</span> 等多件
            </p>

            <p>
              请您在 <span class="payTime">付款倒计时：0天01时56分16秒</span> 内完成支付，否则订单将自动取消
            </p>
          </div>
        </div>
      </div>

      <div class="payDown">
        <p class="payPay">
          <span>&nbsp;</span>&nbsp;选择付款方式
        </p><br/>
        <div class="payType">     <!--支付方式-->
          <p class="payAlipay">   <!--支付宝-->
            <img src="images/alipay.png" alt=""/>
            <span>支付宝</span>
          </p>

          <p class="payAlipay">   <!--微信-->
            <img src="images/weixin.png" width="40px"/>
            <span>微信</span>
          </p>
        </div>
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
<style scoped lang="less">
  @import "../../assets/css/common.less";

  .payDaohang{
    width: 1347px;
    height: 190px;
    outline: 1px solid red;
    background-color: rgba(255,255,255,0);
  }
  .payUp{             /*上面*/
    width: 1347px;
    height: 400px;
    /*padding: 50px 100px;*/
    background-image: url("../../assets/images/bg/bgl.png");
    background-size: 100% 100%;
  }

  .payMessage{        /*上方信息框*/
    width: 1150px;
    height: 195px;
    /*padding: 50px;*/
    margin-left: 100px;
    background-color: rgba(255,255,255,.5);
  }
  .payToptiao{        /*灰色条*/
    width: 1100px;
    height: 50px;
    line-height: 50px;
    padding-left: 50px;
    font-size: 20px;
    background-color: rgb(234,234,234);
  }

  .payMessageShow{      /*信息展示块*/
    width: 1100px;
    height: 140px;
    line-height: 40px;
    padding-left: 50px;
    font-size: 13px;
    /*outline: 1px solid red;*/
  }
  .payMessageShow p:nth-of-type(1) span:nth-of-type(2){ /*中间竖线|*/
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
  }

  .payPress{          /*金额*/
    font-size: 18px;
    color:#9A1612;
  }

  .payTime{
    color:#9A1612;
  }

  .payDown{         /*下方div*/
    width: 1147px;
    height: 500px;
    padding: 50px 100px;
    background-image: url("../../assets/images/bg/bgm.png");
    background-size: 100% 100%;
  }

  .payPay span{     /*红色竖线*/
    display: inline-block;
    width: 4px;
    /*height: 10px;*/
    background-color: #9A1612;
  }
  .payPay{          /*字体*/
    height: 15px;
    line-height: 15px;
    font-size: 15px;
    color: gray;
  }

  .payType{               /*支付方式框*/
    width: 1050px;
    height: 100px;
    padding: 50px 50px;
    background-color: rgba(255,255,255,.5);
  }

  .payAlipay{           /*支付宝大框*/
    width: 190px;
    height: 75px;
    padding-top: 25px;
    border-radius: 3px;
    text-align: center;
    background-color: white;
    display: inline-block;
    transition: all .2s linear;
  }
  .payAlipay:hover{
    cursor: pointer;
    background-color: rgb(233,233,233);
  }
  .payAlipay:hover span{      /*移入支付宝时*/
    color:#999988;
  }

  .payAlipay span{            /*支付宝文本*/
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: top;
    display: inline-block;
  }

</style>
