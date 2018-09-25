/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';


export default class Details extends React.Component {
    checkNum=()=>{
        if(this.tl.value>23){
            this.tl.value=23;
        }
    }
    render() {
        return (
            <div>
                {/*<!-- 详情页开始 -->*/}
                <div className="detail-top">
                    <div className="detail-logo">
                        <img src="images/logo-weidai.png" alt={"detailimg"}/>
                            <span className="detail-logo-name">微贷</span>
                    </div>
                    <div className="characteristic">
                        <span>放款速度快</span><font>|</font>
                        <span>高通过率</span><font>|</font>
                        <span>不加征信</span>
                    </div>
                    <div className="choice-box">
                        <span>仅供参考，以实际核准为准</span>
                        <div className="choice-box-mes">
                            <div className="choice-box-mes-item">
                                <span>506.0</span>
                                <p>每月还款</p>
                            </div>
                            <div className="choice-box-mes-item">
                                <span>0.04%</span>
                                <p>参考日利率</p>
                            </div>
                            <div className="choice-box-mes-item">
                                <span>30分钟</span>
                                <p>最快放款时间</p>
                            </div>
                        </div>
                        <div className="check-box">
                            <div className="check-item">
                                <div className="check-item-inner cl">
                                    <span>金额</span>
                                    <span className="fr yuan" >元</span>
                                    <input type="number"   defaultValue='600' className="fr" />
                                </div>
                            </div>
                            <div className="check-item">
                                <div className="check-item-inner cl">
                                    <span>期限</span>
                                    {/*<!-- <span className="fr yuan" ><img src="images/logo-down.png"/></span> -->*/}
                                    <div   id="timg_long"  defaultValue='600' className="fr">
                                        <input type="number" defaultValue={1}  onChange={this.checkNum} ref={tl=>this.tl=tl} style={{width:"60%"}}/>月
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*<!-- 详情页结束 -->*/}

                <div style={{padding:"0 2%"}}>



                {/*<!-- 申请流程开始 -->*/}
                <div className="application-process">
                    <h3>申请流程</h3>
                    <ul className="cl">
                        <li>
                            <img src="images/logo-sfrz.png" alt={"detailimg"}/><br/>
                            <span>身份认证</span>
                        </li>
                        <li>
                            <img src="images/logo-arr-r.png" alt={"detailimg"}/>

                        </li>
                        <li>
                            <img src="images/logo-rlsb.png" alt={"detailimg"}/><br/>
                            <span>人脸识别</span>
                        </li>
                        <li>
                            <img src="images/logo-arr-r.png" alt={"detailimg"}/>

                        </li>
                        <li>
                            <img src="images/logo-lxrxx.png" alt={"detailimg"}/><br/>
                            <span>联系人信息</span>
                        </li>

                    </ul>
                </div>
                {/*<!-- 申请流程结束 -->*/}
                <div className="bg-gray"></div>
                {/*<!-- 申请说明开始 -->*/}
                <div className="application-instruction">
                    <h3>申请资格</h3>
                    <p>年龄要求：18-35周岁</p>
                    <p>其他要求：手机号在网半年</p>
                    <p>申请材料：身份证，手机号</p>
                    <hr/>
                        <h3>产品介绍</h3>
                        <p>借款用途：现金分期</p>
                        <p>面向人群：上班族</p>
                        <p>申请材料：全自动审批（部分电话/线下审核）</p>
                        <p>到账方式：银行卡</p>
                        <p>所属平台：天神贷</p>
                </div>
                {/*<!-- 申请说明结束 -->*/}
                    <div  className={"detailFooter"}
                        onClick={()=>{
                            alert("第三方平台有故障，请稍后再试")
                        }}
                    >
                        立即申请
                    </div>
                </div>

            </div>
        );
    }
}

 