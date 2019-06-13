import React, { Component } from 'react';
import Firebase from 'react-native-firebase';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import firebaseService from '../server/logincontroller.js'

export default class Login extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      decode:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  handleChange(e) {
      this.setState({
        email: e.nativeEvent.text
      });
    }

  decryp(chiperText){
      var decipherText = simpleCrypto.decrypt(chiperText);
      Alert.alert("decipherText   : " + decipherText);

    }
  sear(id) {
        Alert.alert(id);
        const ref = Firebase.firestore().collection('login').where("Email", "==", id);
        ref.get().then((doc) => {
        if(doc.exists){
         const board = doc.data();
         this.state.decode=this.decryp(board.Password);
          if(this.state.password==this.state.decode){
              this.props.navigation.navigate('Home');
               }
          else{
            Alert.alert("username and password doesn't match");
          }
        }
      else{
        Alert.alert("no such user");
      }


  });
}


  onSubmit(){

    
    this.sear(this.state.email);
  }


  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="e-mail"
              keyboardType='numeric'
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email:email})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password:password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmit()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('RegisterForm')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
