/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import SpeedLoanItem from "../../components/loan/SpeedLoanItem"

const contData=[
    {imgSrc:"images/js1.png",tit:"快速微粒贷",scope:"2000元 以下",distit1:"有手机服务密码就能带",distit2:"微额快速，闪电放款"},
    {imgSrc:"images/js2.png",tit:"热门极速贷",scope:"2000-1000元",distit1:"极速放款，放款成功率高",distit2:"1分钟申请，十分钟放款"},
    {imgSrc:"images/js3.png",tit:"信用卡贷款",scope:"1万-10万",distit1:"有信用卡就能贷，白领最爱",distit2:"额度高，利率低，如你所想"},
    {imgSrc:"images/js4.png",tit:"快速微粒贷",scope:"5万-100万",distit1:"大额贷款",distit2:"信贷经理专人服务"},
];


export default class SpeedLoan extends React.Component {
    render() {
        return (
            <div className="speed-loan">
                {
                    contData.map((item,ind)=>{
                        return <SpeedLoanItem cont={item} key={`speeditem${ind}`} cn={`speed-loan-item${ind+1}`}/>
                    })
                }
                <img src="images/js-foot.jpg" alt={"js-foot"}/>
            </div>
        );
    }
}

 