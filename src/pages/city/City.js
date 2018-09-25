/**
 * Created by 19848 on 2018/9/25.
 */
import React from 'react';
import CityListGroup from "./CityListGroup"

export default class City extends React.Component {
    render() {
        return (
            <div >
                <div className="city-lists">
                    <CityListGroup/>
                </div>
                <div className="initials-bar">
                    <ul>
                        <li>#</li>
                        <li>#</li>
                        <li>#</li>
                        <li>A</li>
                        <li>A</li>
                        <li>A</li>
                        <li>A</li>
                    </ul>
                    <div className="slidingBlock"></div>
                </div>
            </div>
        );
    }
}

 