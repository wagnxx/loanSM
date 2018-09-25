/**
 * Created by 19848 on 2018/9/24.
 */
import React from 'react';
import CustomList from "../../components/my/CustomList"
import CustomMask from "../../components/common/CustomMask"
import * as types from "../../action/type";
import {saveName,saveID} from "../../action/";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {jumpto} from "../../utils/history"
import {mySession} from "../../utils/saveStorage"

const marryData=[
    {type:types.MARRIED_NO,cont:"未婚"},
    {type:types.MARRIED_YES,cont:"已婚"}
];
const education=[
    {type:types.EDUCATION_GZ,cont:"高中"},
    {type:types.EDUCATION_DZ,cont:"大专"},
    {type:types.EDUCATION_BK,cont:"本科"},
    {type:types.EDUCATION_SS,cont:"硕士"},
    {type:types.EDUCATION_BS,cont:"博士"},
];

 class MyProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedItem:marryData,
            close:false,
        }
    }
    selectedMarry=(v)=>{
        this.setState({
            close:true,
            selectedItem:marryData
        })
    }
     selectedEnd=(v)=>{
         this.setState({
             close:true,
             selectedItem:education
         })
     }
    closeMask=()=>{
        this.setState({
            close:false
        })
    }
     chooseCity=()=>{
         jumpto("/my/city")
     }
     savaName=()=>{
        if(this.FullName.value.length>=2 &&this.FullName.value.length<10){
            this.props.saveName(this.FullName.value);
            console.log("已保存",this.FullName.value)
        }else if(this.FullName.value.length>8){
            alert("姓名输入2-10位")
        }
     }
     savaId=()=>{
         if(this.Id.value.length===3||this.Id.value.length===18) {
             this.props.saveID(this.Id.value);
         }
     }
     saveAllInfoData=()=>{

         mySession.saveData("profileInfo",JSON.stringify(this.props.profileInfo));
         jumpto("/my");

     }
    render() {
        return (
            <div className="my-info">
                <div className="info-list cl">
                    <span className="info-tit">手机号</span>
                    <div className="info-todo fr">
                        <input type="text" readOnly className="input-type" id="info-phoneNum" placeholder={this.props.profileInfo.TEL_STATE}/>
                    </div>
                </div>
                <div className="info-list cl">
                    <span className="info-tit">真实姓名</span>
                    <div className="info-todo fr">
                        <input type="text" ref={FullName=>this.FullName=FullName} onChange={this.savaName} className="input-type" id="info-username" placeholder={this.props.profileInfo.FULL_NAMEA_STATE}/>
                    </div>
                </div>
                <div className="info-list cl">
                    <span className="info-tit">身份证号</span>
                    <div className="info-todo fr">
                        <input type="text" ref={Id=>this.Id=Id} onChange={this.savaId} className="input-type" id="info-ID" placeholder={this.props.profileInfo.IDNUM_STATE}/>
                    </div>
                </div>
                <div className="info-list cl">
                    <span className="info-tit">所在城市</span>
                    <div className="info-todo fr cl">
                        <div className="select-type" onClick={this.chooseCity}>
                            {this.props.profileInfo.CITY_STATE}
                        </div>
                    </div>
                </div>
                <div className="info-list cl">
                    <span className="info-tit">婚姻状况</span>
                    <div className="info-todo fr cl">
                        <div className="select-type" onClick={this.selectedMarry}>
                            {this.props.profileInfo.MARRID_STATE || "-请选择"}
                        </div>
                    </div>
                </div>
                <div className="info-list cl">
                    <span className="info-tit">文化程度</span>
                    <div className="info-todo fr cl">
                        <div className="select-type"  onClick={this.selectedEnd}>
                            {this.props.profileInfo.EDUCATION_STATE || "-请选择"}
                        </div>
                    </div>
                </div>
                <a className="info-btn" onClick={this.saveAllInfoData}>保存</a>
                {
                    !this.state.close? "":(
                        <div>

                <CustomList dataSource={this.state.selectedItem} closeMask={this.closeMask}/>
                <CustomMask/>
                        </div>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps=state=>({
    profileInfo: state.profileReducer,
});
const mapDispatchToProps = dispatch=>({
    saveName:bindActionCreators(saveName,dispatch),
    saveID:bindActionCreators(saveID,dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);