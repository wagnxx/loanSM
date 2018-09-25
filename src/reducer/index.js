import {combineReducers} from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import * as types from "../action/type";
import {mySession} from "../utils/saveStorage"

const loginSesion={LOGIN: false, USER_NAME: "未登录"};

if(mySession.getData("profileInfo")!==null){
    loginSesion.LOGIN=true;
    loginSesion.USER_NAME=JSON.parse(mySession.getData("profileInfo")).TEL_STATE;
}

const loginReducer = (state = loginSesion, action) => {
    switch (action.type) {
        case types.LOGIN_IN:
            return {...state, LOGIN: true, USER_NAME: action.USER_NAME};
        case types.LOGIN_OUT:
            return {...state, LOGIN: false, USER_NAME: "未登录"};
        default:
            return state;
    }

};


const profileInitialState={
    TEL_STATE:"100",
    FULL_NAMEA_STATE:"请输入姓名",
    IDNUM_STATE:"请输入身份证号码",
    CITY_STATE:"请选择",
    MARRID_STATE:"请选择",
    EDUCATION_STATE:"请选择",

};
if(mySession.getData("profileInfo")!==null){
    const parseInFoData=JSON.parse(mySession.getData("profileInfo"));
    for(let key in parseInFoData){
        profileInitialState[key]=parseInFoData[key]
    }
}



const profileReducer=(state=profileInitialState,action)=>{
    switch (action.type){
        case types.MARRIED_YES:
            return {...state,MARRID_STATE:"已婚"};
        case types.MARRIED_NO:
            return {...state,MARRID_STATE:"未婚"};
        case types.EDUCATION_GZ:
            return {...state,EDUCATION_STATE:"高中"};
        case types.EDUCATION_DZ:
            return {...state,EDUCATION_STATE:"大专"};
        case types.EDUCATION_BK:
            return {...state,EDUCATION_STATE:"本科"};
        case types.EDUCATION_SS:
            return {...state,EDUCATION_STATE:"硕士"};
        case types.EDUCATION_BS:
            return {...state,EDUCATION_STATE:"博士"};
        case types.TEL_NUM:
            return {...state,TEL_STATE:action.tel};
        case types.CITY_CHECKED:
            return {...state,CITY_STATE:action.cityChecked};
        case types.FULL_NAME:
            return {...state,FULL_NAMEA_STATE:action.fullName};
        case types.IDNUM:
            return {...state,IDNUM_STATE:action.iDnum};
        default :
            return state;
    }
}

export default combineReducers({
    loginReducer,
    profileReducer,
    routing
});