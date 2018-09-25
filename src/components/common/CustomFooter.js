import React from "react"
import {Link} from "react-router-dom";


export default class CustomFooter extends React.Component {
    render() {
        return (
            <footer>
                <div className="foot-item">
                    <Link to={"/home"}>
                        <img src="images/sy.png" alt={"footer-img"}/>
                    </Link>
                    <p>首页</p>
                </div>
                <div className="foot-item">
                    <Link to={"/loan"}>
                        <img src="images/dk-act.png" alt={"footer-img"}/>
                    </Link>
                    <p className="act_blue">贷款</p>
                </div>
                <div className="foot-item">
                    <Link to={"/my"}>
                        <img src="images/wd.png" alt={"footer-img"}/>
                    </Link>
                    <p>我的</p>
                </div>
            </footer>
        );
    }
}