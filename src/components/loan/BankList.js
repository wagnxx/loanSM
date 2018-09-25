/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';

import BankListItem from "./BankListItem"
const contData=[
    {imgSrc:"images/logo-yh-xyyh.png",bankName:"兴业银行",characteristic:"特惠双重礼遇",badge:"images/logo-yh-remen.png"},
    {imgSrc:"images/logo-yh-msyh.png",bankName:"民生银行",characteristic:"特惠双重礼遇",badge:"images/logo-yh-remen.png"},
    {imgSrc:"images/logo-yh-pfyh.png",bankName:"浦发银行",characteristic:"商户心动折扣",badge:"images/logo-yh-tuijian.png"},
    {imgSrc:"images/logo-yh-zxyh.png",bankName:"中兴银行",characteristic:"特惠双重礼包",badge:"images/logo-yh-tuijian.png"},
    {imgSrc:"images/logo-yh-jtyh.png",bankName:"交通银行",characteristic:"办卡优惠多",},
    {imgSrc:"images/logo-yh-payh.png",bankName:"平安银行",characteristic:"分期多优惠"},
    {imgSrc:"images/logo-yh-zsyh.png",bankName:"招商银行",characteristic:"周三美食五折",badge:"images/logo-yh-remen.png"},
    {imgSrc:"images/logo-yh-qbyh.png",bankName:"全部银行",characteristic:"更多信用卡",},
];
// const pendPush=[
//     {imgSrc:"images/logo-yh-xyyh.png",bankName:"兴业银行",characteristic:"特惠双重礼遇",badge:"images/logo-yh-remen.png"},
//     {imgSrc:"images/logo-yh-msyh.png",bankName:"民生银行",characteristic:"特惠双重礼遇",badge:"images/logo-yh-remen.png"},
//     {imgSrc:"images/logo-yh-pfyh.png",bankName:"浦发银行",characteristic:"商户心动折扣",badge:"images/logo-yh-tuijian.png"},
// ];


export default class BankList extends React.Component {
    render() {
        return (
            <div className="bank-list">
                <ul className="cl">
                    {
                        contData.map((item,ind)=>{
                            return <BankListItem cont={item} key={`banklistitem-${ind}`}/>
                        })
                    }

                </ul>
            </div>
        );
    }
}

 