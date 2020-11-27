/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  homeBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  bodyBar: {
    flex :1,
    marginTop : 10,
    padding :15,
    marginTop:20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
   
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  }
});

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import PureChart from 'react-native-pure-chart';

let sampleData = [
  {x: '1M', y: ''},
  {x: '3M', y: ''},
  {x: '5M', y: ''},
  {x: '1Y', y: ''},
  {x: '6Y', y: ''}
]

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.homeBar}>
  <View style={styles.leftContainer}>
  <Image source={require('./images/sidemenu.png')} style = {{height: 20, width: 20, resizeMode : 'stretch',}} />
  </View>
  <Text style={styles.text}>
    DashBoard
  </Text>
  <View style={styles.rightContainer}>
    <Image source={require('./images/bell.jpg')} style = {{height: 20, width: 20, resizeMode : 'stretch',}} />
  </View>
</View>
<View style={styles.bodyBar}>
  <View style={{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'}}>
  <Text style={styles.paragraph}>
   NIFTY
    {'\n'}
    10417.30 115.2(+1,12%)
  </Text>
  </View>
  <View style={{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'}}>
  <Text style={styles.paragraph}>
    SENSEX
    {'\n'}
    10417.30 115.2(+1,12%)
  </Text>
  </View>
  <Text style={{flexDirection:row,height:10,fontSize:12,color:black,marginTop:20}}>
    Value as of Today
  </Text>
  <Text style={{flexDirection:row,height:10,fontSize:12,color:black,marginTop:20}}>
     र25,0000.00
  </Text>
</View>

<View style={{ flex: 1,
    flexDirection: 'row',
    marginTop:10,
    justifyContent: 'flex-start',
    alignItems: 'center'}}>
  <Text style={styles.paragraph}>
   Invested
    {'\n'}
    $25,0000.00
  </Text>
  </View>

  <View style={{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-center',
    marginTop:10,
    alignItems: 'center'}}>
  <Text style={styles.paragraph}>
   Unrealised
    {'\n'}
    र25,0000.00
  </Text>
  </View>

  <View style={{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:10,
    alignItems: 'center'}}>
  <Text style={styles.paragraph}>
   Annual Returns
    {'\n'}
    6.35%
  </Text>
  </View>

  <View style={{ flex: 1,
    flexDirection: 'row',
    marginTop:10,
    alignItems: 'center'}}>
  <Text style={styles.text}>
   PORTFOLID INSIGHTS
  </Text>
  </View>
  <View style={{ flex: 1,
    flexDirection: 'row',
    marginTop:10,
    padding:20,
    }}>
    <PureChart data={sampleData} type='line' />

  </View>
  </View>

  );
}

function InvestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Invest!</Text>
    </View>
  );
}

function Insights() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Insights!</Text>
    </View>
  );
}

function Taxcorner() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tax Corner!</Text>
    </View>
  );
}

function Games() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Games!</Text>
    </View>
  );
}

const config = {
  line: {
    visible: true,
    strokeWidth: 1,
    strokeColor: "#54a0ff"
  },
  area: {
    visible: false
  },
  tooltip: {
    visible: true,
    labelFontSize: 10
  },
  grid: {
    stepSize: 10000
  },
  yAxis: {
    labelColor: "#54a0ff"
  },
  insetY: 10,
  insetX: 10
};

 function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Invest" component={InvestScreen} />
        <Tab.Screen name="Insights" component={Insights} />
        <Tab.Screen name="Tax Corner" component={Taxcorner} />
        <Tab.Screen name="Games" component={Games} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
