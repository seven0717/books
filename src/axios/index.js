import axios from 'axios' // axios引用
import store from '../store/store'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


axios.interceptors.request.use((config) =>{
  // 在发送请求之前做些什么

  if(store.state.token){  // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = `token ${localStorage.token}`
  }
  console.log('fgfgfg',config.headers);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(!response.data){
    return {
      msg:"数据返回不合理"
    }
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (err.response){
    switch (error.response.status) {
      case 401: store.commit()
    }
  }
  return Promise.reject(error);
});
export default axios

