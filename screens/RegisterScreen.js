import React from 'react';
import { Button, View, Text } from 'react-native';




class RegisterScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Registration Form </Text>
        <Button title="Go to App"
          onPress={() => this.props.navigation.navigate('App')}
        />
      </View>
    );
  }
}
export default RegisterScreen;
