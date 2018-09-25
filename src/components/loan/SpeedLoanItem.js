/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import {Link} from "react-router-dom"



export default class SpeedLoanItem extends React.Component {
    render() {
        return (
            <div className={`speed-loan-item cl ${this.props.cn}`}>
                <div className="speed-loan-item-l fl">
                    <Link to={"/loan/applycard"}><img src={this.props.cont.imgSrc} alt={this.props.cont.tit}/></Link>
                    <br/>
                    <span>{this.props.cont.tit}</span>
                </div>
                <div className="speed-loan-item-r fl">
                    <h3>{this.props.cont.scope}</h3>
                    <p>
                        <img src="images/bws.png" alt={`${this.props.cont.distit1}`}/>
                        <span>{this.props.cont.distit1}</span>
                    </p>
                    <p>
                        <img src="images/bws.png"  alt={`${this.props.cont.distit1}`}/>
                        <span>{this.props.cont.distit2}</span>
                    </p>
                </div>
            </div>
        );
    }
}

 