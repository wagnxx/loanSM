/**
 * Created by 19848 on 2018/9/23.
 */
import React from 'react';
import MyListItem from "../../components/my/MyListItem"
import {connect} from "react-redux"
import {jumpto} from "../../utils/history"

const contData = [
    {imgSrc: "images/wd-sq.png", froms: "apply", dis: "我的申请"},
    {imgSrc: "images/wd-lljl.png", froms: "footPrint", dis: "浏览记录"},
    {imgSrc: "images/wd-bzzx.png", froms: "setting", dis: "帮助中心"},
    {imgSrc: "images/wd-sz.png", froms: "setting", dis: "设置"},
];

class My extends React.Component {

    loginHandle = () => {

        if (!this.props.info.LOGIN) {

            jumpto("/my/login")
        }else {
            jumpto("/my/profile")
        }
    }

    render() {
        return (
            <div className="my-main">
                <div className="my-main-top cl">
                    <span className="my-logo"><img src={"images/wd-logo.png"} alt={"wodimg"}/></span>
                    <div className="my-msg">

                        <p>{this.props.info.USER_NAME}<br/></p>
                    </div>
                    <span className="go-login" onClick={this.loginHandle}><img src={"images/go-logoin.png"}
                                                                               alt="wodeimg"/></span>
                </div>
                {
                    contData.map((item, ind) => {
                        return <MyListItem cont={item} key={`mylistItem${ind}`} login={this.props.info.LOGIN}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    info: state.loginReducer
})

export default connect(mapStateToProps, null)(My)