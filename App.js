import React from 'react';
import { Button, View, Text } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import PhoneAuth from './screens/PhoneAuth';
import RegisterScreen from './screens/RegisterScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import SearchScreen from './screens/SearchScreen';
import {Icon } from 'react-native-elements';
import FoodScreen from './screens/FoodScreen';
import OrderScreen from './screens/OrderScreen';
import SettingsScreen from './screens/SettingsScreen';

const TabNavigator = createBottomTabNavigator({
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: {
      tabBarIcon: ({ black }) => <Icon name="room-service" color={black} />
    } },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ black }) => <Icon name="search" color={black} />
    } },
  Settings:{
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ black }) => <Icon name="settings" color={black} />
    }}
}  );


const LoginNavigator = createStackNavigator({
 LoginPage:Login,
 Register:PhoneAuth,
 RegisterForm:RegisterScreen,
}, {
    initialRouteName: 'LoginPage',

});

const HomeNavigator = createStackNavigator({
  Tab:{
    screen:TabNavigator,
    navigationOptions: { title: 'Restaurant' }
  },
  Food:FoodScreen,
  Order:OrderScreen
 }, {
     initialRouteName: 'Tab',
     defaultNavigationOptions: {
      // headerStyle: {
      //   backgroundColor: '#f4511e',
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },

 });

const Navigator = createSwitchNavigator(
  {
  Welcome: WelcomeScreen,
  Login: LoginNavigator,
  Home:HomeNavigator,
  },
  {
    initialRouteName: 'Welcome',
  }
);

const App = createAppContainer(Navigator);
export default App;
