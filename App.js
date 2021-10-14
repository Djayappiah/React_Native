import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Screens/Login'
import Home from './Screens/Home'
import Cart from './Screens/Cart'


export default function App() {
const MainNavigator = createStackNavigator();

  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
           <MainNavigator.Screen name="Login" component={Login}  />
           <MainNavigator.Screen name="Home" component={Home}  />
           <MainNavigator.Screen name="Cart" component={Cart}  />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
