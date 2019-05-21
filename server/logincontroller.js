import firebase from 'react-native-firebase';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

class FirebaseService {
  constructor() {
    this.ref = firebase.firestore().collection('login')
  }
async load(id) {
    const doc = await this.ref.doc(id).get()
    if (doc.exists) {
       this.props.navigation.navigate('App')}

     else {
      Alert.alert('username and password doesn\'t match')
      }

    }
  }


export const firebaseService = new FirebaseService()
