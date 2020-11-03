import React, { useState,useEffect } from "react";
import {Text,View } from "react-native";
import getList from "./utils/getList";
import {Picker} from "@react-native-community/picker"
import { AsyncStorage } from "@react-native-community/async-storage";




function Main(){
    const [list,setList]=useState([]);
    const [state,setState]=useState([]);
    const [district,setDistrict]=useState([]);
    const [activeS,setActiveS]=useState("State");
    const [activeD,setActiveD]=useState("district");
    const [flag,setFlag]=useState(false);
    const[flag1,setFlag1]=useState(false);
  

function setUpState(){
var arr=[];
for(var i=0;i<list.length;i++){
   if(!arr.includes(list[i].state)) arr.push(list[i].state);
}
console.log(arr)
setState([].concat(arr));
setFlag1(true)
}
    
    
    
    useEffect(()=>{
      getList((result)=>{
      
       if(result==='error'){
        console.log("inside");
           result=AsyncStorage.get('mData');
           if(result==undefined)return;
           result=JSON.parse(result);
       }else{
        var temp=JSON.stringify(result);
        AsyncStorage.setItem('mData',temp);
        
       }
      
          setList([].concat(result))
         
          setUpState();
      })
    },[])

    function renderList(ele,index){
        return (
            <View key={index}>
                   <Text>{"\n"}</Text>
                <View style={{flex:1,flexGrow:1 , flexDirection:"row",justifyContent:"space-evenly"}}>
            <Text>{ele.commodity}</Text>
        <Text>{ele.min_price}</Text>
        <Text>{ele.max_price}</Text>
        </View>
     
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>  
            </View>
        )
    }
   function  callDistrict(){
       setFlag(true);
       var arr=[];
for(var i=0;i<list.length;i++){
    if(list[i].state==activeS && !arr.includes(list[i].district))arr.push(list[i].district);
}
setDistrict([].concat(district))
   }
    return(
        <>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
      {flag1 &&  <Picker
        selectedValue={activeS}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
            setActiveS(itemValue);
            callDistrict()
        }}
      >
           <Picker.Item label="Select State" value="state" />
          {flag1 && state.map((ele,index)=>{
              return (
                <Picker.Item key={index} label={ele} value={ele} />
              )
          })}
      </Picker> }
      {flag &&  <Picker
        selectedValue={activeD}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
            setActiveD(itemValue);
      
        }}
      >
           <Picker.Item label="Select District" value="district" />
          {flag && district.map((ele,index)=>{
              return (
                <Picker.Item key={index} label={ele} value={ele} />
              )
          })}
      </Picker> }
        </View>

<View>
{list.map(renderList)}
</View>
        </>
    )
}


export default Main;