<template>
  <div class="login">
    <!--logo-->
    <div class="loginTitle">LOGO</div>
    <!--输入框-->
    <div class="namePwdalign">
      <div class="namePwd">
        <img src="../../assets/image/login.png" alt="">
        <input type="text" placeholder="请输入用户名">
      </div>
      <br/><br/><br/><br/>
      <div class="namePwd">
        <img src="../../assets/image/password.png" alt="">
        <input type="password" placeholder="请输入密码">
      </div>
    </div>
    <!--立即注册-->
    <router-link to="/Register" tag="div">
      <div class="register">
        <a href="">立即注册</a>
      </div>
    </router-link>
    <!--登录按钮-->
    <router-link to="/Shouye" class="denglu">
      <button>登录</button>
    </router-link>
    <!--分割线-->
    <div class="fgline">
      <span></span>&nbsp;or&nbsp;<span></span>
    </div>
    <!--第三方登录-->
    <div class="sanfangLogin">
      <img src="../../assets/image/qq.png" alt="">
      <img src="../../assets/image/weixin.png" alt="">
      <img src="../../assets/image/xinlang.png" alt="">
    </div>
  </div>
</template>
<script></script>
<style>
  .login{
    width: 100%;
    height: 667px;
    background-color:  #328C8A;
  }
  .loginTitle{
    width: 100%;
    height: 200px;
    font-size: 3em;
    color: white;
    word-spacing: 2px;
    line-height: 300px;
    text-align: center;
  }
  .namePwdalign{
    box-sizing: border-box;
    width: 100%;
    height: 110px;
   padding-left: 10%;
    /*border: solid red 1px;*/
  }
  .namePwd img{
   width: 25px;
    height: 25px;
    float: left;
  }
  .namePwd input{
    width: 250px;
    height:25px;
    float: left;
    border: none;
    color: white;
    display: inline-block;
    border-bottom: solid white 1px;
    background-color: rgba(255,255,255,.0);
  }
::-webkit-input-placeholder{
  color: rgba(255,255,255,.6);
  font-size: .7em;
}
  /*<!--立即注册-->*/
.register{
    width: 83%;
  height: 45px;
  line-height: 40px;
  text-align: right;
  /*border: solid red 1px;*/
  color:rgba(255,255,255,.6) ;
  }
  .register a{
    margin-top: 5px;
    color:rgba(255,255,255,.6);
  }
  /*<!--登录按钮-->*/
  .denglu{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .denglu button{
    width: 65%;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    color: white;
    border: none;
    font-size: 1.3em;
    background-color: #099894;
  }
  /*<!--分割线-->*/
  .fgline{
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 1.3em;
    color: white;

  }
  .fgline span{
    width: 130px;
    display: inline-block;
    border: none;
    border-bottom: solid white 1px;
  }
  .sanfangLogin{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    /*border: solid red 1px;*/
  }
  .sanfangLogin img{
    /*width: 45px;*/
    height: 45px;
  }
</style>
