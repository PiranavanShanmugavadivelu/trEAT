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
      tabBarIcon: ({ tintColor }) => <Icon name="room-service" color={tintColor} />
    } },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />
    } },
  Settings:{
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />
    }}
}  );


const LoginNavigator = createStackNavigator({
 LoginPage:Login,
 Register:PhoneAuth,
 RegisterForm:RegisterScreen,
 App:TabNavigator,
 Food:FoodScreen,
 Order:OrderScreen
}, {
    initialRouteName: 'LoginPage',
});

const Navigator = createSwitchNavigator(
  {
  Welcome: WelcomeScreen,
  Login: LoginNavigator,
  },
  {
    initialRouteName: 'Welcome',
  }
);

const App = createAppContainer(Navigator);
export default App;
