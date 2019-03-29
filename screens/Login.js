import React from 'react';
import { Button, View, Text } from 'react-native';




class Login extends React.Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login Page</Text>
        <Button title="Go to Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}
export default Login;
