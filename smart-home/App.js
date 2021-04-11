import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import {  Image,Switch, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import logo from './assets/weather/cloudy.png'; 
import ac from './assets/device/ac.png'
import bulb from './assets/device/bulb.png'
import router from './assets/device/router.png'
import smarttv from './assets/device/smarttv.png'


function HomeScreen(){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (isEnabled) => {
    setIsEnabled(previousState => !previousState);
    alert(`Device Turn On = ${isEnabled}`)
  }
  const colorGrad = ['#4b4d64','#414257', '#2f2e3e'];


  return(
    <View style={styles.container}>
      
      <View style={styles.headdiv} >
        <Text style={{color:"white", fontSize:25}}>Hey, Gigi!</Text>
        <Text style={{color:"white", fontSize:15, marginTop:20}}>Today Dec 29,2020</Text>
      </View>

      
      <View >
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.secdiv}>
          

        
        <View style={{paddingHorizontal:1}}>
        
        <View style={{flexDirection:'row', flexWrap:'wrap',paddingVertical:5,paddingTop:10}}>

          <Image  source={logo} style={styles.wImage}/>
        
          <View style={{padding:10,paddingVertical:0}}>
            <Text style={{color:"white", fontSize:25, paddingVertical:10}}>Cloudy</Text>
            <Text style={{color:"white", fontSize:15}}>Jaipur, Rajasthan</Text>
          </View>

          <View style={{paddingVertical:15,paddingHorizontal:40}}>
              <Text style={{color:"white", fontSize:37}}>28</Text>
              
          </View>

          <View style={{flexDirection:'row', flexWrap:'wrap',paddingTop:5,padding:10}}>

            
            <View style={{padding:10,paddingHorizontal:7}}>
              <Text style={styles.statNum}>31C</Text>
              <Text style={styles.statText}>Sensible</Text>
            </View>

            <View style={{padding:10,paddingHorizontal:7}}>
              <Text style={styles.statNum}>65%</Text>
              <Text style={styles.statText}>Humidity</Text>
            </View>

            <View style={{padding:10,paddingHorizontal:7}}>
              <Text style={styles.statNum}>3</Text>
              <Text style={styles.statText}>W. Force</Text>
            </View>

            <View style={{padding:10,paddingHorizontal:7}}>
              <Text style={styles.statNum}>1009 hPa</Text>
              <Text style={styles.statText}>Pressure</Text>
            </View>

          </View>

          <View>
            
          </View>
          
        </View>

      </View>
        </LinearGradient>
        

      </View>

      {/* WEATHER END */}


      <View>
          <View style={{flexDirection:'row', flexWrap:'wrap',paddingTop:5,padding:10,paddingHorizontal:23}}>
              <View>
                <TouchableOpacity>
                  <Text style={styles.rooms}>Living Room</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Text style={styles.roomsoff}>Bedroom</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Text style={styles.roomsoff}>Bathroom</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Text style={styles.roomsoff}>Kitchen</Text>
                </TouchableOpacity>
              </View>

          </View>

      </View>

      {/* room button end */}

      <View style={{flexDirection:"row"}}>
        {/* device pack 1 */}
        <View style={{flex:1}}>
          
          {/* AC */}
          <LinearGradient
              colors={colorGrad} style={styles.devicePackTL}>
                              
            <View >

              <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>

                <Image source={ac} style={styles.deviceImage}/>
                <Text style={styles.devices}>Air Conditioner</Text>
      
        
                <View style={{flexDirection:'row', flexWrap:'wrap',padding:12}}>

                  <Text style={styles.on} >{isEnabled ? "On" : "Off"}</Text>
                  <Switch
                    trackColor={{ false: "black", true: "black" }}
                    thumbColor={isEnabled ? "#ffbc63" : "#bd28fc"}
                    ios_backgroundColor="black"
                    onValueChange={toggleSwitch}
                    value={isEnabled}

                    style={{padding:20, paddingVertical:0}}
                  />
                </View>

              </View>

            </View>

          </LinearGradient>

          {/* lamp */}
          <LinearGradient
              colors={colorGrad} style={styles.devicePackBL}>
                              
            <View >

              <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>

                <Image source={bulb} style={styles.deviceImage}/>
                <Text style={styles.devices}>Lamp</Text>
      
        
                <View style={{flexDirection:'row', flexWrap:'wrap',padding:12}}>

                  <Text style={styles.on} >{isEnabled ? "On" : "Off"}</Text>
                  <Switch
                    trackColor={{ false: "black", true: "black" }}
                    thumbColor={isEnabled ? "#ffbc63" : "#bd28fc"}
                    ios_backgroundColor="black"
                    onValueChange={toggleSwitch}
                    value={isEnabled}

                    style={{padding:20, paddingVertical:0}}
                  />
                </View>

              </View>

            </View>

          </LinearGradient>

        </View>
          {/* device pack 2 */}

          <View style={{flex:1}}>
          
          {/* TV */}
          <LinearGradient
              colors={colorGrad} style={styles.devicePackTR}>
                              
            <View >

              <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>

                <Image source={smarttv} style={styles.deviceImage}/>
                <Text style={styles.devices}>Smart TV</Text>
      
        
                <View style={{flexDirection:'row', flexWrap:'wrap',padding:12}}>

                  <Text style={styles.on} >{isEnabled ? "On" : "Off"}</Text>
                  <Switch
                    trackColor={{ false: "black", true: "black" }}
                    thumbColor={isEnabled ? "#ffbc63" : "#bd28fc"}
                    ios_backgroundColor="black"
                    onValueChange={toggleSwitch}
                    value={isEnabled}

                    style={{padding:20, paddingVertical:0}}
                  />
                </View>

              </View>

            </View>

          </LinearGradient>

          {/* Router */}
          <LinearGradient
              colors={colorGrad} style={styles.devicePackBR}>
                              
            <View >

              <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>

                <Image source={router} style={styles.deviceImage}/>
                <Text style={styles.devices}>Router</Text>
      
        
                <View style={{flexDirection:'row', flexWrap:'wrap',padding:12}}>

                  <Text style={styles.on} >{isEnabled ? "On" : "Off"}</Text>
                  <Switch
                    trackColor={{ false: "black", true: "black" }}
                    thumbColor={isEnabled ? "#ffbc63" : "#bd28fc"}
                    ios_backgroundColor="black"
                    onValueChange={toggleSwitch}
                    value={isEnabled}

                    style={{padding:20, paddingVertical:0}}
                  />
                </View>

              </View>

            </View>

          </LinearGradient>

        </View>
        











      </View>
      
      <StatusBar style="auto" />
    </View>
  );
  

}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
            }}> 
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#282533',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282533',
    
  },

  headdiv:{
    margin:20,
    marginTop:25
  },

  secdiv:{
    margin:20,
   
    borderRadius:25,
    marginTop:15
    
    
   
  },

  wImage:{
    width: 90, 
    height: 90 ,
    
     
  },

  statNum:{
    color:"white", 
    fontSize:18, 
    paddingVertical:10,
    paddingHorizontal:10,
    textAlign:'center'
  

  },

  statText:{
    color:'grey',
    fontSize:15,
    textAlign:'center'
    
  },

  rooms:{
    fontSize:15,
    color:"white", 
    padding:10
  },

  roomsoff:{
    fontSize:15,
    color:"grey", 
    padding:10
  },


  devices:{
    fontSize:18,
    color:"white", 
    padding:20,
    

  },

  off:{
    fontSize:15,
    color:"white", 
 
    
  },

  on:{
    fontSize:15,
    color:"white", 
    paddingLeft:20
    
    
  },

  deviceImage:{
    width: 30, 
    height: 30 ,
    
  
  },

  devicePack:{
    backgroundColor:'#1f1f1f',
    width:170,
    marginLeft:10,
    borderBottomLeftRadius:55,
    borderBottomEndRadius:25,
    borderTopRightRadius:55,
    borderTopLeftRadius:35,
    margin:10
  
  },

  devicePackTL:{
    backgroundColor:'#1f1f1f',
    width:170,
    marginLeft:10,
    borderBottomLeftRadius:55,
    borderBottomEndRadius:25,
    borderTopRightRadius:55,
    borderTopLeftRadius:35,
    margin:10
  
  },

  devicePackTR:{
    backgroundColor:'#1f1f1f',
    width:170,
    marginLeft:10,
    borderBottomLeftRadius:55,
    borderBottomEndRadius:25,
    borderTopRightRadius:55,
    borderTopLeftRadius:35,
    margin:10
  
  },

  devicePackBL:{
    backgroundColor:'#1f1f1f',
    width:170,
    marginLeft:10,
    borderBottomLeftRadius:55,
    borderBottomEndRadius:25,
    borderTopRightRadius:55,
    borderTopLeftRadius:35,
    margin:10
  
  },

  devicePackBR:{
    backgroundColor:'#1f1f1f',
    width:170,
    marginLeft:10,
    borderBottomLeftRadius:55,
    borderBottomEndRadius:25,
    borderTopRightRadius:55,
    borderTopLeftRadius:35,
    margin:10
  
  },

  

 







});


