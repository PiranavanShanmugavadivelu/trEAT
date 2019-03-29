import React from "react";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import { createStackNavigator,createSwitchNavigator,createAppContainer} from "react-navigation";
import WelcomeScreen from './screens/WelcomeScreen';


class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LoginScreen Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('PhoneAuthScreen')}
        />
      </View>
    );
  }
}

class PhoneAuthScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>PhoneAuthScreen Screen</Text>
      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>RegisterScreen Screen</Text>
      </View>
    );
  }
}


const LoginNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    PhoneAuth: PhoneAuthScreen,
    Register: RegisterScreen,

  },
  {
    initialRouteName: 'Home',
  }
);

const Navigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Login:LoginNavigator,

},
{
  initialRouteName: 'Welcome',
});

const AppContainer = createAppContainer(Navigator);

export default AppContainer;
