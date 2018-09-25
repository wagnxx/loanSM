import React from "react"
import {Route,  Switch, HashRouter as Router,Redirect } from "react-router-dom"



import App from "../App"

import Loan  from "../pages/loan/Loan"
import Details  from "../pages/loan/Details"
import SpeedLoan  from "../pages/loan/SpeedLoan"
import  Applycard  from "../pages/loan/Applycard"

import HomeIndex from "../pages/home/HomeIndex"
import HomeCards from "../pages/home/HomeCards"

import My from "../pages/my/My"
import Login from "../pages/my/Login"
import MyProfile from "../pages/my/MyProfile"
import City from "../pages/city/City"
import FootPrint from "../pages/my/FootPrint"
import Setting from "../pages/my/Setting"
import MyApply from "../pages/my/MyApply"


export default class Crouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>

                        <Redirect exact path={"/"} to="/home"/>
                        <Route path={"/home"} component={HomeIndex}/>
                        <Route path={"/homecards"} component={HomeCards}/>

                        <Route exact path={"/loan"} component={Loan}/>
                        <Route exact path={"/loan/details"} component={Details}/>
                        <Route exact path={"/loan/speedloan"} component={SpeedLoan}/>
                        <Route exact path={"/loan/applycard"} component={Applycard}/>

                        <Route exact  path={"/my"} component={My}/>
                        <Route exact  path={"/my/login"} component={Login}/>
                        <Route exact  path={"/my/profile"} component={MyProfile}/>
                        <Route exact  path={"/my/city"} component={City}/>
                        <Route exact  path={"/my/footPrint"} component={FootPrint}/>
                        <Route exact  path={"/my/setting"} component={Setting}/>
                        <Route exact  path={"/my/apply"} component={MyApply}/>
                    </Switch>
                </App>

            </Router>
        );
    }
}