import React from "react";
import {connect} from "react-redux"
import * as types from '../store/varias'
import { withRouter } from 'react-router-dom'

 class Header extends React.Component {
    state={}
    static getDerivedStateFromProps(nextProps,nextState){
      let {infoHeadSend}=nextProps;
      let path=nextProps.location.pathname;
      
      //更改头部标题信息
      if(/shopcar/.test(path)){
        infoHeadSend('购物车');
      }
      if(/ordersub/.test(path)){
        infoHeadSend('订单提交');
      }
      if(/ordermenu/.test(path)){
        infoHeadSend('订单列表');
      }
      if(/detail/.test(path)){
        infoHeadSend('商品详情');
      }
      return {}
    }
    render() {
        return (
            <header className="aui-header-default aui-header-fixed aui-header-bg">
                <div className="aui-header-item">
                    <i className="aui-icon aui-icon-back-white" onClick={()=>{window.history.go(-1)}}></i>
                </div>
                <div className="aui-header-center aui-header-center-clear">
                    <div className="aui-header-center-logo">
                        <div className="aui-car-white-Typeface">{this.props.infoHead}</div>
                    </div>
                </div>
                <a href="#" className="aui-header-item-icon" style={{minWidth:"0"}}>
                    <i className="aui-icon aui-icon-member"></i>
                </a>
            </header>
        );
    }
}
const initMapStateToProps=state=>({
    infoHead:state.infoHead
  })
  
  const initMapDispatchToProps = dispatch=>({
    infoHeadSend:(str)=>{
      return dispatch({type:types.INFO_HEAD,payload:str})
    }
  })

export default connect(initMapStateToProps,initMapDispatchToProps)(withRouter(Header));