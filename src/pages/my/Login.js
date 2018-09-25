/**
 * Created by 19848 on 2018/9/23.
 */
import React from 'react';
import {connect}  from "react-redux"
import {bindActionCreators}  from "redux"
import {login,saveTel} from "../../action"
import {jumpto} from "../../utils/history"

class Login extends React.Component {
    componentDidMount(){
        this.tel.focus()
    }
    sub=()=>{
        let myreg=/^[1][34578][0-9]{9}$/;

        if(this.tel.value==="110"||myreg.test(this.tel.value)){

            this.props.login(this.tel.value)
            this.props.saveTelNum(this.tel.value)
            jumpto("/my")
        }else{
            this.tel.focus()
            alert("您手机号输入有误，请重新输入")
        }

    }
    render() {
        return (
            <div className="my-login"  >
                {/*<!-- 登录窗口开始 -->*/}
                <div className="login-mask">
                    <div className="form">
                        <p className="form-tit">登录/login</p>
                        <form action="" onSubmit={this.sub}>
                            <div className="inputGroup">
                            <span className="input-logo">
                                <img src="images/login-ph.png" alt={"login-img"}/>
                            </span>
                                <div className="input-box">
                                    <input type="text" placeholder="请输入手机号码" ref={tel=>this.tel=tel}/>
                                </div>
                            </div>
                            <div className="inputGroup">
                            <span className="input-logo">
                                <img src="images/login-yzm.png" alt={"login-img"}/>
                            </span>
                                <div className="input-box">
                                    <input type="text" className="ver-input" placeholder="验证码"/>
                                    <span className="ver-btn">获取验证码</span>
                                </div>
                            </div>
                            {/*<!-- 登录按钮 开始-->*/}
                            <div className="inputGroup">
                                <input type="submit" value="登录"/>
                            </div>
                            {/*<!-- 登录按钮 结束 -->*/}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>({
    login:bindActionCreators(login,dispatch),
    saveTelNum:bindActionCreators(saveTel,dispatch)
})


export default connect(null,mapDispatchToProps)(Login)