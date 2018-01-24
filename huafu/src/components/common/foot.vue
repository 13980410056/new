<template>
    <div class="MyFoot">
        <div class="MyFoot_left">
               <div>

               </div>
        </div>
        <div class="MyFoot_middle">
            <div>
              <router-link to="/aboutsUs">关于我们</router-link>

            </div>
            <p>
                华风汉服带你领略古典汉服的美丽
            </p>
            <p>
                Hua show you the beauty of classic hanfu
            </p>
        </div>
        <div class="Myfoot_right">
            <div>
                <span class="fa fa-weixin Myfoot_right_span1" @hover="Myhover"></span>
                <div class="Myfoot_right_abs"></div>
                <a href="http://wpa.qq.com/msgrd?v=3&uin=598553638&site=qq&menu=yes
" target="_blank" title="点击和我们咨询"  rel="nofollow"><span class=" fa fa-qq"></span></a>
                <span class="fa fa-weibo"></span>
                <div class="Myfoot_right_abs Myfoot_right_weibo"></div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data: function () {
            return {}
        },
        methods: {
            Myhover:function(){
                alert('222')
            }
        }

    }
</script>
<style>
   @import "../../assets/css/foot.css";
   /*@import "../../assets/css/font-awesome.css";*/
  .MyFoot{
    position: relative;
    margin-top: -170px;
  }
</style>
