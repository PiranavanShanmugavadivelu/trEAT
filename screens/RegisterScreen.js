import React, { Component } from 'react';
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
import Firebase from 'react-native-firebase';
import SimpleCrypto from "simple-crypto-js";

export default class RegisterScreen extends Component {
     _isMounted = false;
  constructor(props) {

    super(props);
    this.ref = Firebase.firestore().collection('login');
    state = {
      fullName: '',
      email   : '',
      password: '',
      encode: '',
    };
    this.onSignUp = this.onSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
   this._isMounted = true;
 }

  handleChange(event, name) {
    this.setState(() => ({ [name]: event.nativeEvent.text }));
  }

  saveDetail() {

      this.ref.add({
         Fullname: this.state.fullname,
         Email: this.state.email,
         Password: this.state.encode,
             }).then((docRef) => {
                    })
    .catch((error) => {
       console.error("Error adding document: ", error);
       this.setState({
          fullName: '',
          email   : '',
          password: '',
         });
       });
  }

encryp(plainText){
  var _secretKey = "some-unique-key";
  var simpleCrypto = new SimpleCrypto(_secretKey);
  var chiperText = simpleCrypto.encrypt(plainText);
  return (chiperText);

}



  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onSignUp = ()=>{

   this.state.encode=this.encryp(this.state.password);
   this.saveDetail();
   Alert.alert("signup success");
    this.props.navigation.navigate('LoginPage');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              //onchange={(evt) => this.handleChange(evt, "fullname")}
              onChangeText={(fullName) => this.setState({fullName:fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
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

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onSignUp()}>
          <Text style={styles.signUpText}>Sign up</Text>
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
    backgroundColor: '#00b5ec',
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
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});
