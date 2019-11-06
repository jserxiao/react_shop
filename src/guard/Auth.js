import React from 'react';

import {Route,Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import Notify from "../components/notify";
import store from '../store/store'
import * as types from "../store/varias";

//同步守卫条件
const Auth = ({component:Component,logInfo, ...rest}) => {
  console.log(logInfo)
  if(logInfo.err!=0){
    Notify('请先登录')
  }
  return (
  <Route render={(rest)=>(
    logInfo.err === 0 ?
      <Component {...rest} /> :
      <Redirect to="/login"/>
  )}/>
  
);}

const initMapStateToProps = state => ({
  logInfo:state.logInfo
});



export default connect(initMapStateToProps,null)(Auth)