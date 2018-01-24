<template>
  <div id="goodDet_box">
    <div id="album_nav"></div>

    <div class="goodDet_content">
      <img src="../../assets/images/goodsDetailsImg/u28.jpg" alt=""><!--获取图片-->
      <div class="goodDet_main"><!--商品规格选择-->
        <h3>东篱汉服女传统交领袄裙齐腰褶裙全款</h3><!--获取商品名称-->
        <p>￥ <span>579.00</span></p><!--获取价格-->
        <p>交易成功：<span>2</span></p><!--获取交易量-->
        <div class="goodDet_guiGe">
          <p>邮费 <span>包邮</span></p>
          <span>尺码</span>
          <p class="goodDet_size">XS</p>
          <p class="goodDet_size">S</p>
          <p class="goodDet_size">M</p>
          <p class="goodDet_size">L</p>
          <p class="goodDet_size">XL</p>
          <br>
          <span>样式</span>
          <p class="goodDet_size">短袄</p>
          <p class="goodDet_size">交领长袄</p>
          <p class="goodDet_size">褶裙</p>
          <p class="goodDet_size">短袄+褶裙</p>
          <br>
          <span>数量</span>
          <p class="goodDet_choose"><span>-</span>1<span>+</span></p><span> 件</span>
          <span>（库存</span><span>24822</span><span>件）</span>
          <br>
          <div class="goodDet_btn">立即购买</div>
          <div class="goodDet_btn">加入购物车</div>
        </div>
      </div>
      <div class="goodDet_intro">
        <div class="goodDet_kind"><!--分类-->
          <p>全部分类</p>
          <ul>
            <li>
              <span>女款套装</span>
              <ul>
                <li>对襟襦裙</li>
                <li>交领襦裙</li>
                <li>齐胸襦裙</li>
                <li>袄裙</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <span>配饰周边</span>
              <ul>
                <li>对襟襦裙</li>
                <li>交领襦裙</li>
                <li>齐胸襦裙</li>
                <li>袄裙</li>
                <li>对襟襦裙</li>
                <li>交领襦裙</li>
                <li>齐胸襦裙</li>
                <li>袄裙</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <span>汉元素</span>
              <ul>
                <li>对襟襦裙</li>
                <li>交领襦裙</li>
                <li>齐胸襦裙</li>
                <li>袄裙</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="goodDet_card"><!--选项卡-->
          <p class="goodDet_p">商品详情</p>
          <p class="goodDet_p">累计评论 <span>0</span></p>
        </div>
        <div class="goodDet_img">
          <img src="../../assets/images/goodsDetailsImg/u48.jpg" alt="">
          <img src="../../assets/images/goodsDetailsImg/u44.jpg" alt="">
          <img src="../../assets/images/goodsDetailsImg/u50.jpg" alt="">
          <img src="../../assets/images/goodsDetailsImg/u52.jpg" alt="">
          <img src="../../assets/images/goodsDetailsImg/u54.jpg" alt="">
          <img src="../../assets/images/goodsDetailsImg/u46.jpg" alt="">
          <img src="../../assets/images/goodsDetailsImg/u56.jpg" alt="">
        </div><!--图片-->
      </div>
      <div class="goodDet_reCom">
        <p>❤ 你可能还会喜欢</p>
        <div>
          <img src="../../assets/images/goodsDetailsImg/6b1ebcb7338e45808ffc66f45b5dc81c.jpg" alt="">
          <p>￥<span>158.00</span></p>
          <p>槿罗记汉服女装 齐胸襦裙【霏雨】全套包邮送发带</p>
        </div>
        <div>
          <img src="../../assets/images/goodsDetailsImg/e7a8bdd8370b428095d0635e1bd402fa.jpg" alt="">
          <p>￥<span>158.00</span></p>
          <p>槿罗记汉服女装 齐胸襦裙【霏雨】全套包邮送发带</p>
        </div>
        <div>
          <img src="../../assets/images/goodsDetailsImg/f608cbebefe142f2bc468d895cee88f2.jpg" alt="">
          <p>￥<span>158.00</span></p>
          <p>槿罗记汉服女装 齐胸襦裙【霏雨】全套包邮送发带</p>
        </div>
      </div><!--推荐-->
    </div>

    <div id="album_foot"></div>
  </div>
</template>

<script>
  export default{
    name: 'goodsDetails',
    data () {
      return {}
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/css/common.less";
  @import "../../assets/css/goodsDetails.less";

</style>
