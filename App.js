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

const TabNavigator = createBottomTabNavigator({
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="access-alarms" color={tintColor} />
    } },
  Search: SearchScreen
}  );


const LoginNavigator = createStackNavigator({
 LoginPage:Login,
 Register:PhoneAuth,
 RegisterForm:RegisterScreen,
 App:TabNavigator

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
