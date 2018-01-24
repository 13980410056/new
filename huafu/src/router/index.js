import Vue from 'vue'
import Router from 'vue-router'

/*view begin*/
import aboutUs from '@/view/aboutUs.vue'
import activity from '@/view/activity'
import album from '@/view/album'
import community from '@/view/community'
import goods from '@/view/goods'
import home from '@/view/home'
import knowledge from '@/view/knowledge'
import news from '@/view/news'
import perCenIndex from '@/view/personCenter'
import userPage from '@/view/userPage'

/*活动路由*/
import activityDetails from '@/components/activity/activityDetails.vue'

/*知识路由*/
import knowledgeDetails from '@/components/knowledge/knowledgeDetails'
import knowledgeKind from '@/components/knowledge/knowledgeKind'

/*社区路由*/
import concern from '@/components/community/left/concern.vue'
import hot from '@/components/community/left/hot.vue'
import square from '@/components/community/left/square.vue'

/*个人主页路由*/
import userPageHome from '@/components/userPage/userPageHome'
import userPageNotice from '@/components/userPage/userPageNotice'
import userPagePhoto from '@/components/userPage/userPagePhoto'
import userPageActive from '@/components/userPage/userPageActive'
import userPageNoticeAT from '@/components/userPage/userPageNotice/userPageNoticeAT'
import userPageNoticeComment from '@/components/userPage/userPageNotice/userPageNoticeComment'
import userPageNoticeLike from '@/components/userPage/userPageNotice/userPageNoticeLike'
import userPageFans from '@/components/userPage/userPageFans'

/*个人中心路由*/
import perCenAddress from '@/components/personCenter/perCenAddress'
import perCenCollect from '@/components/personCenter/perCenCollect'
import perCenDatum from '@/components/personCenter/perCenDatum'
import perCenEstimate from '@/components/personCenter/perCenEstimate'
import perCenIndent from '@/components/personCenter/perCenIndent'
import perCenSafety from '@/components/personCenter/perCenSafety'
import perCenSafetyPW from '@/components/personCenter/perCenSafetyPW'
import perCenSafetyPH from '@/components/personCenter/perCenSafetyPH'

/*摄影*/
import albumDetails from '@/components/album/albumDetails.vue'

/*商城路由*/
import goodsCar from '@/components/goods/goodsCar'
import goodsDetails from '@/components/goods/goodsDetails'
import goodsKindX from '@/components/goods/goodsKindX'
import goodsOrder from '@/components/goods/goodsOrder'
import goodsPay from '@/components/goods/goodsPay'

/*登陆*/
import resetPwd from '../components/common/resetPwd.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    /*首页路由*/
    {path: '/', name: 'home', component: home,
      children:[

      ]
    },
    /*关于我们*/
    {path: '/aboutsUs', name: 'aboutUs', component: aboutUs},
    /*活动路由*/
    {path: '/activity', name: 'activity', component: activity},
    {path: '/activity/activityDetails', name: 'activityDetails', component: activityDetails},

    /*摄影路由*/
    {path: '/album', name: 'album', component: album},
    {path: '/albumDetails', name: 'albumDetails', component: albumDetails},

    /*社区路由*/
    {
      path: '/community', components: {default: community, concern, hot, square},
      children: [
        {path: '', name: 'community', component: concern},
        {path: '/community/hot/', name: 'hot', component: hot},
        {path: '/community/square/', name: 'square', component: square}
      ]
    },

    /*知识路由*/
    {path: '/knowledge', name: 'knowledge', component: knowledge},
    {path: '/knowledge/knowledgeDetails', name: 'knowledgeDetails', component: knowledgeDetails},
    {path: '/knowledge/knowledgeKind', name: 'knowledgeKind', component: knowledgeKind},

    /*新闻路由*/
    {path: '/news', name: 'news', component: news},

    /*个人主页Router*/
    {
      path: '/userPage', components: {default: userPage, userPageHome, userPagePhoto, userPageNotice, userPageActive},
      children: [
        {path: '', name: 'userPage', component: userPageHome},
        {
          path: 'userPage/notice', name: 'userPageNotice',
          components: {default: userPageNotice, userPageNoticeAT, userPageNoticeComment, userPageNoticeLike},
          children: [
            {path: '/userPage/notice/AT', name: 'userPageNoticeAT', component: userPageNoticeAT},
            {path: '/userPage/notice/comment', name: 'userPageNoticeComment', component: userPageNoticeComment},
            {path: '/userPage/notice/like', name: 'userPageNoticeLike', component: userPageNoticeLike}
          ]
        },
        {
          path: '/userPage/photo',
          name: 'userPagePhoto',
          component: userPagePhoto
        },
        {
          path: '/userPage/active',
          name: 'userPageActive',
          component: userPageActive
        },
        {
          path: '/userPage/fans',
          name: 'userPageFans',
          component: userPageFans
        }
      ]
    },

    /*商城路由*/
    {path: '/goods', name: 'goods', component: goods},
    {path: '/goods/goodsCar', name: 'goodsCar', component: goodsCar},
    {path: '/goods/goodsDetails', name: 'goodsDetails', component: goodsDetails},
    {path: '/goods/goodsKindX', name: 'goodsKindX', component: goodsKindX},
    {path: '/goods/goodsOrder', name: 'goodsOrder', component: goodsOrder},
    {path: '/goods/goodsPay', name: 'goodsPay', component: goodsPay},

    /*个人中心*/
    {path: '/perCenIndex', name: 'perCenIndex', components:
      {default: perCenIndex,perCenIndent,perCenAddress,perCenCollect,perCenDatum,perCenEstimate,perCenSafety},
      children: [
        {path: '', name: 'perCenIndex', component: perCenIndent},
        {path: '/perCenIndex/address', name: 'perCenAddress', component: perCenAddress},
        {path: '/perCenIndex/collect', name: 'perCenCollect', component: perCenCollect},
        {path: '/perCenIndex/datum', name: 'perCenDatum', component: perCenDatum},
        {path: '/perCenIndex/indent', name: 'perCenIndent', component: perCenIndent},
        {path: '/perCenIndex/estimate', name: 'perCenEstimate', component: perCenEstimate},
        {path: 'perCenIndex/safety', name: 'perCenSafety', components: {default:perCenSafety,perCenSafetyPW,perCenSafetyPH},
          children:[
            {path: '/perCenIndex/safety/pw', name: 'pw', component: perCenSafetyPW},
            {path: '/perCenIndex/safety/ph', name: 'ph', component: perCenSafetyPH}
          ]
        }
      ]
    },

    /*登录*/
    {path: '/resetPwd', name: 'resetPwd', component: resetPwd}
  ]
})
