import React from "react";
import * as types from '../store/varias'

export const getData = ({url,type,id}) => {

    return (dispatch,getState)=>{
      return React.axios({
        url: id ? url + '/' + id : url,
        // url:url,
        params:{
            _limit:100
        }
      }).then(
        res => {
          dispatch({type: type, payload: res.data.data});
        }
      )
    }
  };

  export const getRegInfo = ({url,type,data}) => {
    return (dispatch,getState)=>{
      return React.axios({
        url,
        data,
        method:'post'
      }).then(
        res => {
          dispatch({type: type, payload: res.data});
          return res.data
        }
      )
    }
  };

  export const getLogInfo = ({url,type,data,save}) => {
    return (dispatch,getState)=>{
      console.log('save',save)
      return React.axios({
        url,
        data:{...data,save},
        method:'post'
      }).then(
        res => {
          dispatch({type: type, payload: res.data});
          return res.data
        }
      )
    }
  };

  export const logOut = ({url,type}) => {
    return (dispatch,getState)=>{
      return React.axios({
        url,
        method:'delete'
      }).then(
        res => {
          dispatch({type: type, payload: res.data});
          return res.data
        }
      )
    }
  };

  export const setCarInfo = ({url,type,goodsRecord,userId}) => {
    console.log('action',userId)
    return (dispatch,getState)=>{
      return React.axios({
        url,
        data:{userId,
          goodsRecord},
        method:'post'
      }).then(
        res => {
          dispatch({type: type, payload: res.data});
          return res.data
        }
      )
    }
  };

  export const getCarInfo = ({url,type,userId}) => {
    return (dispatch,getState)=>{
      return React.axios({
        url,
        data:{userId},
        method:'post'
      }).then(
        res => {
          dispatch({type: type, payload: res.data});
          return res.data
        }
      )
    }
  };

