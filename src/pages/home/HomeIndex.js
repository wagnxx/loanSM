/**
 * Created by 19848 on 2018/9/23.
 */
import React from 'react';

import LoanEntry from "../../components/loan/LoanEntry"
import LoanCompanys from "../../components/common/LoanCompanys"

export default class HomeIndex extends React.Component {
    render() {
        return (
            <div>
                <div className="loan-barnner">
                    <div className="swiper-wrapper swiper-containerA" >
                        <div className="swiper-slide  " >
                            <img src="images/sy-bar1.jpg" alt={"homeimg"}/>
                        </div>
                    </div>
                </div>
                <div style={{padding:"0 2%"}}>

                    <LoanEntry/>
                    <LoanCompanys/>

                </div>
            </div>
        );
    }
}

 