import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/index/index.vue"
import Culture from "@/components/culture/culture.vue"    //文化页面，也是首页
import Travel from "@/components/travel/travel.vue"      //旅游页面
import Personal from "@/components/personal/personal.vue"    //个人中心
import mainIndex from "@/components/index/mainIndex"
import Store from "@/components/store/store"     //商城
import Myfavorite from "@/components/myfavorite/myfavorite"    //我的收藏
import WalkIntoQz from "@/components/walkIntoQz/walkIntoQz.vue"   //走进羌族子页面
import Login from "@/components/login/login"    //登录
import Register from "@/components/register/register.vue"   //注册
import SongpingDatil from "@/components/travel/songpingDatil/songpingdatil.vue"  //松坪沟详情页
import Menu from "@/components/index/menu"       //菜单
import Community from "@/components/hotTopic/community"    //社区中的话题
import travelNote from "@/components/travelNotes/travelNote"    //游记
import Shouye from "@/components/index/shouye"

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
    path: '/',
    redirect:'/Login'
   },
    {
      path:'/Login',
      name: '/Login',
      component: Login
    },
    {
      path:'/Shouye',
      name: '/Shouye',
      component: Shouye
    },

    {
      // path: '/',

      // redirect:'/mainIndex',
      // name: 'Index',
      // component: Index,


      path:'/Index',
      name:'Index',
      component:Index,
      children:[
        {
          path:'mainIndex',
          name:'mainIndex',
          component:mainIndex
        },
        {
          path:'Culture',
          name:'Culture',
          component:Culture
        },
        {
          path:'Travel',
          name:'Travel',
          component:Travel
        },
        {
          path:'Personal',
          name:'Personal',
          component:Personal
        },
        {
          path:'Store',
          name:'Store',
          component:Store
        }
      ]
    },

    {
      "name":"Myfavorite",
      "path":"/Myfavorite",
      "component":Myfavorite
    },
    {
      "name":" WalkIntoQz",
      "path":"/WalkIntoQz",
      "component": WalkIntoQz
    },
    {
      "name":"Register",
      "path":"/Register",
      "component":Register
    },
    {
      "name":"SongpingDatil",
      "path":"/SongpingDatil",
      "component":SongpingDatil
    },
    {
      "name":"Menu",
      "path":"/Menu",
      "component":Menu
    },
    {
      "name":"Community",
      "path":"/Community",
      "component":Community
    },
    {
      "name":"travelNote",
      "path":"/travelNote",
      "component":travelNote
    },

  ]
})
