/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

class CustomList extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.marriy)
    }

    selectedIndex(ind) {

        this.props.chooseMarryState(this.props.dataSource[ind]);
        this.props.closeMask()

    }

    render() {
        return (
            <div className={"customList"}>
                {
                    this.props.dataSource.map((item, ind) => {
                        return <div
                            className={"customList-item"}
                            selkey={ind} key={`customlist${item}-${ind}`}
                            onClick={this.selectedIndex.bind(this, ind)}>
                            {item.cont}
                        </div>
                    })

                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    marriy: state.profileReducer
});
const mapDispatchToProps = dispatch => ({
    chooseMarryState: bindActionCreators(chageMarry, dispatch)
});

function chageMarry(checkObj) {
    return checkObj
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomList)