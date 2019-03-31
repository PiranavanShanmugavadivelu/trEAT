// import React from 'react';
// import firebase from 'react-native-firebase';
// import { ScrollView, View, Text, TextInput, Button,FlatList } from 'react-native';
// import Todo from './Todo';


// export default class RestaurantScreen extends React.Component {

//   constructor() {
//     super();
//     this.ref = firebase.firestore().collection('todos');
//     this.unsubscribe = null;
//     this.state = {
//         textInput: '',
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

// updateTextInput(value) {
//   this.setState({ textInput: value });
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

// addTodo() {
//   this.ref.add({
//     title: this.state.textInput,
//     complete: false,
//   });
//   this.setState({
//     textInput: '',
//   });
// }

// render() {
//   if (this.state.loading) {
//     return null; // or render a loading icon
//   }
//   return (
//     <View style={{ flex: 1 }}>
//         <FlatList
//           data={this.state.todos}
//           renderItem={({ item }) => <Todo {...item} />}
//         />
//         <TextInput
//             placeholder={'Add TODO'}
//             value={this.state.textInput}
//             onChangeText={(text) => this.updateTextInput(text)}
//         />
//         <Button
//             title={'Add TODO'}
//             disabled={!this.state.textInput.length}
//             onPress={() => this.addTodo()}
//         />
//     </View>
//   );
// }


// }

// ``

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

export default class RestaurantScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"https://lorempixel.com/400/200/nature/6/"},
        {id:2, title: "Sit amet, consectetuer",             time:"2 minutes a go", image:"https://lorempixel.com/400/200/nature/5/"} ,
        {id:3, title: "Dipiscing elit. Aenean ",            time:"3 hour a go",    image:"https://lorempixel.com/400/200/nature/4/"},
        {id:4, title: "Commodo ligula eget dolor.",         time:"4 months a go",  image:"https://lorempixel.com/400/200/nature/6/"},
        {id:5, title: "Aenean massa. Cum sociis",           time:"5 weeks a go",   image:"https://lorempixel.com/400/200/sports/1/"},
        {id:6, title: "Natoque penatibus et magnis",        time:"6 year a go",    image:"https://lorempixel.com/400/200/nature/8/"},
        {id:7, title: "Dis parturient montes, nascetur",    time:"7 minutes a go", image:"https://lorempixel.com/400/200/nature/1/"},
        {id:8, title: "Ridiculus mus. Donec quam",          time:"8 days a go",    image:"https://lorempixel.com/400/200/nature/3/"},
        {id:9, title: "Felis, ultricies nec, pellentesque", time:"9 minutes a go", image:"https://lorempixel.com/400/200/nature/4/"},
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
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

               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>

                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/e74c3c/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>78</Text>
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
