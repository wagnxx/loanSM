/**
 * Created by 19848 on 2018/9/25.
 */
import React from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import{saveCity} from "../../action"
import {jumpto} from "../../utils/history"


class SunItem extends React.Component {
    render() {
        return (
            <div>
                <div className={"list-item"}>
                    <h3>{this.props.citysGroups.tit}</h3>
                </div>
                <div className={"city-group"}>
                    {
                        this.props.citysGroups.citysArr.map((item, ind) => {
                            return <span key={`cityfun${item.n}-${ind}`}
                                         onClick={()=>{this.props.checkCity(item.n);jumpto("/my/profile")}}
                            >{item.n}</span>
                        })
                    }
                </div>
            </div>

        );
    }
}

const  mapDispatchToProps=dispatch=>({
    checkCity:bindActionCreators(saveCity,dispatch)
});

export default connect(null,mapDispatchToProps)(SunItem)