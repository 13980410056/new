<template>
  <div id="knowDet_box">
    <div id="album_nav"></div>
    <div class="knowDet_content">
      <p>汉服知识 > 科普 > 详情页</p><!--面包屑-->
      <div class="knowDet_main"><!--内容-->
        <h3>
          汉服历经数千年不断的传承演变，秀美华丽
        </h3>
        <span>作者：</span><span>云中鹿</span><!--获取作者名-->
        <span>时间：</span><span>2017-1-1</span>
        <p>
          汉服，是中国汉族的传统服饰，曾被称为汉装、汉衣冠、衣冠、中国衣冠、华服等，被称为发展以及传承了四千多年的服饰体系。不同朝代的汉服也都不尽相同，各个朝代往往对各个等级允许的颜色、式样有细致明确的规定，朝代特征较明显。现代汉服不再体现等级制度，可粗略分为礼服、吉服、常服、便服，礼服是正规礼仪场合所穿、有严格形制规定；吉服是节日或喜庆场合所穿，形制规定不严格，一般较为华丽；常服则是平常穿着较为正式的服装；便服则是在家居、从事体力劳动或运动时所穿的服装。汉服是从黄帝即位到明末，在这四千多年中，以华夏文化礼仪为中心，经过历代汉族王朝推崇周礼、象天法地而形成千年不变...
        </p>
        <img src="../../assets/images/knowledge/详情页面/u251.jpg" alt="">
        <p>
          “汉服”的特点是交领右衽、以系带为主。交领指衣服前襟左右相交。汉服的衣襟一般是向右掩（左前襟掩向右腋系带，将右襟掩覆于内，称右衽），称为右衽；中国古代一些少数民族服装是向左掩，称为左衽，此状况从春秋时代已出现，论语中记载孔子曾说，若无管仲尊王攘夷，就会沦为异族统治而“被发左衽”。汉服具备独特的形式，其典型特征是交领右衽、系带无扣，但实际上仍有其他款式。汉语里和衣服相关的词汇，通通是汉服的特点。汉服的结构分为10个部分：领、襟、裾、袂、袪、袖、衿、衽、带、系。一套完整的汉服通常有三层：小衣（内衣）、中衣、大衣。小衣包括汗衣（汗衫）、犊鼻裈。中衣包括上衣下裤、中单、曲领等。大衣即外衣，如深衣、圆领袍、衣裳、袴褶、裙襦，还有外套如半臂、褙子等。此外，还有配饰如袜、帔、革带、玉带、銙等等。
        </p>
        <img src="../../assets/images/knowledge/详情页面/u261.png" alt="">
        <p>
          汉服所有款式中，最有文化内涵的莫过于“深衣”：深衣是最能体现华夏文化精神的服饰。深衣象征天人合一，恢宏大度，公平正直，包容万物的东方美德。袖口宽大，象征天道圆融；领口直角相交，象征地道方正；背后一条直缝贯通上下，象征人道正直；腰系大带，象征权衡；分上衣、下裳两部分，象征两仪；上衣用布四幅，象征一年四季；下裳用布十二幅，象征一年十二月。身穿深衣，自然能体现天道之圆融，怀抱地道之方正，身合人间之正道，行动进退合权衡规矩，生活起居顺应四时之序。汉服不仅重视人体的各个侧面的线型，而且还注重人与环境之间，继而成为服饰的特色。汉族传统服装中，贵族服饰的大袖，不仅是袖径的宽大，袖子的长度也十分长。官员与老人的袖子延至手后，可以挽回相当的长度。汉服袖径宽大时可达四尺，这种宽大的剪裁，使得汉服在穿着起来之后，可以形成如行云流水般的流线，随风而动，但毫不拖拉，给人洒脱飘逸、仙风道骨的感觉
        </p>
      </div>
    </div>
    <div id="album_foot"></div>
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
  /*最外层框*/
  #knowDet_box{
    width: 100%;
    height: auto;
    background-image: url("../../assets/images/bg/fullBg.png");
  }
  /*内容放置*/
  .knowDet_content{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
  }
  .knowDet_main{
    width: 100%;
    height: auto;
    padding: 35px 0 35px 0;
    text-align: center;
  }
  .knowDet_main>h3{
    font-size: 24px;
    color: #333;
    margin-bottom: 35px;
  }
  .knowDet_main>p{
    margin-top: 35px;
    line-height: 28px;
    text-indent: 30px;
    text-align: left;
  }
  .knowDet_main>img{
    width: 640px;
    margin-top: 30px;
  }
</style>
