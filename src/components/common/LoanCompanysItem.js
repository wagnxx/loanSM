/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import {jumpto} from '../../utils/history'

export default class LoanCompanysItem extends React.Component {
    goSpeedPage=()=>{
        jumpto("/loan/speedloan");
    }
    render() {
        return (
            <div className="conpanys-listGroup"  onClick={this.goSpeedPage}>
                <div className="conpanys-top cl">
                    <span className="conpanyLogo"><img src="images/tsd.jpg" alt={"locimg"}/></span>
                    天神贷-极速放款
                    <span className="characteristic fr"><img src={this.props.cont.tagImg} alt={"locimg"}/></span>
                </div>
                <div className="conpanys-bot cl">
                    <div className="conpanys-bot-l fl">
                        <span className="mon">1000-5000</span>
                        <p>可贷金额（元）</p>
                    </div>
                    <div className="conpanys-bot-m fl">
                        2分钟放贷<br/>
                        参考日利率0.03%<br/>
                        64.4万人已申请
                    </div>
                    <div className="conpanys-bot-r fr">
                        <a>立即贷款<img src="images/arr-r.png" alt={"locimg"}/></a>
                    </div>
                </div>
            </div>
        );
    }
}

 