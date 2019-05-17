import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import firebase from 'react-native-firebase';
import { Icon } from 'react-native-elements';


export default class FoodScreen extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('Restaurant/VuHxBkswEcUuq5QAuhMu/Food');
    this.unsubscribe = null;
    this.state = {
        loading: true,
        Food: [],

    };

}



componentDidMount() {
  this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
}

componentWillUnmount() {
  this.unsubscribe();
}

onCollectionUpdate = (querySnapshot) => {
  const Food = [];
  querySnapshot.forEach((doc) => {
    const { Name,Price,Rating,Description,Url} = doc.data();
    Food.push({
      key: doc.id,
      doc, // DocumentSnapshot
      Name,
      Price,
      Rating,
      Description,
      Url
    });
  });
  this.setState({
    Food,
    loading: false,
 });
}

static navigationOptions = {
  title: 'Food',
  headerRight: (
    <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title="+1"

        />
  )
};

render() {
  return (
    <View >
       <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={this.state.Food}
        horizontal={false}
        numColumns={2}
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
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Order',
               {
                Food:item.Name,
                Price:item.Price,
                Description:item.Description,
                Url:item.Url
              }
              );
              }} >

             <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.Name}</Text>
                  <Text style={styles.price}>{item.Price}</Text>
                </View>
              </View>

              <Image style={styles.cardImage} source={{uri:item.Url}}/>

              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <View style={styles.socialBarButton} >
                      <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                      <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                    </View>
                  </View>
                  <View style={styles.socialBarSection}>
                    <View style={styles.socialBarButton}>
                      <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                      <Text style={styles.socialBarLabel}>{item.Rating}</Text>
                    </View>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
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
  paddingHorizontal: 5,
  backgroundColor:"#e2e0e0",
},
listContainer:{
  alignItems:'center'
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
  borderRadius:5,
  shadowOpacity: 0.5,
  shadowRadius: 4,
  marginVertical: 8,
  backgroundColor:"white",
  flexBasis: '47%',
  marginHorizontal: 5,
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
  height: 140,
  width: null,
  borderRadius:5,
  marginLeft:5,
  marginRight:5,

},
/******** card components **************/
title:{
  fontSize:18,
  flex:1,
},
price:{
  fontSize:16,
  color: "green",
  marginTop: 5
},
buyNow:{
  color: "purple",
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
