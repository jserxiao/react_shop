import React from "react";
import store from '../store/store'
import { connect } from "react-redux"
import * as types from '../store/varias'
import { logOut } from "../store/action";
import Notify from "../components/notify";
import { NavLink } from 'react-router-dom'
import Date from '../filters/date'

class User extends React.Component {
    render() {
        return (
            <main>
                <header className="aui-header-default aui-header-fixed aui-header-bg">
                    <a href="#" className="aui-header-item">
                        <i className="aui-icon aui-icon-back-white" id="scrollSearchI" style={{ display: "block" }} onClick={() => { window.history.go(-1) }}></i>
                        <div id="scrollSearchDiv">
                            <img src="../asstes/img/user/head-3.jpg" alt="" />

                        </div>
                    </a>
                    <div className="aui-header-center aui-header-center-clear">
                        <div className="aui-car-white-Typeface">个人中心</div>
                    </div>
                    <a href="#" className="aui-header-item-icon">
                        <i className="aui-icon aui-icon-Set"></i>
                    </a>
                </header>
                <section className="aui-me-content">
                    <div className="aui-me-content-box">
                        <div className="aui-me-content-info"></div>
                        <div className="aui-me-content-list">
                            <div className="aui-me-content-item">
                                <div className="aui-me-content-item-head">
                                    <div className="aui-me-content-item-img">
                                        <img src={this.props.logInfo.data.userIcon||"../assets/img/user/head-3.jpg"} alt="" />
                                    </div>
                                    <div className="aui-me-content-item-title" style={{  width: '5rem',overflow:'hidden' }}>{this.props.logInfo.data.nickname||"未知昵称"}</div>
                                    <span style={{ lineHeight:'80px', marginLeft: '4rem', fontWeight: '700' }}>注册时间: {Date(this.props.logInfo.data.time)}</span>
                                </div>
                                <div className="aui-me-content-item-text">
                                    <a href="#">
                                        <span>98</span>
                                        <span>收藏</span>
                                    </a>
                                    <a href="#">
                                        <span>78</span>
                                        <span>关注</span>
                                    </a>
                                    <a href="#">
                                        <span>99</span>
                                        <span>足迹</span>
                                    </a>
                                    <a href="#">
                                        <span>65</span>
                                        <span>分享</span>
                                    </a>
                                </div>
                            </div>
                            <div className="aui-me-content-card">
                                <h3><i className="aui-icon aui-card-me"></i>铂金会员</h3>
                                <div onClick={() => { this.goLogout() }}>点击退出登录</div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-me-content-order">
                        <div className="aui-well aui-fl-arrow">
                            <div className="aui-well-bd">我的订单</div>
                            <NavLink to='/ordermenu' className="aui-well-ft">查看全部</NavLink>
                        </div>
                    </div>
                    <section className="aui-grid-content">
                        <div className="aui-grid-row">
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-wallet"></i>
                                <p className="aui-grid-row-label">待付款</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-goods"></i>
                                <p className="aui-grid-row-label">待发货</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-receipt"></i>
                                <p className="aui-grid-row-label">待收货</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-evaluate"></i>
                                <p className="aui-grid-row-label">待评价</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-refund"></i>
                                <p className="aui-grid-row-label">退货退款</p>
                            </div>
                        </div>
                        <div className="aui-dri"></div>
                        <div className="aui-me-content-order">
                            <div className="aui-well ">
                                <div className="aui-well-bd">我的服务</div>
                                <div className="aui-well-ft">查看全部</div>
                            </div>
                        </div>
                        <div className="aui-grid-row">
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-invitation"></i>
                                <p className="aui-grid-row-label">邀请好友</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-signs"></i>
                                <p className="aui-grid-row-label">签到领币</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-coupon"></i>
                                <p className="aui-grid-row-label">优惠券</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-fight"></i>
                                <p className="aui-grid-row-label">我的拼团</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-recommend"></i>
                                <p className="aui-grid-row-label">商品推手</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-recharge"></i>
                                <p className="aui-grid-row-label">充值中心</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-help"></i>
                                <p className="aui-grid-row-label">帮助中心</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-problem"></i>
                                <p className="aui-grid-row-label">我的问答</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-evaluates"></i>
                                <p className="aui-grid-row-label">我的评价</p>
                            </div>
                            <div className="aui-grid-row-item">
                                <i className="aui-icon-large aui-icon-large-sm aui-icon-shares"></i>
                                <p className="aui-grid-row-label">我的分享</p>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        );
    }
    goLogout() {
        if (window.localStorage.getItem('userdata')) {
            window.localStorage.removeItem('userdata');
        }
        store.dispatch({type:types.INFO_LOG,payload:{}})
        this.props.getOut().then((res) => { if (res.err == 6) { Notify(res.msg)} });
        this.props.history.push('/login');
        

    }
}

const initMapStateToProps = (state, props) => ({
    logInfo: state.logInfo,
    deleteInfo:state.deleteInfo
})

const initMapDispatchToProps = (dispatch, props) => ({
    getOut: () => dispatch(logOut({
        url: '/api/logout',
        type: types.INFO_DELETE
    })),
})

export default connect(initMapStateToProps, initMapDispatchToProps)(User);