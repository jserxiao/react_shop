import React from "react";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import * as types from '../store/varias'
import { getLogInfo } from "../store/action";
import Notify from "../components/notify";

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        bcheckbox:true
    }
    render() {
        
        return (
            <main>

                <div className="aui-login-ba" style={{ position: "relative", overflow: "hidden" }}>

                    <span className="aui-login-logo">用 户 登 录</span>

                    <canvas id="waves" className="waves" style={{ position: "absolute", bottom: "-60px", left: "-210px" }}></canvas>

                </div>

                <div className="aui-logon-con">
                    <div className="b-line">
                        <input type="text" placeholder="手机号/邮箱/用户名" name='username' value={this.state.username} onChange={(ev) => { this.valueGet(ev) }} />
                    </div>
                    <div className="b-line">
                        <input type="password" placeholder="密码" name='password' value={this.state.password} onChange={(ev) => { this.valueGet(ev) }} />
                    </div>
                    <div style={{height:'1.5rem',fontSize:'12px',margin:'.8rem 0 -.8rem',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                        <input type="checkbox" style={{width:'.8rem',height:'.8rem',border:'2px solid #999',margin:'0 .5rem',borderRadius:'50%'}} onClick={(ev)=>{this.state.bcheckbox?ev.target.style.background='skyBlue':ev.target.style.background='#fff';this.state.bcheckbox=!this.state.bcheckbox;}}/>
                        <span style={{lineHeight: '1.5rem'}}>自动登录</span>
                    </div>
                    <div className="aui-login-l">
                        <div onClick={() => { this.goLog() }}>登录</div>
                    </div>
                    <div className="aui-login-wen">
                        <div className="aui-login-wen-a"><NavLink to='/reg'>注册</NavLink> </div>
                        <div><a href="#">忘记密码?</a> </div>
                    </div>
                    <div className="aui-login-san">
                        <div className="aui-login-qq"><a href="#"></a></div>
                        <div className="aui-login-wb"><a href="#"></a></div>
                        <div className="aui-login-wx"><a href="#"></a></div>
                    </div>
                </div>
            </main>
        );

    }
    valueGet(ev) {
        this.setState({ [ev.target.name]: ev.target.value })
    }
    goLog() {
        if (!this.state.username || !this.state.password) {
            Notify('用户名和密码为必填项');
        }
        else {
            this.props.getLog({ username: this.state.username, password: this.state.password },!this.state.bcheckbox).then((res) => {
                Notify(res.msg);
                if (res.err == 0) {
                    !this.state.bcheckbox?window.localStorage.setItem('userdata',JSON.stringify(res)):null;
                    this.props.history.push('/user');
                }
                else{
                    this.setState({username:'',password:''})
                }
            })
        }
    }
}

const initMapStateToProps = (state, props) => ({
    logInfo: state.logInfo,
})

const initMapDispatchToProps = (dispatch, props) => ({
    getLog: (data,save) =>{
        console.log('issave',save)
        return dispatch(getLogInfo({
        url: '/api/login',
        type: types.INFO_LOG,
        data,
        save:save?save:false
    }))},
})

export default connect(initMapStateToProps, initMapDispatchToProps)(Login);