<template>
  <div>
    <div v-if="!userIsLogin">
      <el-button type="text" @click="loginVisible = true">登录</el-button>
      <!--------------------------------登录弹框start------------------------------------------------->
      <el-dialog title="登录" width="25%" top="150px" :visible.sync="loginVisible">

        <!--------------------------------登录弹框内容start------------------------------------------------->
        <label>用户名：</label>
        <el-input v-model="loginInfo.userAccount" placeholder="请输入用户名" id="userAccount"></el-input>
        <label>密码：</label>
        <el-input v-model="loginInfo.userPwd" placeholder="请输入密码" id="userPwd"></el-input>
        <span @click="resetPwd" id="resetPwd">忘记密码</span>
        <!--------------------------------登录弹框内容end------------------------------------------------->

        <!--------------------------------错误弹出框start------------------------------------------------->
        <el-dialog width="25%" title="错误！" top="150px" :visible.sync="remindVisible" append-to-body>
          <!--------------------------------错误弹出框内容start------------------------------------------------->
          <span>{{errInfo}}</span>
          <!--------------------------------错误弹出框内容end------------------------------------------------->
          <div slot="footer" class="dialog-footer">

            <el-button type="primary" @click="remindVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <!--------------------------------错误弹出框end------------------------------------------------->

        <!--------------------------------忘记密码弹出框start------------------------------------------------->
        <el-dialog width="25%" title="修改密码" top="150px" :visible.sync="resetPwdVisible" append-to-body>
          <div class="group-ipt phoneCode">
            <el-input type="text" v-model="resetPwdInfo.phone" id="phone" name="phone" class="ipt" placeholder="手机号："/>
            </el-input>
          </div>
          <div class="group-ipt ">
            <el-button id="sendMsg" @click="sendMsg();">发送验证码</el-button>
          </div>
          <div class="group-ipt" style="clear: both">
            <el-input type="text" v-model="resetPwdInfo.smscode" id="smscode" name="smscode" class="ipt"
                      placeholder="输入验证码：" required/>
            </el-input>
          </div>
          <div class="group-ipt" style="clear: both">
            <el-input type="text" v-model="resetPwdInfo.firstPwd" id="firstPwd" name="firstPwd" class="ipt"
                      placeholder="密码：" required/>
            </el-input>
          </div>
          <div class="group-ipt" style="clear: both">
            <el-input type="text" v-model="resetPwdSure" id="secendPwd" name="secendPwd" class="ipt" placeholder="确认密码："
                      required/>
            </el-input>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="formOut">确 定</el-button>
          </div>
        </el-dialog>
        <!--------------------------------忘记密码弹出框end------------------------------------------------->

        <!--------------------------------登录弹出框底部按钮start------------------------------------------------->
        <div slot="footer" class="dialog-footer">
          <!--<el-input type="button" @click="login" value="登录">登录</el-input>-->
          <el-button type="primary" @click="login" @keyup.enter="login" id="loginBut">登录</el-button>
        </div>
        <!--------------------------------登录弹出框底部按钮end------------------------------------------------->

      </el-dialog>
      <!--------------------------------登录弹框end------------------------------------------------->
    </div>
    <div v-if="userIsLogin">
      <headerModal v-on:userQuit="userQuit"></headerModal>
    </div>
    <div v-if="!userIsLogin">
      <register></register>
    </div>
  </div>
</template>

<script>
  import headerModal from './headerModal.vue'
  import register from './register.vue'
  export default {
    data() {
      return {
        loginVisible: false,
        remindVisible: false,
        resetPwdVisible: false,
        loginInfo: {userAccount: "", userPwd: ""},//输入框的值
        errInfo: "",//错误提示信息
        userInfo: {},//个人信息
        userIsLogin: 0,//登录状态
        resetPwdInfo: {phone: "", smscode: "", firstPwd: ""},//忘记密码输入框
        resetPwdSure: "",//确认密码

      };
    },
    components: {
      headerModal,register
    },
    methods: {
      //用户登录
      login() {
        var that = this;
        that.errInfo = "";
        if (!that.loginInfo.userAccount) {
          that.errform(true, "帐号不能为空！")
        } else if (!that.loginInfo.userPwd) {
          that.errform(true, "密码不能为空！")
        } else {
          that.$axiosRequest({
            method: "post",
            url: that.$requestApi.user.userLogin,
            data: that.loginInfo
          })
            .then((response) => {
              if (response.flag == 1) {
                that.userInfo = response.data[0];
                that.loginVisible = false;
                that.setItem()
                that.getItem()
              } else {
                that.errform(true, "帐号密码错误")
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      // 把用户数据存入sessionStorage
      setItem(){
        sessionStorage.setItem('userIsLogin', 1)
        for (var item in this.userInfo) {
          sessionStorage.setItem(item, this.userInfo[item])
        }
      },
      getItem(){
        this.userIsLogin = sessionStorage.getItem("userIsLogin")
      },
      //用户退出登录
      userQuit(){
        this.userIsLogin = 0
        sessionStorage.setItem('userIsLogin', 0)
        this.$router.push({path: '/'})
      },
      //忘记密码
      resetPwd(){
        this.loginVisible = false;
        this.resetPwdVisible = true
      },
      //忘记密码  发送验证码
      sendMsg(){
        if (this.resetPwdInfo.phone == "") {
          this.errform(true, "手机号不能为空，请重新输入！")
        } else {
          this.$axiosRequest({
            method: "post",
            url: this.$requestApi.user.sendSms,
            data: {phone: this.resetPwdInfo.phone}
          })
            .then((response) => {
              console.log(response)
              this.errform(true, "发送成功")
            })
            .catch((err) => {
              console.log(err)
              this.errform(true, "发送失败")
            })
        }
      },
      //忘记密码 确认更改
      formOut(){
//        this.resetPwdVisible = false;
        if(this.resetPwdInfo.smscode==""){
          this.errform(true,"验证码不能为空！")
        }else if(this.resetPwdInfo.firstPwd==""){
          this.errform(true,"密码不能为空！")
        }else if(this.resetPwdSure ==""){
          this.errform(true,"确认密码不能为空！")
        }else if(this.resetPwdSure!=this.resetPwdInfo.firstPwd){
          this.errform(true,"确认密码错误！请从新输入")
        }else {
          this.$axiosRequest({
            method: "post",
            url: this.$requestApi.user.resetPwd,
            data: this.resetPwdInfo
          })
            .then((response) => {
              console.log(response)
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
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  #loginBut {
    width: 100%;
  }

  .group-ipt {
    border-top: 1px solid gainsboro;
    /*border-bottom: 1px solid black;*/
  }

  #resetPwd {
    /*width: 100%;*/
    float: right;
    text-align: right;
    display: inline-block;
    margin-top: 5px;
    cursor: pointer;
  }

  .phoneCode {
    border-top: none;
    width: 200px;
    float: left;
  }

  .phoneCodeClick {
    border-top: none;
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


</style>
