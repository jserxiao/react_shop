import React from "react";
import {NavLink} from 'react-router-dom'

export default class Ordersub extends React.Component {
    render() {
        return (
            <main>
                
                <section className="aui-address-content">
                    <div className="aui-address-box">
                        <div className="aui-address-box-list">
                            <div className="aui-address-box-default">
                                <ul>
                                    <li>
                                        <strong>李嘉华 185****6698</strong>
                                        <span className="aui-tag" id="aui-home">家里</span>
                                        <span className="aui-tag aui-tag-default" id="aui-default">默认</span>
                                    </li>
                                    <li>
                                        <i className="aui-icon aui-icon-address"></i>
                                        北京海淀区三环到四环之间学院路东里33号楼1门202
						</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                    <div className="aui-list-product-float-item">
                        <div className="aui-list-product-fl-item">
                            <div className="aui-list-product-fl-img">
                                <img src="../assets/img/pd/sf-10.jpg" alt="" />
                            </div>
                            <div className="aui-list-product-fl-text">
                                <h3 className="aui-list-product-fl-title">2016夏天新款男士短袖t恤青少年韩版修身印花圆领半袖男装衣服潮领半袖男装衣服潮领半袖男装衣服潮</h3>
                                <div className="aui-list-product-fl-mes">
                                    <div>
                                        <span className="aui-list-product-item-price">
                                            <em>¥</em>
                                            399.99
							</span>
                                        <span className="aui-list-product-item-del-price">
                                            ¥495.65
							</span>
                                    </div>
                                    <div className="aui-btn-purchase">
                                        {/* <span>2.8020kgx1</span> */}
                                    </div>
                                </div>
                                <div className="aui-list-product-fl-bag">
                                    <span><img src="../assets/img/icon/bag1.png" alt="" /></span>
                                    <span><img src="../assets/img/icon/bag2.png" alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-address-well">
                        <div className="aui-address-cell aui-fl-arrow">
                            <div className="aui-address-cell-bd">支持配送</div>
                            <div className="aui-address-cell-ft">
                                <p>在线支付</p>
                                <p>顺丰快递</p>
                                <p className="aui-address-text"><i className="aui-icon aui-prompt-sm"></i>11月12日[周五]09:00-15:00</p>
                            </div>
                        </div>
                        <div className="aui-prompt"><i className="aui-icon aui-prompt-sm"></i>您的收货时间为工作日，请您做好收货准备。</div>
                        <div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                            <div className="aui-address-cell-bd">发票</div>
                            <div className="aui-address-cell-ft">个人</div>
                        </div>
                        <div className="aui-dri"></div>
                        <div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                            <div className="aui-address-cell-bd">
                                运费险
					<p style={{ color: "#888" }}>7天内退货，15天内可换货</p>
                            </div>
                            <div className="aui-address-cell-ft">￥0.50&nbsp;&nbsp;<input className="aui-switch" type="checkbox" defaultChecked /></div>
                        </div>
                        <div className="aui-dri"></div>
                        <div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                            <div className="aui-address-cell-bd">优惠券</div>
                            <div className="aui-address-cell-ft">不可用</div>
                        </div>
                        <div className="aui-dri"></div>
                        {/* <div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">礼品卡</div>
				<div className="aui-address-cell-ft">不可用</div>
			</div> */}
                        <div className="aui-dri"></div>
                        <div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                            <div className="aui-address-cell-bd">积分</div>
                            <div className="aui-address-cell-ft">567890</div>
                        </div>
                        <div className="aui-dri"></div>
                        <div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                            <div className="aui-address-cell-bd">
                                <h3>商品金额</h3>
                                <p>运费(总重:1.978kg)</p>
                            </div>
                            <div className="aui-address-cell-ft">
                                <span className="aui-red">￥2899.00</span><br />
                                <span className="aui-red">+￥0.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="aui-payment-bar">
                        <div className="shop-total">
                            <span className="aui-red aui-size">实付款: <em>￥399.00</em></span>
                        </div>
                        <NavLink to='/ordermenu' className="settlement">提交订单</NavLink>
                    </div>
                </section>
            </main>
        );
    }
}