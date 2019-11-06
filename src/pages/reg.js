import React from "react";
import {NavLink} from 'react-router-dom'
import Avatar from '../components/upload'
import {connect} from "react-redux"
import * as types from '../store/varias'
import {getRegInfo,setCarInfo} from "../store/action";
import Notify from "../components/notify";

class Reg extends React.Component {
    state={
        username:'',
        password:'',
        nickname:'',
    }
render(){
    // let {regInfo}=this.props;
    // regInfo.msg?alert(regInfo.msg):null;
    return (
        <main>
                
                <div className="aui-login-ba" style={{ position: "relative", overflow: "hidden" }}>

                    <span className="aui-login-logo">用 户 注 册</span>

                    <canvas id="waves" className="waves" style={{ position: "absolute", bottom: "-60px", left: "-210px" }}></canvas>

                </div>

                <div className="aui-logon-con">
                    <div className="b-line">
                        <input type="text" placeholder="手机号/邮箱/用户名" name='username' onChange={(ev)=>{this.valueGet(ev)}}/>
                    </div>
                    <div className="b-line">
                        <input type="password" placeholder="密码" name='password' onChange={(ev)=>{this.valueGet(ev)}}/>
                    </div>
                    <div className="b-line" style={{marginBottom:'0.8rem'}}>
                        <input type="text" placeholder="昵称" name='nickname' onChange={(ev)=>{this.valueGet(ev)}}/>
                    </div>
                    <div style={{marginBottom:'-1.8rem'}}>
                    <Avatar/>
                    </div>
                    <div className="aui-login-l">
                        <div onClick={()=>{this.goReg()}}>注册</div>
                    </div>
                    <div className="aui-login-wen">
                        <div className="aui-login-wen-a"><NavLink to='/login'>去登录</NavLink> </div>
                    </div>
                </div>
            </main>
    );
}
valueGet(ev){
    // console.log(ev)
    this.setState({[ev.target.name]:ev.target.value})
}

goReg(){
    if (!this.state.username || !this.state.password) {
        Notify('请填入用户名或者密码');
    }
    else{
        this.props.getReg({username:this.state.username,password:this.state.password,nickname:this.state.nickname,userIcon:this.props.userIcon}).then((res) => {
            console.log(res.data._id)
            this.props.carReg({userId:res.data._id,goodsRecord:{num:0,goodsInfo:[{ids:'5dbbf82962d29086e6cc40af',n:2},{ids:'5dbbf82962d29086e6cc40b0',n:3}]}}).then((res2)=>{
                if(res2.err==0){
                    Notify(res.msg);
                    this.props.history.push('/login');
                }
                else{
                    Notify('注册失败');
                }
            })
            
        })
    }
}

}

const initMapStateToProps=state=>({
    regInfo:state.regInfo,
    userIcon:state.userIcon
  })
  
  const initMapDispatchToProps = dispatch=>({
    getReg:(data)=>dispatch(getRegInfo({
		url:'/api/reg',
        type:types.INFO_REG,
        data
      })),
      carReg:({userId,goodsRecord})=>dispatch(setCarInfo({
		url:'/api/shopInfo',
        type:types.INFO_SHOPCAR,
        goodsRecord,
        userId
	  }))
  })

export default connect(initMapStateToProps,initMapDispatchToProps)(Reg);