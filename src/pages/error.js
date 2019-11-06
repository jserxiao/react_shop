import { Result, Button } from 'antd';
import React from "react";
import {connect} from "react-redux"
import * as types from '../store/varias'
import {NavLink} from 'react-router-dom'

class Error extends React.Component{
    componentDidMount(){
        this.props.showFoot()
        this.props.showHead()
	}
    render() {
        return (<div style={{position:'absolute',top:0,bottom:0,left:0,right:0,margin:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
  <Result
    status="404"
    title="404"
    subTitle="找不到对应的页面"
    extra={<Button type="primary"><NavLink to='/home'>回首页</NavLink></Button>}
  />
  </div>
);}
}

const initMapStateToProps=state=>({
	
  })
  
  const initMapDispatchToProps = dispatch=>({
    showFoot:()=>dispatch({type:types.VIEW_FOOTER,payload:false}),
    showHead:()=>dispatch({type:types.VIEW_HEADER,payload:false})
  })

export default connect(initMapStateToProps,initMapDispatchToProps)(Error);