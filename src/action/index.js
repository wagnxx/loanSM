import * as types from "./type";


export const login=(username)=>({type:types.LOGIN_IN, USER_NAME:username});

export const logout=()=>({type:types.LOGIN_OUT});

export const  saveTel=(tel)=>({type:types.TEL_NUM,tel});

export const saveCity=(cityChecked)=>({type:types.CITY_CHECKED,cityChecked});

export const saveName=fullName=>({type:types.FULL_NAME,fullName});
export const saveID= iDnum=>({type:types.IDNUM,iDnum});