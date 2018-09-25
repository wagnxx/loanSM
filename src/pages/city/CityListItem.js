/**
 * Created by 19848 on 2018/9/25.
 */
import React from 'react';
import SunItem from './SunItem'

export default class CityListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citysGroups: this.props.cont
        }
    }

    componentWillMount() {
        if (this.state.citysGroups.citysArr.length === 0) {
            this.setState({
                citysGroups: {"tit": "", citysArr: []}
            })
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.citysGroups.tit === "" ? "" : <SunItem citysGroups={this.state.citysGroups}/>
                }
            </div>
        );
    }
}


