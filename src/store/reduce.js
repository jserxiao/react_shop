import * as types from './varias';

export default (state,action)=>{
    let {type,payload}=action;
    switch(type){
        case types.VIEW_HEADER:
            return {...state,bHead:payload};
        case types.VIEW_FOOTER:
            return {...state,bFoot:payload};
        case types.INFO_HEAD:
            return {...state,infoHead:payload};
        case types.INFO_GOODS:
            return {...state,goodsList:payload};
        case types.INFO_DETAIL:
            return {...state,detailData:payload};
        case types.VIEW_LOADING:
            return {...state,bLoading:payload};
        case types.ICON_USER:
            return {...state,userIcon:payload};
        case types.INFO_REG:
            return {...state,regInfo:payload};
        case types.INFO_LOG:
            return {...state,logInfo:payload};
        case types.INFO_DELETE:
            return {...state,deleteInfo:payload};
        case types.INFO_SHOPCAR:
            console.log('shopcarInfo',payload)
            return {...state,shopcarInfo:payload};
        default:
            return state;
    }
}