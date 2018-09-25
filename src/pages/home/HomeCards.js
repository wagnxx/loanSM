/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';


export default class HomeCards extends React.Component {
    render() {
        return (
            <div >
                {/*<!-- 极速贷款开始 -->*/}
                <div className="speed-loan">
                    {/*<!-- list1 -->*/}
                    <div className="speed-loan-item speed-loan-item1 cl">
                        <div className="speed-loan-item-l fl">
                            <a href=""><img src="images/js1.png"  alt={"cardImg"}/></a><br/>
                            <span>快速微粒贷</span>
                        </div>
                        <div className="speed-loan-item-r fl">
                            <h3>2000元<font>以下</font></h3>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>有手机服务密码就能带</span>
                            </p>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>微额快速，闪电放款</span>
                            </p>
                        </div>
                    </div>
                    {/*<!-- list1 -->*/}
                    <div className="speed-loan-item speed-loan-item2 cl">
                        <div className="speed-loan-item-l fl">
                            <a href=""><img src="images/js2.png"  alt={"cardImg"}/></a><br/>
                            <span>热门极速贷</span>
                        </div>
                        <div className="speed-loan-item-r fl">
                            <h3>2000-1000元</h3>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>极速放款，放款成功率高</span>
                            </p>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>1分钟申请，十分钟放款</span>
                            </p>
                        </div>
                    </div>
                    <div className="speed-loan-item speed-loan-item3 cl">
                        <div className="speed-loan-item-l fl">
                            <a href=""><img src="images/js3.png"  alt={"cardImg"}/></a><br/>
                            <span>信用卡贷款</span>
                        </div>
                        <div className="speed-loan-item-r fl">
                            <h3>1万-10万</h3>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>有信用卡就能贷，白领最爱</span>
                            </p>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>额度高，利率低，如你所想</span>
                            </p>
                        </div>
                    </div>
                    <div className="speed-loan-item speed-loan-item4 cl">
                        <div className="speed-loan-item-l fl">
                            <a href=""><img src="images/js4.png"  alt={"cardImg"}/></a><br/>
                            <span>快速微粒贷</span>
                        </div>
                        <div className="speed-loan-item-r fl">
                            <h3>5万-100万</h3>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>大额贷款</span>
                            </p>
                            <p>
                                <img src="images/bws.png"  alt={"cardImg"}/>
                                <span>信贷经理专人服务</span>
                            </p>
                        </div>
                    </div>
                    <img src="images/js-foot.jpg" alt={"cardImg"}/>
                </div>
                {/*<!-- 极速贷款结束 -->*/}
            </div>
        );
    }
}

 