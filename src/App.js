import React from 'react';
import './assets/css/home.css'
import './assets/css/core.css'
import './assets/css/icon.css'
import './assets/css/ui.css'
import 'antd/dist/antd.css'



import Detail from './pages/detail'
import Home from './pages/home'
import Login from './pages/login'
import Ordermenu from './pages/ordermenu'
import Ordersub from './pages/ordersub'
import Reg from './pages/reg'
import User from './pages/user'
import Shopcar from './pages/shopcar'
import Error from './pages/error'
import Guard from "./guard/Auth";

import Header from './components/header'
import Footer from './components/footer'

import { Switch, Redirect, Route, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import * as types from './store/varias'

class App extends React.Component {


  state = {}
  static getDerivedStateFromProps(nextProps, nextState) {
    let { viewFoot, viewHead, infoHeadSend } = nextProps;
    let path = nextProps.location.pathname;
    //显示头或尾
    if (/home|login|reg|user/.test(path)) {
      viewHead(false);
      viewFoot(true);
    }
    if (/shopcar|ordersub|ordermenu|detail/.test(path)) {
      viewHead(true);
      viewFoot(false);
    }


    //更改头部标题信息
    if (/shopcar/.test(path)) {
      infoHeadSend('购物车');
    }
    if (/ordersub/.test(path)) {
      infoHeadSend('订单提交');
    }
    if (/ordermenu/.test(path)) {
      infoHeadSend('订单列表');
    }
    if (/detail/.test(path)) {
      infoHeadSend('商品详情');
    }

    if (window.localStorage.getItem('userdata') && JSON.parse(window.localStorage.getItem('userdata')).err == 0) {
      nextProps.getLocalLogInfo();
    }

    return {}
  }
  componentDidMount() {
    
  }
  render() {
    let { bHead, bFoot } = this.props;
    return (
      <div className="App">
        {bHead && <Header></Header>}
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Guard path='/ordermenu' component={Ordermenu} />
          <Guard path='/ordersub' component={Ordersub} />
          <Route path='/reg' component={Reg} />
          <Guard path='/shopcar' component={Shopcar} />
          <Guard path='/user' component={User} />
          <Route path={'/detail/:id'} component={Detail} />
          <Redirect exact from="/" to="/home" />
          <Route component={Error} />
        </Switch>
        {bFoot && <Footer></Footer>}
      </div>
    );
  }
}

const initMapStateToProps = state => ({
  bHead: state.bHead,
  bFoot: state.bFoot,
  infoHead: state.infoHead
})

const initMapDispatchToProps = dispatch => ({
  viewHead: (bl) => {
    return dispatch({ type: types.VIEW_HEADER, payload: bl })
  },
  viewFoot: (bl) => {
    return dispatch({ type: types.VIEW_FOOTER, payload: bl })
  },
  infoHeadSend: (str) => {
    return dispatch({ type: types.INFO_HEAD, payload: str })
  },
  getLocalLogInfo:()=>{
    return dispatch({ type: types.INFO_LOG, payload: JSON.parse(window.localStorage.getItem('userdata')) })
  }
})

export default connect(initMapStateToProps, initMapDispatchToProps)(withRouter(App));
