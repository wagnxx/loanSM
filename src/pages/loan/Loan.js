/**
 * Created by 19848 on 2018/9/23.
 */
import React from 'react';

import LoanCompanys from "../../components/common/LoanCompanys"

export default class Loan extends React.Component {
    render() {
        return (
            <div>
                <div className="loan-mon">
                    <div className="loan-mon-item loan-mon-item-l">
                        <img src="images/logo-rmb.png" className="logo-left" alt={"loan-monimg"}/>
                            <span className="loan-mon-tit">金额不限</span>
                            <img src="images/logo-down.png" className="logo-right" alt={"loan-monimg"}/>
                    </div>
                    <div className="loan-mon-item loan-mon-item-r">
                        <img src="images/logo-lx.png" className="logo-left" alt={"loan-monimg"}/>
                            <span className="loan-mon-tit">金额不限</span>
                            <img src="images/logo-down.png" className="logo-right" alt={"loan-monimg"}/>
                    </div>
                </div>
                <div className="loan-sort">
                    <ul>
                        <li className="act_red">综合排序</li>
                        <li>通过率高</li>
                        <li>下款最快</li>
                        <li>利率最低</li>
                    </ul>
                </div>
                <div style={{padding:"0 2%"}}>

                <LoanCompanys/>
                </div>

            </div>

        );
    }
}

