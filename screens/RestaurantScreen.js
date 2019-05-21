
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
import {Icon} from  'react-native-elements';


export default class RestaurantScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection('Restaurant');
    this.unsubscribe = null;
    this.state = {
        loading: true,
        Restaurant: [],
    };
}

componentDidMount() {
  this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
}

componentWillUnmount() {
  this.unsubscribe();
}

onCollectionUpdate = (querySnapshot) => {
  const Restaurant = [];
  querySnapshot.forEach((doc) => {
    const { Name, Place,Rating,Url} = doc.data();
    Restaurant.push({
      key: doc.id,
      doc, // DocumentSnapshot
      Name,
      Place,
      Rating,
      Url
    });
  });
  this.setState({
    Restaurant,
    loading: false,
 });
}

  render() {
    if (this.state.loading) {
      return null; // or render a loading icon
    }
    return (
      <View >
        <FlatList  List style={styles.list}
          data={this.state.Restaurant}
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
              <TouchableOpacity onPress={() => {
            /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Food');
          }} >


               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.Name}</Text>
                    <Text style={styles.time}>{item.Place}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.Url}}/>
                </TouchableOpacity>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                       <Icon name="thumb-up" color='#d11717'/>
                        <Text style={styles.socialBarLabel}>{item.Rating}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                      <Icon name="insert-comment" color='#d11717'/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                      <Icon name="star" color='#d11717'/>
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
    backgroundColor:"#e2e0e0",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#870909',
    borderRadius:5,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 10,
    shadowRadius: 8,
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
    borderRadius:10,
    marginLeft:8,
    marginRight:8,


  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
    color:'black',
    fontWeight: 'bold'
  },
  time:{
    fontSize:13,
    color: "black",
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
