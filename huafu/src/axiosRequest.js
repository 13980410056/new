import axios from 'axios'
import apiPort from './api/apiPort'

axios.defaults.baseURL=apiPort.port;

const transformRequest=(data) => {
  var str = "";
  for (var key in data) {
    str += key + "=" + data[key] + "&"
  }
  str = str.substring(0, str.length - 1);
  return str;
}

const axiosRequest = (axiosObjest)=>{

  axiosObjest = axiosObjest || {
      method: "get",
      url: "",
      params: {}
    }

  if (axiosObjest.method == "get") {
    return new Promise((resolve, reject) => {
      axios({
        method:"get",
        url:axiosObjest.url,
        params: axiosObjest.data,
        transformRequest: [transformRequest]
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error)
        })
    })
  } else if (axiosObjest.method == "post") {
    return new Promise((resolve, reject) => {
      axios({
        method:"post",
        url:axiosObjest.url,
        data: axiosObjest.data,
        transformRequest: [transformRequest]
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default axiosRequest;

