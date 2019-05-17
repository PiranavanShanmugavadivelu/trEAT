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
  Button,
  TextInput
} from 'react-native';

export default class OrderScreen extends Component {

  constructor(props) {
    super(props);
  }

  clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart")
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Food'),
    };
  };

  render() {
    const { navigation } = this.props;
    const Food = navigation.getParam('Food');
    const Price = navigation.getParam('Price');
    const Description=navigation.getParam('Description');
    const Url=navigation.getParam('Url');
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:(Url)}}/>
            <Text style={styles.name}>{(Food)}</Text>
            <Text style={styles.price}>Rs {(Price)}</Text>
            <Text style={styles.description}>
            {(Description)}
            </Text>
          </View>
          <View style={styles.starContainer}>
            {/* <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/> */}
          </View>
          <View style={styles.contentColors}>
            {/* <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00BFFF"}]}></TouchableOpacity>
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF1493"}]}></TouchableOpacity>
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00CED1"}]}></TouchableOpacity>
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#228B22"}]}></TouchableOpacity>
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#20B2AA"}]}></TouchableOpacity>
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF4500"}]}></TouchableOpacity> */}
          </View>

            {/* <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity> */}
            <TextInput
             placeholder="Quantity"
             underlineColorAndroid='transparent'
             style={styles.TextInputStyle}
              keyboardType={'numeric'}
            />
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Basket</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:300,
    height:200,
    // flex: 1,
    // height: 150,
    // width: null,
    borderRadius:10,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center',
    marginHorizontal:30,
    flexDirection:'row',
    marginTop:20
  },
  contentColors:{
    justifyContent:'center',
    marginHorizontal:30,
    flexDirection:'row',
    marginTop:20
  },
  contentSize:{
    justifyContent:'center',
    marginHorizontal:30,
    flexDirection:'row',
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#c6d8f4',
    flex:1,
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    marginLeft:60,
    marginRight:60,
    borderColor: '#009688',
    marginBottom: 10
}
});
