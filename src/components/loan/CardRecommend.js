/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import CardRecommendItem from "./CardRecommendItem"
const contData=[
    {imgSrc:"images/card-tbpk.jpg",bankName:"兴业淘宝普卡",tag1:"网购积分",tag2:"200万航意险",count:"134332"},
    {imgSrc:"images/card-wemxyk.jpg",bankName:"交通银行沃尔玛信用卡",tag1:"超市必备",tag2:"双倍积分",count:"134332"},
    {imgSrc:"images/card-ic.jpg",bankName:"福IC金卡",tag1:"尊享高额保险",tag2:"免首年年费",count:"134332"},
];
export default class CardRecommend extends React.Component {
    render() {
        return (
            <div className="card-recommend">
                <h3>信用卡推荐</h3>
                {
                    contData.map((item,ind)=>{
                        return <CardRecommendItem cont={item} key={`cardrecommenditem-${ind}`}/>
                    })
                }

            </div>
        );
    }
}

 