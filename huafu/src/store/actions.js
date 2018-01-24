/**
 * Created by Administrator on 2017-12-13.
 */
//把将要修改的值发送到mutations.js中---值只允许在mutations.js中修改
export const fun = ({commit}) => {
  commit({
    type: 'getUserState',     //对应mutation.js中的getMsg方法
    userState: false
  });
};
