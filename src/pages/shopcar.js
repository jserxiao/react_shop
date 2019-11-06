import React from "react";
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux"
import * as types from '../store/varias'
import {getCarInfo,getData,setCarInfo} from "../store/action";
import Notify from "../components/notify";
import Loading from '../components/loading'

class Shopcar extends React.Component {
	state = {
		priceAll:0
	}
	constructor(props) {
		super();
		props.carReg(props.logInfo.data._id)
		props.goodsListGet()
		// .then((res)=>{
		// 	res.data.goodsRecord.goodsInfo.map((item, index) => {
		// 		this['a' + (index + 1)] = React.createRef();
		// 	});
		// });

		// [1, 2].map((item, index) => {
		// 	this['a' + (index + 1)] = React.createRef()
		// });
		for(let i=0;i<100;i++){
			this['a' + (i + 1)] = React.createRef()
		}
		// 7
		this['p'] = React.createRef();
		
		console.log(this)
	}
	static getDerivedStateFromProps(nextProps, nextState) {
		// nextProps.priceCount();
		// console.log(nextState)
		
		return {};
	}
	componentDidMount() {
		// console.log(11,this.props.shopcarInfo);
		// [1, 2].map((item, index) => {
		// 	this['a' + (index+1)].current.children[0].children[0].checked=true;
		// })
		// this.p.current.checked=true;
		// this.priceCount();
	}
	
