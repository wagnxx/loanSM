/**
 * Created by 19848 on 2018/9/25.
 */
import React from 'react';
import {mySession} from "../../utils/saveStorage"
import {connect}  from "react-redux"
import {bindActionCreators}  from "redux"
import {logout} from "../../action"
import {jumpto} from "../../utils/history"

class Setting extends React.Component {
    logoutHandle=()=>{
        mySession.clearData();
        this.props.logout();
        jumpto("/my")
    }
    render() {
        return (
            <div className={"my-main"}>
                <div className="my-main-bot">
                    {
                        ["关于我们","客服热线 ","商务合作"].map((item,ind)=>{
                          return  <div className="my-list cl" key={`${item}-${ind}`}>
                                <span className="list-name">{item}</span>
                                <span className="list-go-sun"><img src="images/go-sq.png" alt="wodeimg"/></span>
                            </div>
                        })
                    }
                    <div className="my-list cl" >
                        <span className="list-name">退出登陆</span>
                        <span className="list-go-sun" onClick={this.logoutHandle}><img src="images/go-sq.png" alt="wodeimg"/></span>
                    </div>

                </div>
            </div>
    );
    }
    }

 const mapDispatchToProps=dispatch=>({
     logout:bindActionCreators(logout,dispatch)
 })
export  default connect(null,mapDispatchToProps)(Setting);