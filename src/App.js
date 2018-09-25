import React, {Component} from 'react';

import "./local_s/style/pro-less/index.less"

import CustomFooter from "./components/common/CustomFooter"

class App extends Component {


    render() {
        return (
            <div className="App container">
                <div className={"main"}>

                    {this.props.children}
                    <div className={"spaceud"}></div>
                    <CustomFooter/>

                </div>
            </div>
        );
    }
}



export default App;
