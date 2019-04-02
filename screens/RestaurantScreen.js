// import React from 'react';
// import firebase from 'react-native-firebase';
// import { ScrollView, View, Text, TextInput, Button,FlatList,ListView } from 'react-native';
// import Todo from './Todo';
// import { ListItem } from 'react-native-elements';


// export default class RestaurantScreen extends React.Component {

//   constructor() {
//     super();
//     this.ref = firebase.firestore().collection('todos');
//     this.unsubscribe = null;
//     this.state = {
//         loading: true,
//         todos: [],
//     };
// }

// componentDidMount() {
//   this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
// }

// componentWillUnmount() {
//   this.unsubscribe();
// }

// onCollectionUpdate = (querySnapshot) => {
//   const todos = [];
//   querySnapshot.forEach((doc) => {
//     const { title, complete } = doc.data();
//     todos.push({
//       key: doc.id,
//       doc, // DocumentSnapshot
//       title,
//       complete,
//     });
//   });
//   this.setState({
//     todos,
//     loading: false,
//  });
// }



// render() {
//   if (this.state.loading) {
//     return null; // or render a loading icon
//   }
//   return (
//     <View style={{ flex: 1 }}>
//         <ListView
//           data={this.state.todos}
//           renderItem={({ item }) => <Todo {...item} />}
//         />
//     </View>
//   );
// }


// }


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
import firebase from 'react-native-firebase';
import Todo from './Todo';

export default class RestaurantScreen extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('Restaurant');
    this.unsubscribe = null;
    this.state = {
        loading: true,
        todos: [],
    };
}

componentDidMount() {
  this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
}

componentWillUnmount() {
  this.unsubscribe();
}

onCollectionUpdate = (querySnapshot) => {
  const todos = [];
  querySnapshot.forEach((doc) => {
    const { Name, Place,Rating } = doc.data();
    todos.push({
      key: doc.id,
      doc, // DocumentSnapshot
      Name,
      Place,
      Rating
    });
  });
  this.setState({
    todos,
    loading: false,
 });
}

  render() {
    if (this.state.loading) {
      return null; // or render a loading icon
    }
    return (
      <View style={styles.container}>
        <FlatList  List style={styles.list}
          data={this.state.todos}
          renderItem={({ item }) => <Todo {...item} />}
          keyExtractor= {(item) => {
            return item.Name,item.Place;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Food')}>


               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.Name}</Text>
                    <Text style={styles.time}>{item.Place}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:'https://lorempixel.com/400/200/nature/4/'}}/>
                </TouchableOpacity>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/e74c3c/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>{item.Rating}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/metro/75/3498db/administrator-male.png'}}/>
                        <Text rkType='primary4 hintColor' style={styles.socialBarLabel}>13</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
