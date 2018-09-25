/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import {Link} from "react-router-dom"

export default class CardRecommendItem extends React.Component {
    render() {
        return (
            <div className="recomend-list cl">
                <Link to="/loan/details" className="card-pic">
                    <img src={this.props.cont.imgSrc} alt={this.props.cont.imgSrc}/>
                </Link>
                <div className="card-content">
                    <h3>{this.props.cont.bankName}</h3>
                    <span>{this.props.cont.tag1}</span><span>{this.props.cont.tag2}</span>
                    <p>
                        <span className="buyer-num">{this.props.cont.count}</span>
                        人成功申请
                    </p>
                </div>
            </div>
        );
    }
}

 