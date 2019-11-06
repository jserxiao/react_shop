import React from "react";
import {NavLink} from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <footer className="aui-footer-default aui-footer-fixed">
                {/* <a className="aui-footer-item aui-footer-active"> */}
                <NavLink to='/home' className="aui-footer-item" activeClassName="aui-footer-active">
                    <span className="aui-footer-item-icon aui-icon aui-footer-icon-home"></span>
                    <span className="aui-footer-item-text">首页</span>
                </NavLink>
                <NavLink to='/ordermenu' className="aui-footer-item" activeClassName="aui-footer-active">
                    <span className="aui-footer-item-icon aui-icon aui-footer-icon-find"></span>
                    <span className="aui-footer-item-text">订单</span>
                </NavLink>
                <NavLink to='/shopcar' className="aui-footer-item" activeClassName="aui-footer-active">
                    <span className="aui-footer-item-icon aui-icon aui-footer-icon-car"></span>
                    <span className="aui-footer-item-text">购物车</span>
                </NavLink>
                <NavLink to='/user' className="aui-footer-item" activeClassName="aui-footer-active">
                    <span className="aui-footer-item-icon aui-icon aui-footer-icon-me"></span>
                    <span className="aui-footer-item-text">我的</span>
                </NavLink>
            </footer>
        );
    }
}