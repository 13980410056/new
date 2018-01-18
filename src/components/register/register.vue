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
      <br/><br/><br/>
      <div class="namePwd">
        <img src="../../assets/image/password.png" alt="">
        <input type="password" placeholder="请输入密码">
      </div>
      <br/><br/><br/>
      <div class="namePwd">
        <img src="../../assets/image/password.png" alt="">
        <input type="password" placeholder="请再次输入密码">
      </div>
      <br/><br/><br/>
      <div class="namePwd">
        <img src="../../assets/image/phone.png" alt="">
        <input type="password" placeholder="请输入手机号码">
      </div>
      <br/><br/><br/>
      <div class="yanzheng">
        <input type="password" placeholder="请输入验证码"><span>获取验证码</span>
      </div>
      <br/>
      <div class="xieyi">
      <p>注册既表示同意<a href="#">用户协议</a>和<a href="#">用户使用守则</a></p>
      </div>
    </div>
    <!--登录按钮-->
    <div class="denglu">
      <button>注册</button>
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
    height: 180px;
    font-size: 3em;
    color: white;
    word-spacing: 2px;
    line-height: 250px;
    text-align: center;
  }
  .namePwdalign{
    box-sizing: border-box;
    width: 100%;
    height: 305px;
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

  /*<!--登录按钮-->*/
  .denglu{
    width: 100%;
   height: 100px;
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
    margin-top: 40px;
    font-size: 1.3em;
    background-color: #099894;
  }
  .yanzheng input{
    width: 160px;
    height:25px;
    float: left;
    border: none;
    margin-left: 25px;
    color: white;
    display: inline-block;
    border-bottom: solid white 1px;
    background-color: rgba(255,255,255,.0);
  }
  .yanzheng span{
    background-color: #089894;
    border-radius: 15px;
    width: 90px;
    text-align: center;
    color: rgba(255,255,255,.7);
    line-height: 30px;
    font-size: .8em;
    display: inline-block;
    height: 30px;
  }
 .xieyi p{
   font-size: .4em;
   margin-left: 20px;
   color:rgba(255,255,255,.7) ;
 }
  .xieyi a{
    color:rgba(255,255,255,.7) ;
  }


</style>
