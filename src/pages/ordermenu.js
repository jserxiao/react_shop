import React from "react";

export default class Ordermenu extends React.Component {
    render() {
        return (
            <section className="aui-myOrder-content">
                <div className="m-tab demo-small-pitch" data-ydui-tab>
                    <div className="aui-myOrder-fix">
                        <ul className="tab-nav">
                            <li className="tab-nav-item tab-active"><a href="#">全部</a></li>
                            <li className="tab-nav-item"><a href="#">待付款</a></li>
                            <li className="tab-nav-item"><a href="#">待发货</a></li>
                            <li className="tab-nav-item"><a href="#">待收货</a></li>
                            <li className="tab-nav-item"><a href="#">评价</a></li>
                        </ul>
                    </div>
                    <div className="aui-prompt"><i className="aui-icon aui-prompt-sm"></i>双十一期间发货及物流时效公告</div>
                    <div className="tab-panel">
                        <div className="tab-panel-item tab-active">
                            <ul>
                                <li>
                                    <div className="aui-list-title-info">
                                        <a href="#" className="aui-well ">
                                            <div className="aui-well-bd">2017-11-14</div>
                                            <div className="aui-well-ft">待付款</div>
                                        </a>
                                        <a href="#" className="aui-list-product-fl-item">
                                            <div className="aui-list-product-fl-img">
                                                <img src="../assets/img/pd/sf-1.jpg" alt="" />
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
                                                        x1
											</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="aui-list-title-btn">
                                        <a href="#">取消订货</a>
                                        <a href="#" className="red-color">立即付款</a>
                                    </div>
                                    <div className="aui-dri"></div>
                                </li>

                                <li>
                                    <div className="aui-list-title-info">
                                        <a href="#" className="aui-well ">
                                            <div className="aui-well-bd">2017-11-14</div>
                                            <div className="aui-well-ft">交易成功</div>
                                        </a>
                                        <a href="#" className="aui-list-product-fl-item">
                                            <div className="aui-list-product-fl-img">
                                                <img src="../assets/img/pd/sf-6.jpg" alt="" />
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
                                                        x1
											</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="aui-list-title-btn">
                                        <a href="#">删除订单</a>
                                        <a href="#">评价</a>
                                    </div>
                                    <div className="aui-dri"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}