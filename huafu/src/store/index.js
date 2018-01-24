/**
 * Created by Administrator on 2017-12-13.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
// import * as mutations from './mutations';
// import * as getters from './getters';
// import state from './rootState';
Vue.use(Vuex)

const state = {
  userState:"1231"
}
const getters={
  userStates:function(state){
    return state.userState
  }
}
const store = new Vuex.Store({
  state,
  getters,
  actions,
  // mutations
})
export default store;
