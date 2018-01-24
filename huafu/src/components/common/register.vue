<template>
  <div class="">
    <el-button type="text" @click="dialogVisible = true">注册</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="25%">
      <div class="group">
        <div class="group-ipt userName">
          <el-input type="text" v-model="userInfo.userName" id="userName" class="ipt" name="userName"
                    placeholder="昵称："></el-input>
        </div>
        <div class="group-ipt">
          <el-input type="text" v-model="userInfo.userId" id="userId" name="userId" class="ipt"
                    placeholder="帐号："></el-input>
        </div>
        <div class="group-ipt">
          <el-input type="text" v-model="userInfo.pwd" id="pwd" name="pwd" class="ipt" placeholder="密码："></el-input>
        </div>
        <div class="group-ipt phoneCode">
          <el-input type="text" v-model="userInfo.phone" id="phone" name="phone" class="ipt"
                    placeholder="手机号："></el-input>
        </div>
        <div class="group-ipt phoneCodeClick">
          <el-button id="sendMsg" @click="sendMsg">发送验证码</el-button>
        </div>
        <div class="group-ipt" style="clear: both">
          <el-input type="text" v-model="userInfo.smscode" id="smscode" name="smscode" class="ipt"
                    placeholder="输入验证码："></el-input>
        </div>
      </div>
      <!--------------------------------错误弹出框start------------------------------------------------->
      <el-dialog width="25%" title="错误！" top="150px" :visible.sync="remindVisible" append-to-body>
        <!--------------------------------错误弹出框内容start------------------------------------------------->
        <span>{{errInfo}}</span>
        <!--------------------------------错误弹出框内容end------------------------------------------------->
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="remindVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkCode">注 册</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        remindVisible: false,
        userInfo: {userName: '', userId: '', pwd: '', phone: '', smscode: ''},
        errInfo: "",//错误提示信息
      };
    },
    methods: {
      checkCode(){
        if (this.userInfo.userName == "") {
          this.errform(true, "用户名不能为空，请重新输入！")
        }
        else if (this.userInfo.userId == "") {
          this.errform(true, "帐号不能为空，请重新输入！")
        }
        else if (this.userInfo.pwd == "") {
          this.errform(true, "密码不能为空，请重新输入！")
        }
        else if (this.userInfo.smscode == "") {
          this.errform(true, "验证码不能为空，请重新输入！")
        }
        else {
          this.$axiosRequest({
            method: "post",
            url: this.$requestApi.user.register,
            data: this.userInfo
          })
            .then((response) => {
              this.dialogVisible = false
              this.errform(true, response)
            })
            .catch((err) => {
              this.errform(true, err)
            })
        }
      },
      sendMsg(){
        if (this.userInfo.phone == "") {
          this.errform(true, "手机号不能为空，请重新输入！")
        } else {
          this.$axiosRequest({
            method: "post",
            url: this.$requestApi.user.sendMsg,
            data: {phone: this.userInfo.phone}
          })
            .then((response) => {
              this.errform(true, response)
            })
            .catch((err) => {
              this.errform(true, err)
            })
        }
      },
      //错误弹出框
      errform(val, data){
        this.remindVisible = val;
        this.errInfo = data
      },
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .group-ipt {
    border-top: 1px solid gainsboro;
    /*border-bottom: 1px solid black;*/
  }

  .phoneCode {
    width: 200px;
    float: left;
  }

  .phoneCodeClick {
    width: 98px;
    float: right;
    height: 44px;
    line-height: 43px;
  }

  .userName {
    border-top: none;
  }

  #sendMsg {
    height: 30px;
    width: 90px;
  }

  input:focus {
    outline: none;
  }

  canvas {
    display: block;
    vertical-align: bottom;
  }

  #box {
    width: 100%;
    height: 100%;
    background-color: #F7FAFC;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .cent-box {
    width: 300px;
    height: 440px;
    vertical-align: middle;
    white-space: normal;
    margin: 0 auto;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -220px;
  }

  .register-box {
    height: 490px;
    margin-top: -270px;
  }

  .cent-box-header {
    text-align: center;
  }

  .hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }

  .cent-box-header .main-title {
    width: 160px;
    height: 74px;
    margin: 0 auto;
    background-size: contain;
  }

  .cent-box-header .sub-title {
    margin: 30px 0 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
  }

  .clearfix:before {
    content: '';
    display: table;
  }

  .index-tab {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .index-tab .index-slide-nav {
    display: inline-block;
    position: relative;
  }

  .index-tab .index-slide-nav a {
    float: left;
    width: 4em;
    line-height: 35px;
    opacity: 0.7;
    -webkit-transition: opacity .15s, color .15s;
    transition: opacity .15s, color .15s;
    color: #555;
  }

  .index-tab .index-slide-nav a:hover {
    color: #0f88eb;
    opacity: 1;
  }

  .index-tab .index-slide-nav a.active {
    opacity: 1;
    color: #0f88eb;
  }

  .slide-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 .8em;
    width: 2.4em;
    height: 2px;
    background: #0f88eb;
  }

  .slide-bar1 {
    left: 4em;
  }

  .form {
    float: none;
    margin: auto;
    text-align: left;
    width: 300px;
  }

  .form .group {
    padding: 1px 0;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }

  .form .group .group-ipt {
    position: relative;
    margin: 0;
    overflow: hidden;
  }

  .form .group .group-ipt input {
    padding: 1em .8em;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.5);
    font-family: 'Microsoft Yahei';
    color: #666;
    position: relative;
  }

  #password, #verify, #user, #password1 {
    border-top: 1px solid #e8e8e8;
  }

  .imgcode {
    width: 95px;
    position: absolute;
    right: 0;
    top: 2px;
    cursor: pointer;
    height: 40px;
  }

  .button {
    margin-top: 18px;
  }

  #button {
    width: 100%;
    background: #0f88eb;
    box-shadow: none;
    border: 0;
    border-radius: 3px;
    line-height: 41px;
    color: #fff;
    display: block;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Microsoft Yahei';
  }

  #button:hover {
    background: #80c3f7;
  }

  .remember {
    margin-top: 10px;
    line-height: 30px;
  }

  .remember label {
    display: block;
  }

  .remember-me {
    font-size: 14px;
    float: left;
    position: relative;
    cursor: pointer;
  }

  .icon {
    width: 11px;
    height: 11px;
    display: block;
    border: 1px solid #ccc;
    float: left;
    margin-top: 8px;
    margin-right: 5px;
    cursor: pointer;
  }

  .zt {
    width: 9px;
    height: 9px;
    background: #0f88eb;
    margin: 1px;
    display: block;
  }

  #remember-me {
    position: absolute;
    left: 0;
    top: 8px;
    opacity: 0;
    cursor: pointer;
  }

  .forgot-password {
    float: right;
    font-size: 14px;
  }

  .forgot-password a {
    color: #555;
  }

  .forgot-password a:hover {
    text-decoration: underline;
  }

  .footer {
    position: fixed;
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0;
    text-align: center;
    color: #999;
    z-index: 2;
    padding-bottom: 10px;
    font-size: 13px;
  }

  .footer a {
    color: #666;
    text-decoration: underline;
  }

</style>
