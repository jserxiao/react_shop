import React from "react";
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux"
import * as types from '../store/varias'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import {getData} from "../store/action";
import Loading from '../components/loading'

class Detail extends React.Component {
	constructor(props){
		super();
		
	}
	componentWillMount(){
		let id=this.props.match.params.id;
		this.props.detailDataGet(id)
	}
	render() {
		// console.log(this.props)
		let {detailData,bLoading}=this.props;
		return detailData&&(
			<main>
				<div className="aui-banner-content aui-fixed-top" data-aui-slider>
					<div className="aui-banner-wrapper">
						<div className="aui-banner-wrapper-item">
							<div>
								{/* <img src="../assets/img/pd/pd-zf-1.jpg" /> */}
								<img src={detailData.goodsurl} />
							</div>
						</div>
						<div className="aui-banner-wrapper-item">
							<div>
								<img src="../assets/img/pd/pd-zf-2.jpg" />
							</div>
						</div>
						<div className="aui-banner-wrapper-item">
							<div>
								<img src="../assets/img/pd/pd-zf-3.jpg" />
							</div>
						</div>
						<div className="aui-banner-wrapper-item">
							<div>
								<img src="../assets/img/pd/pd-zf-4.jpg" />
							</div>
						</div>
						<div className="aui-banner-wrapper-item">
							<div>
								<img src="../assets/img/pd/pd-zf-5.jpg" />
							</div>
						</div>
					</div>
					<div className="aui-banner-pagination"></div>

				</div>
				<div className="aui-product-content">
					<div className="aui-real-price clearfix">
						<span>
							<i>￥</i>{detailData.curprice}
						</span>
						<del><span className="aui-font-num">￥{detailData.preprice}</span></del>
						<div className="aui-settle-choice">
							<span>促销价</span>
						</div>
					</div>
					<div className="aui-product-title">
						<h2>
							{detailData.goodsword}
						</h2>
					</div>
					<div className="aui-product-boutique clearfix">
						<img src="../assets/img/icon/icon-usa.png" alt="" />
						<span className="aui-product-tag-text">美国品牌</span>
						<img src="../assets/img/icon/icon-sj.png" alt="" />
						<span className="aui-product-tag-text">精选商家</span>
					</div>
					<div className="aui-product-strip">
						<img src="../assets/img/bg/ssy.jpg" alt="" />
					</div>
					<div className="aui-product-coupon">
						<div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
							<div className="aui-address-cell-bd">选择</div>
							<div className="aui-address-cell-ft">颜色分类</div>
						</div>
						<div className="m-actionsheet" id="actionSheet">
							<div style={{ position: 'relative' }}>

								{/* <div style={{height:'400px'}}>
						<h3>
							内容填充
						</h3>
					</div>
					<div className="actionsheet-action" id="cancel">关闭</div>
					<div className="aui-product-function">
						<a href="car.html" className="yellow-color">加入购物车</div>
						<a href="order.html" className="red-color">立即购买</div>
					</div> */}

							</div>
						</div>
						<div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
							<div className="aui-address-cell-bd">领券</div>
							<div className="aui-address-cell-ft">
								<span>满159减10券</span>
								<span>满299减30券</span>
							</div>
						</div>
						<div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
							<div className="aui-address-cell-bd">配送</div>
							<div className="aui-address-cell-ft">上海 至 北京海淀区</div>
						</div>
						<div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
							<div className="aui-address-cell-bd">运费</div>
							<div className="aui-address-cell-ft">免运费</div>
						</div>
						<div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
							<div className="aui-address-cell-bd">说明</div>
							<div className="aui-address-cell-ft">假一赔十 7天无忧退货</div>
						</div>
					</div>
					<div className="aui-dri"></div>
					<div className="aui-product-evaluate">
						<div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
							<div className="aui-address-cell-bd">商品评价   <em>(3290)</em></div>
							<div className="aui-address-cell-ft">
								<span>好评 100%</span>
							</div>
						</div>
					</div>
					<div className="aui-dri"></div>
					<div className="aui-product-evaluate">
						<div className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
							<div className="aui-address-cell-bd">
								<div className="clearfix">
									<div className="aui-product-shop-img">
										<img src="../assets/img/user/user10.png" alt="" />
									</div>
									<div className="aui-product-shop-text">
										<h3>Versace官方旗舰店</h3>
										<p>精选商家  服务保障</p>
										<p>在售商品2390件</p>
									</div>
								</div>
							</div>
							<div className="aui-address-cell-ft">
								<span>进店看看</span>
							</div>
						</div>
					</div>
					<div className="aui-dri"></div>
					<div className="aui-slide-box">
						<div className="aui-slide-list">
							<ul className="aui-slide-item-list">
								<li className="aui-slide-item-item">
									<div className="v-link">
										<img className="v-img" src="../assets/img/pd/sf-1.jpg" />
										<p className="aui-slide-item-title aui-slide-item-f-els">NIKE耐克男女鞋 ROSHE ONE 男女情侣小黑鞋奥利奥轻便休闲鞋</p>
										<p className="aui-slide-item-info">
											<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
										</p>
									</div>
								</li>
								<li className="aui-slide-item-item">
									<div className="v-link">
										<img className="v-img" src="../assets/img/pd/sf-2.jpg" />
										<p className="aui-slide-item-title aui-slide-item-f-els">【防晒神器】let's diet 防晒帽 SPF50PA++ </p>
										<p className="aui-slide-item-info">
											<span className="aui-slide-item-price">¥99</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥198</span>
										</p>
									</div>
								</li>
								<li className="aui-slide-item-item">
									<div className="v-link">
										<img className="v-img" src="../assets/img/pd/sf-3.jpg" />
										<p className="aui-slide-item-title aui-slide-item-f-els">秋冬新款 女士优雅宽松麂皮绒彷皮毛一体中长款仿皮</p>
										<p className="aui-slide-item-info">
											<span className="aui-slide-item-price">¥399</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥999</span>
										</p>
									</div>
								</li>
								<li className="aui-slide-item-item">
									<div className="v-link">
										<img className="v-img" src="../assets/img/pd/sf-4.jpg" />
										<p className="aui-slide-item-title aui-slide-item-f-els">adidas 阿迪达斯 运动型格 女子短袖T恤 CF3657  CF3658</p>
										<p className="aui-slide-item-info">
											<span className="aui-slide-item-price">¥189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥299</span>
										</p>
									</div>
								</li>
								<li className="aui-slide-item-item">
									<div className="v-link">
										<img className="v-img" src="../assets/img/pd/sf-5.jpg" />
										<p className="aui-slide-item-title aui-slide-item-f-els">独立日限定 pop-up 短袖T恤 T-2</p>
										<p className="aui-slide-item-info">
											<span className="aui-slide-item-price">¥1349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
										</p>
									</div>
								</li>
								<li className="aui-slide-item-item">
									<div className="v-link">
										<img className="v-img" src="../assets/img/pd/sf-6.jpg" />
										<p className="aui-slide-item-title aui-slide-item-f-els">秋冬纯棉床单套件</p>
										<p className="aui-slide-item-info">
											<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
										</p>
									</div>
								</li>
								<li className="aui-slide-item-item">
									<div className="v-link">
										<img className="v-img" src="../assets/img/pd/sf-7.jpg" />
										<p className="aui-slide-item-title aui-slide-item-f-els">法国品牌尚玛可 W-梵诺克·二合一七孔纤维冬被</p>
										<p className="aui-slide-item-info">
											<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
										</p>
									</div>
								</li>
							</ul>
						</div>

					</div>
					<div className="aui-dri"></div>
					<div className="aui-product-pages">
						<div className="aui-product-pages-title">
							<h2>图文详情</h2>
						</div>
						<div className="aui-product-pages-img">
							<img src="../assets/img/pd/pd-cp0.jpg" alt="" />
							<img src="../assets/img/pd/pd-cp2.jpg" alt="" />
							<img src="../assets/img/pd/pd-cp3.jpg" alt="" />
							<img src="../assets/img/pd/pd-cp4.jpg" alt="" />
						</div>
					</div>
				</div>
				<footer className="aui-footer-product">
					<div className="aui-footer-product-fixed">
						<div className="aui-footer-product-concern-cart">
							<div>
								<span className="aui-f-p-icon"><img src="../assets/img/icon/icon-kf.png" alt="" /></span>
								<span className="aui-f-p-focus-info">客服</span>
							</div>
							<div>
								<span className="aui-f-p-icon"><img src="../assets/img/icon/icon-sc.png" alt="" /></span>
								<span className="aui-f-p-focus-info">收藏</span>
							</div>
							<div>
								<span className="aui-f-p-icon"><img src="../assets/img/icon/icon-dp.png" alt="" /></span>
								<span className="aui-f-p-focus-info">店铺</span>
							</div>
						</div>
						<div className="aui-footer-product-action-list">
							<NavLink to='/shopcar' className="yellow-color" onClick={()=>{this.addGoods()}}>加入购物车</NavLink>
							<NavLink to='/ordersub' className="red-color">立即购买</NavLink>
						</div>
					</div>
				</footer>
			</main>
		);
		
	}
	addGoods(){
		
	}
}

const initMapStateToProps=state=>{
	return ({
	detailData:state.detailData,
	bLoading:state.bLoading
  })}
  
const initMapDispatchToProps = dispatch=>({
    detailDataGet:(id)=>dispatch(getData({
		url:'/api/index',
		id:id,
		type:types.INFO_DETAIL,
	  })),
  })

export default connect(initMapStateToProps,initMapDispatchToProps)(withRouter(Detail));