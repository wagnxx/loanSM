/**
 * Created by 19848 on 2018/9/23.
 */
import React from 'react';
import LoanEntryItem from "./LoanEntryItem"

const contData = [
    {imgSrc: "images/entry1.jpg", tit: "极速贷款", minTit: "最新产品推荐"},
    {imgSrc: "images/entry2.jpg", tit: "贷款推荐", minTit: "精准推荐贷款"},
    {imgSrc: "images/entry3.jpg", tit: "新品专区", minTit: "最新产品推荐"},
    {imgSrc: "images/entry4.jpg", tit: "芝麻分贷款", minTit: "芝麻分轻松贷"},

];

export default class loanEntry extends React.Component {

    render() {
        return (
            // /*<!-- 贷款入口 开始 -->*/
            <div className="loan-entry">
                <div className="loan-entry-lists">
                    {
                        contData.map((item, ind) => {
                            return <LoanEntryItem cont={item} key={`loanentry-${ind}-item`} altkey={`loanentry-${ind}-item`}/>
                        })
                    }
                </div>
            </div>
            // /*<!-- 贷款入口 结束 -->*/

        );
    }
}

 