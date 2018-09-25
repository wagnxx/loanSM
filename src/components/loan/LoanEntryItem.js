/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import {withRouter} from "react-router-dom"
import {connect}  from "react-redux"
// import {bindActionCreators}  from "redux"
import { jumpto } from '../../utils/history'



 class LoanEntryItem extends React.Component {
    goSpeedPage=()=>{
       jumpto("/loan/speedloan");
    }
    render() {
        return (
            <div className="loan-entry-lists-item cl" onClick={this.goSpeedPage}>
                <img src={this.props.cont.imgSrc} className="fl" alt={this.props.altkey}/>
                <div className="loan-entry-lists-item-r fl" >
                    <a>{this.props.cont.tit}</a>
                    <p>{this.props.cont.minTit}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    curRouter: state
})


// const mapDispatchToProps=(dispatch)=>({
//     login:bindActionCreators(login,dispatch)
// })

export default connect(mapStateToProps,null)(withRouter(LoanEntryItem))