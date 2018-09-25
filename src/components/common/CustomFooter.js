import React from "react"
import {Link, withRouter} from "react-router-dom";


class CustomFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footBar: {
                "/home": false,
                "/loan": true,
                "/my": false
            }
        };

    }

    componentWillReceiveProps() {
        this.setStateHandle(this.props.history.location.pathname.match(/(^\/\w+)(\/)?/)[1]);
    }

    componentWillMount() {
        this.setStateHandle(this.props.history.location.pathname.match(/(^\/\w+)(\/)?/)[1])
    }

    setStateHandle = (checkedKey) => {
        this.setState(
            {
                footBar: {
                    ...{
                        "/home": false,
                        "/loan": false,
                        "/my": false
                    },
                    [checkedKey]: true

                }
            }
        );
    }

    render() {
        return (
            <footer>
                <div className="foot-item">
                    <Link to={"/home"}>
                        <img src={this.state.footBar["/home"] ? "images/sy-act.png" : "images/sy.png"}
                             alt={"footer-img"}/>
                    </Link>
                    <p className={this.state.footBar["/home"] ? "act_blue" : ""}>首页</p>
                </div>
                <div className="foot-item">
                    <Link to={"/loan"}>
                        <img src={this.state.footBar["/loan"] ? "images/dk-act.png" : "images/dk.png"}
                             alt={"footer-img"}/>
                    </Link>
                    <p className={this.state.footBar["/loan"] ? "act_blue" : ""}>贷款</p>
                </div>
                <div className="foot-item">
                    <Link to={"/my"}>
                        <img src={this.state.footBar["/my"] ? "images/wd-act.png" : "images/wd.png"}
                             alt={"footer-img"}/>
                    </Link>
                    <p className={this.state.footBar["/my"] ? "act_blue" : ""}>我的</p>
                </div>
            </footer>
        );
    }
}

export default withRouter(CustomFooter)