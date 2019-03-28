// import React from 'react';
// import { Text, View } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Icon from "react-native-vector-icons";

// class Home extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }


// const RootStack = createBottomTabNavigator({
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarLabel: "Home",
//         tabBarIcon: ({ tintColor, focused }) => (
//           <Icon
//             name={"comment"}
//             size={26}

//           />
//         )
//       }
//     }
// });

// export default createAppContainer(RootStack);
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>AATHIURI HOME shifran!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settingvethiiii</Text>
      </View>
    );
  }
}

const RootStack = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(RootStack);
