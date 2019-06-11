import Firebase from 'react-native-firebase';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

class FirebaseService {
  constructor() {
    this.ref = Firebase.firestore().collection('login');
  }
     sear(id) {
       console.log(id);
       this.ref('/login').push({
         username: id

       });
       this.props.navigation.navigate('register');


    }
  }


export const firebaseService = new FirebaseService()
