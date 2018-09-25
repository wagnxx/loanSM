/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';



export default class BankListItem extends React.Component {
    render() {
        return (
            <li>
                <a className="bank-logo">
                    <img src={this.props.cont.imgSrc} alt={this.props.cont.imgSrc}/>
                </a>
                <div className="bank-tit">
                    <h3>
                        {this.props.cont.bankName}
                        <span className="lit-logo">
                            {
                                this.props.cont.badge
                                    ? <img  src={this.props.cont.badge} alt={this.props.cont.badge}/>
                                    : ""
                            }
                        </span>
                    </h3>
                    <span>特惠双重礼遇</span>
                </div>
            </li>
        );
    }
}

 