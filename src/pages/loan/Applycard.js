/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';

import BankList from "../../components/loan/BankList"
import CardRecommend from "../../components/loan/CardRecommend"

export default class Applycard extends React.Component {
    render() {
        return (
            <div className="main-box">
                <BankList/>
                <CardRecommend/>
            </div>
        );
    }
}

 