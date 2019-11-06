import React from 'react';
import axios from 'axios';
import store from '../store/store';
import * as types from '../store/varias'

axios.defaults.withCredentials=true;//整体携带跨源凭证


//拦截器
axios.interceptors.request.use(function (config) {
  // console.log('拦截器 request before');
  //添加公共请求头  token key：value
  store.dispatch({type:types.VIEW_LOADING,payload:true})

  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // console.log('拦截器 response before')
  store.dispatch({type:types.VIEW_LOADING,payload:false})

  return response;
}, function (error) {
  return Promise.reject(error);
});

React.axios=axios;
window.axios=axios;

export default axios;
