/**
 * Created by 19848 on 2018/9/25.
 */
import React from 'react';
import CityListItem from "./CityListItem"
import {allcity} from "../../utils/allcity"

let  firsCharArr=["热门城市"];
for(let i=0;i<26;i++){
    firsCharArr.push(String.fromCharCode(65+i));
}
const filterCity={
    //"A":[”安徽“，”安庆“]
    // "#":[
    //     {n:"北京"},
    //     {n:"北京"}
    // ]
};

for(let i=0;i<firsCharArr.length;i++){
    filterCity[firsCharArr[i]]=allcity.filter((item,ind)=>{
        let reg=new RegExp(`^${firsCharArr[i]}`);
        if(reg.test(item.p)){
            item.fc=firsCharArr[i]
        return item
        }
        return false;
    })
}

filterCity["热门城市"]=[
    {n:"北京"},
    {n:"深圳"},
    {n:"广州"},
    {n:"上海"},
    {n:"重庆"},
]

export default class CityListGroup extends React.Component {
    render() {
   return (
            <div>
                {
                    firsCharArr.map((item,ind)=>{
                        // filterCity[item]
                        return <CityListItem cont={{tit:item,citysArr:filterCity[item]}} key={`cityitemsof${item}`}/>
                    })
                }

            </div>
        );
    }
}

 