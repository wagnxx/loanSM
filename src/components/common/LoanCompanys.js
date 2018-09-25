/**
 * Created by 19848 on 2018/9/23.
 */
import React from 'react';
import LoanCompanysItem from "./LoanCompanysItem"

const contData = [
    {tagImg: "images/xinpin.png"},
    {tagImg: "images/dae.png"},
    {tagImg: "images/remen.png"},
    {tagImg: "images/remen.png"},
    {tagImg: "images/dixi.png"},
    {tagImg: "images/yitongguo.png"},
];

export default class LoanCompanys extends React.Component {
    render() {
        return (
            <div className="loan-companys">
                {
                    contData.map((item, ind) => {
                        return <LoanCompanysItem cont={item} key={`loanCompany${ind}-item`}/>
                    })
                }
            </div>
        );
    }
}

 