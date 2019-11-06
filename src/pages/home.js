import React from "react";
import {NavLink} from 'react-router-dom'
import { Carousel } from 'antd';
// import 'antd/dist/antd.css'

import {connect} from "react-redux"
import * as types from '../store/varias'
import {getData} from "../store/action";
import Loading from '../components/loading'

class Home extends React.Component {
	constructor() {
		super();
	}
	componentDidMount(){
		this.props.goodsListGet()
	}
	render() {
		let {list,bLoading,logInfo} = this.props;
		console.log('bLoading',bLoading)
		return (
			<main>
				<header className="aui-header-default aui-header-fixed aui-header-bg">
					<a href="#" className="aui-header-item">
						<i className="aui-icon aui-icon-code"></i>
					</a>
					<div className="aui-header-center aui-header-center-clear">
						<div className="aui-header-search-box">
							<i className="aui-icon aui-icon-small-search"></i>
							<input id="" type="text" placeholder="秋季潮流时尚" className="aui-header-search"/>
						</div>
					</div>
					{/* <a href="#" className="aui-header-item-icon">
						<i className="aui-icon aui-icon-packet"></i>
						<i className="aui-icon aui-icon-member"></i>
					</a> */}
					<NavLink to={logInfo.err==0?'/user':'/login'} style={{minWidth: "9%",color:'#fff',textAlign:'center'}} className="aui-header-item-icon">
						{logInfo.err==0?logInfo.data.nickname:'登录'}			
					</NavLink>
				</header>
				<div className="aui-content-box">
					<div className="aui-banner-content aui-fixed-top" data-aui-slider>
						<Carousel autoplay className="ant-carousel">
							<div className="aui-banner-wrapper-item">
								<a href="#">
									<img src="./assets/img/banner/banner.jpg" />
								</a>
							</div>
							<div className="aui-banner-wrapper-item">
								<a href="#">
									<img src="./assets/img/banner/banner1.jpg" />
								</a>
							</div>
							<div className="aui-banner-wrapper-item">
								<a href="#">
									<img src="./assets/img/banner/banner2.jpg" />
								</a>
							</div>
							<div className="aui-banner-wrapper-item">
								<a href="#">
									<img src="./assets/img/banner/banner3.jpg" />
								</a>
							</div>
							</Carousel>
						<div className="aui-banner-pagination"></div>
					</div>
					<section className="aui-grid-content">
						<div className="aui-grid-row">
							<a href="#" className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-sign"></i>
								<p className="aui-grid-row-label">每日签到</p>
							</a>
							<a href="#" className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-time"></i>
								<p className="aui-grid-row-label">限时抢购</p>
							</a>
							<a href="#" className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-vip"></i>
								<p className="aui-grid-row-label">会员专享</p>
							</a>
							<a href="#" className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-group"></i>
								<p className="aui-grid-row-label">好货拼团</p>
							</a>
							<a href="#" className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-share"></i>
								<p className="aui-grid-row-label">分享领券</p>
							</a>
						</div>
					</section>
					<div className="aui-avd-content clearfix">
						<a href="#">
							<img src="./assets/img/pd/cf-1.jpg" alt="" />
						</a>
						<a href="#">
							<img src="./assets/img/pd/cf-3.jpg" alt="" />
						</a>


					</div>
					<div className="aui-recommend">
						<img src="./assets/img/bg/icon-tj1.jpg" alt="" />
					</div>

					<section className="aui-list-product">
					{bLoading&&<Loading/>}
					{list&&	<div className="aui-list-product-box">
							{ list.map((item)=>{
								return <NavLink to={'/detail/'+item.id} className="aui-list-product-item" key={item._id}>
								<div className="aui-list-product-item-img">
									<img src={item.goodsurl} alt="" />
								</div>
								<div className="aui-list-product-item-text">
									<h3>{item.goodsword}</h3>
									<div className="aui-list-product-mes-box">
										<div>
											<span className="aui-list-product-item-price">
												<em>¥</em>
												{item.curprice}
							</span>
											<span className="aui-list-product-item-del-price">
												¥{item.preprice}
							</span>
										</div>
										<div className="aui-comment">{item.commentnum}评论</div>
									</div>
								</div>
							</NavLink>
							})
							
							}

						</div>
						}
					</section>
				</div>
			</main>
		)
	}
}

const initMapStateToProps=state=>({
	list:state.goodsList,
	bLoading:state.bLoading,
	logInfo:state.logInfo
  })
  
  const initMapDispatchToProps = dispatch=>({
    goodsListGet:()=>dispatch(getData({
		url:'/api/index',
		type:types.INFO_GOODS,
	  })),
  })

export default connect(initMapStateToProps,initMapDispatchToProps)(Home);