/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Main from "./components/main";

import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(){
  const [flag,setFlag]=useState(false);
 
  return(
    <>
    <View style={{height:300}}>
    <ImageBackground source={require("./components/asset/mandi.jpg")}  style={styles.image}>
 <View style={{height:300,width:"100%",justifyContent:"center",alignItems:"center",  backgroundColor:"rgba(52, 52, 52, 0.5)",position:"relative"}}>

<Text style={{fontSize:30,color:"#fff"}}>Welcome to Mandi</Text>
  <Text style={{color:"#fff"}}>Buy all your products from mandi!</Text>

 </View>
 </ImageBackground>
 </View>
  <Text>{"\n"}</Text>
 {!flag && <Button title="View Products" onPress={()=>{
   setFlag(true);
 }} />}
 <ScrollView>
 {flag && <Main />}
 </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  position:"relative",
  },
});

export default App;