	render() {
		let{shopcarInfo,list}=this.props;
		return (
			<main>
				<section className="aui-car-content">
					<div className="aui-car-box">
						<div className="aui-car-box-name">
							{/* <input type="checkbox" className="check goods-check shopCheck"/> */}
							<h3>
								<div>React_Shop</div>
							</h3>
							<div className="aui-car-coupons">
								<div onClick={() => { this.del() ;this.priceCount()}}>删除选中</div>
							</div>
						</div>
						<div className="aui-car-box-list">
							<ul>
								{this.props.bLoading&&<Loading/>}
								{this.props.shopcarInfo&&this.props.shopcarInfo.data&&this.props.shopcarInfo.data.goodsRecord.goodsInfo.map((item, index) => {
								   for(let i=0;i<list.length;i++){
									   if(item.ids==list[i]._id){
									return (<li key={index} ref={this['a' + (index + 1)]} itemID={item.ids}>
									<div className="aui-car-box-list-item" >
										<input type="checkbox" className="check goods-check goodsCheck" onClick={() => {console.log('jsx',this);this.priceCount();}}/>
										<div className="aui-car-box-list-img">
											<div>
												<img src={list[i].goodsurl} alt="" />
											</div>
										</div>
										<div className="aui-car-box-list-text">
											<h4>
												<NavLink to="/detail/2">{list[i].goodsword}</NavLink>
											</h4>
											<div className="aui-car-box-list-text-price" style={{ marginTop: '1.5rem' }}>
												<div className="aui-car-box-list-text-pri">
													￥<b className="aui-price">{list[i].curprice}</b>
												</div>
												<div className="aui-car-box-list-text-arithmetic" onClick={() => {this.priceCount()}}>
													<div className="minus" onClick={(ev) => { this.dec(ev,item.ids) }}>-</div>
													<span className="num">{item.n}</span>
													<div className="plus" onClick={(ev) => { this.inc(ev,item.ids) }}>+</div>
												</div>
											</div>
										</div>

									</div>
								</li>)}}})
								
								}
							</ul>
						</div>
					</div>
				</section>
				<div className="aui-payment-bar">
					<div className="all-checkbox" onClick={(ev) => { this.selectAll(ev);this.priceCount() }}><input ref={this.p} type="checkbox" className="check goods-check" id="AllCheck" />全选</div>
					<div className="shop-total">
						<strong>合计：<i className="total" id="AllTotal" >￥{this.state.priceAll.toFixed(2)}</i></strong>
					</div>
					<NavLink to='/ordersub' className="settlement">结算</NavLink>
				</div>
			</main>
		);
	}
	inc(ev,changegoodsid) {
		console.log(changegoodsid)
		// console.log(ev.target.parentNode.children[1].innerText);
		ev.target.parentNode.children[1].innerText = parseInt(ev.target.parentNode.children[1].innerText) + 1;
		let arr=this.props.shopcarInfo.data.goodsRecord.goodsInfo;
		arr.map((item,index)=>{
			if(item.ids==changegoodsid){
				item.n=parseInt(ev.target.parentNode.children[1].innerText);
				this.props.carSet({userId:this.props.logInfo.data._id,goodsRecord:{num:this.props.shopcarInfo.data.goodsRecord.num,goodsInfo:arr}})
			}
		})
		

	}
	dec(ev,changegoodsid) {
		let arr=this.props.shopcarInfo.data.goodsRecord.goodsInfo;
		if (parseInt(ev.target.parentNode.children[1].innerText) > 1) {
			ev.target.parentNode.children[1].innerText = parseInt(ev.target.parentNode.children[1].innerText) - 1;
			
			arr.map((item,index)=>{
			if(item.ids==changegoodsid){
				item.n=parseInt(ev.target.parentNode.children[1].innerText);
				this.props.carSet({userId:this.props.logInfo.data._id,goodsRecord:{num:this.props.shopcarInfo.data.goodsRecord.num,goodsInfo:arr}})
			}
		})
		}
		else {
			// console.log(ev.target.parentNode.parentNode.parentNode.parentNode.parentNode)
			// ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
			arr.map((item,index)=>{
				if(item.ids==changegoodsid){
					arr.splice(index,1);
					this.props.carSet({userId:this.props.logInfo.data._id,goodsRecord:{num:this.props.shopcarInfo.data.goodsRecord.num,goodsInfo:arr}})
				}
			})
		}
	}
	del() {
		this.props.shopcarInfo.data.goodsRecord.goodsInfo.map((item, index) => {
			if (this['a' + (index + 1)].current.children[0].children[0].checked) {
				
				// this['a' + (index + 1)].current.children[0].children[0].checked=false;
				// this['a' + (index + 1)].current.remove()

				console.log(this['a' + (index + 1)].current.getAttribute('itemid'))
				let arr=this.props.shopcarInfo.data.goodsRecord.goodsInfo;
				arr.map((item,index)=>{
					if(item.ids==this['a' + (index + 1)].current.getAttribute('itemid')){
						arr.splice(index,1);
						this.props.carSet({userId:this.props.logInfo.data._id,goodsRecord:{num:this.props.shopcarInfo.data.goodsRecord.num,goodsInfo:arr}})
					}
				})
			}
		});
	}
	selectAll(ev) {
		if (ev.target.checked) {
			this.props.shopcarInfo.data.goodsRecord.goodsInfo.map((item, index) => {
				this['a' + (index + 1)].current.children[0].children[0].checked = true;
			});
		}
		else {
			this.props.shopcarInfo.data.goodsRecord.goodsInfo.map((item, index) => {
				this['a' + (index + 1)].current.children[0].children[0].checked = false;
			});
		}
	}
	priceCount(){
		
		let price=0;
		this.props.shopcarInfo.data.goodsRecord.goodsInfo.map((item, index) => {
			if (this['a' + (index + 1)].current.children[0].children[0].checked) {
				// console.log(this['a' + (index + 1)].current.children[0].children[2].children[1].children[1].children[1].innerText)
				price+=parseFloat(this['a' + (index + 1)].current.children[0].children[2].children[1].children[0].children[0].innerText)*parseInt(this['a' + (index + 1)].current.children[0].children[2].children[1].children[1].children[1].innerText);
			}
			
		});
		// this.p.current.checked?this.setState({priceAll:price}):this.setState({priceAll:0});
		this.setState({priceAll:price});
	}
}

const initMapStateToProps=state=>({
	list:state.goodsList,
	bLoading:state.bLoading,
	logInfo:state.logInfo,
	shopcarInfo:state.shopcarInfo
  })

const initMapDispatchToProps = dispatch=>({
    
      carReg:(userId)=>dispatch(getCarInfo({
		url:'/api/shopInfoGet',
        type:types.INFO_SHOPCAR,
        userId
	  })),
	  goodsListGet:()=>dispatch(getData({
		url:'/api/index',
		type:types.INFO_GOODS,
	  })),
	  carSet:({userId,goodsRecord})=>dispatch(setCarInfo({
		url:'/api/shopInfo',
        type:types.INFO_SHOPCAR,
        goodsRecord,
        userId
	  }))
  })

export default connect(initMapStateToProps,initMapDispatchToProps)(Shopcar);