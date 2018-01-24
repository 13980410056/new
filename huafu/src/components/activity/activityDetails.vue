<template>
  <!-- 模板里只能有一个根节点-->
  <div>
    <div id="album_nav"></div>
    <!-------------活动图片----------->
    <div class="bannerImg">
      <img :src="'http://localhost:8888'+list[0].act_url" alt=""/>
      <!--<img src="../../assets/ban1.jpg" alt=""/>-->
    </div>
    <div class="actbox">
      <!-------------活动标题----------->
      <div>
        <h3 v-html="list[0] .act_title"></h3>
      </div>
      <!-------------活动概括----------->
      <div v-html="list[0] .act_type"></div>
      <!-------------活动内容----------->
      <div v-html="list[0] .act_details"></div>
      <!-------------活动报名弹出框----------->
      <el-button class="mybtn" type="text" @click="dialogFormVisible = true">点击报名</el-button>
      <el-dialog title="填写报名资料" :visible.sync="dialogFormVisible">
        <el-form :model="form">

          <el-form-item label="作品名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="bodyBox">
      <!-------------该活动标题----------->
      <div><h3>{{list[0] .act_title}}参赛作品</h3></div>
      <div class="imgBox">
        <!-------------循环活动参赛作品----------->
        <div>
          <!-------------该活动参赛作品----------->
          <div><img src="../../assets/images/2.png" alt=""/></div>
          <!-------------该活动参赛人----------->
          <div><span>《水风月影》 </span><span class="glyphicon glyphicon-heart-empty">421</span></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <br style="clear: both"/>
    <div id="album_foot"></div>
  </div>
</template>

<script>

  export default{
    name: 'activityDetails',
    data: function () {
      return {
        'list': {},
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    created: function () {
      this.axiosGet();
    },
    methods: {
      axiosGet: function () {
        var that = this;
        this.$axiosRequest({
          method: "post",
          url: 'http://localhost:8888/activity/activityList.do',
          data: {}
        }).then(function (data) {
          that.list = data;
          if (that.list.state == "1") {
            console.log(that.list.state);
            that.list.state = "报名中"
          } else {
            that.list.state = "已结束"
          }
          console.log(that.list);
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .bannerImg {
    width: 1100px;
    height: 300px;
    margin: 0 auto;
  }

  .bannerImg > img {
    width: 100%;
    height: 100%;
  }

  .actbox {
    width: 1100px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.51);
    margin: 20px auto;
  }

  .actbox > div:nth-child(1) {
    margin: 10px;
    padding: 10px;
  }

  .actbox > div:nth-child(1) > h3 {
    margin-top: 20px;
    margin-left: 30px;
    font-family: STXingkai;
  }

  .actbox > div:nth-child(2) {
    background-color: #e0e0dd;
    width: 1000px;
    height: 100px;
    margin-left: 50px;
    padding: 20px 20px;
  }

  .actbox > div:nth-child(3) {
    width: 1000px;
    height: 100%;
    margin: 10px;
    padding: 10px;
    margin-left: 50px;
    text-align: left;
  }

  .actbox > div {
    font-size: 14px;
  }

  .mybtn {
    width: 150px;
    height: 35px;
    color: white;
    border-radius: 5px;
    border: 0;
    margin: 30px;
    margin-left: 55px;
    margin-top: -50px;
    background-color: #9a1612;
  }

  .bodyBox {
    width: 1100px;
    margin: 20px auto;
  }

  .bodyBox > div:nth-child(1) {
    padding: 10px;
    margin: 10px;
  }

  .bodyBox > div:nth-child(1) > h3 {
    margin-top: 20px;
    margin-left: 30px;
    font-family: STXingkai;
  }

  .bodyBox > div:nth-child(2) {
    width: 1100px;
    float: left;
    /*border: 1px solid red;*/
    /*background-color: #009998;*/
  }

  .bodyBox > div:nth-child(2) > div {
    width: 200px;
    height: 250px;
    margin: 0 12.5px 25px;
    float: left;
    background-color: white;
  }

  .imgBox > div > div:nth-child(1) {
    width: 200px;
    height: 200px;
    background-color: black;
  }

  .imgBox > div > div:nth-child(1) > img {
    width: 100%;
    height: 100%;
  }

  .imgBox > div > div:nth-child(2) {
    width: 200px;
    height: 50px;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }

  .imgBox > div > div:nth-child(2) > span {
    /*line-height: 50px;*/
    margin: 10px;
  }

  .imgBox > div {
    transition: all 0.3s linear;
  }

  /*scale(1.2, 1.2)*/
  .imgBox > div:hover {
    transform: scale(1.2, 1.2);
    z-index: 1;
    outline: 10px solid white;
  }

  .imgBox > div:hover > div:nth-child(2) {
    /*background-color: rgba(0, 0, 0, 0.2);*/
  }

  .imgBox > div > div:nth-child(2) > span:nth-child(2) {
    font-size: 18px;
    color: #9a1612;
  }

  .bodyBox > div:nth-child(2) > div:nth-child(5n) {
    margin-right: 0;
  }

  .bodyBox > div:nth-child(2) > div:nth-child(5n+1) {
    margin-left: 0;
  }

</style>
