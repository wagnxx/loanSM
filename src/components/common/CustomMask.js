/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';


export default class CustomMask extends React.Component {
    render() {
        return (
            <div style={{
                position:"fixed",
                left:"0",
                right:"0",
                top:"0",
                bottom:"0",
                zIndex:"999",
                background:"rgba(0,0,0,0.5)"
            }}>

            </div>
        );
    }
}

 