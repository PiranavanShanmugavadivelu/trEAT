import React from 'react';
import {  View, Text } from 'react-native';
import { Button ,Icon } from 'react-native-elements';


class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome to Treat</Text>
        <Button
        icon={
          <Icon
        name='arrow-right'
        type='evilicon'
        color='#517fa4'
       />

        }

          title="Go to Login"
         type="outline"
          onPress={() => this.props.navigation.navigate('Login')}
        />


      </View>
    );
  }
}
export default WelcomeScreen;
