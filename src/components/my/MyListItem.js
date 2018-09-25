/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import {jumpto} from "../../utils/history"

export default class MyListItem extends React.Component {
    goDetails = () => {
        if (this.props.login) {
            console.log(this.props.cont.froms);
            jumpto(`/my/${this.props.cont.froms}`)

        } else {
            alert("您未登陆不能查看，请登录");
        }

    }

    render() {
        return (
            <div className="my-main-bot">
                <div className="my-list cl">
                    <span className="list-logo">
                        <img src={this.props.cont.imgSrc} alt={this.props.cont.froms}/>
                    </span>
                    <span className="list-name">{this.props.cont.dis}</span>
                    <span className="list-go-sun" onClick={this.goDetails}>
                        <img src="images/go-sq.png" alt="wodeimg"/></span>
                </div>
            </div>
        );
    }
}

 