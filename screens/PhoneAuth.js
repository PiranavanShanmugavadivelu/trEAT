import React from 'react';
import { Button, View, Text } from 'react-native';




class PhoneAuth extends React.Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Phone Authentication</Text>
        <Button title="Go to Registration From"
          onPress={() => this.props.navigation.navigate('RegisterForm')}
        />
      </View>
    );
  }
}
export default PhoneAuth;
