import React from 'react';
import { Button, View, Text } from 'react-native';




class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome to Treat</Text>
        <Button title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
export default WelcomeScreen;
