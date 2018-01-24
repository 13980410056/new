/**
 * Created by Administrator on 2017-12-13.
 */
//修改state.msg值 ,   payload.msg对应actions.js中传过来的值
export const getUserState = (state, payload) => {
  state.userState = payload.userState;
}
