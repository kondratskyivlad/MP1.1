import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>Кондрацький Владислав</Text>
            <Text>Група ІО-83</Text>
            <Text>ЗК ІО-8314</Text>
        </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
    {
      Home: { screen: Home,
        navigationOptions:{
          tabBarLabel:'Home',
          tabBarIcon: ({ tintColor }) => (
              <View>
                <Icon
                    style={[{color: '#ffcc00'}]}
                    size={25}
                    name={'ios-home'}
                />
              </View>),
            activeColor: '#ffcc00',
            inactiveColor: '#ffcc00',
            barStyle: { backgroundColor: '#000' },
        }
      },
      Profile: { screen: Profile,
        navigationOptions:{
          tabBarLabel:'Profile',
          tabBarIcon: ({ tintColor }) => (
              <View>
                <Icon
                    style={[{color: '#ffcc00'}]}
                    size={25}
                    name={'ios-person'}
                />
              </View>),
          activeColor: '#ffcc00',
          inactiveColor: '#ffcc00',
          barStyle: { backgroundColor: '#000' },
        }
      },
    },
    {
      initialRouteName: "Home",
      activeColor: '#fff',
      inactiveColor: '#fff',
      barStyle: { backgroundColor: '#000' },
    },
);

export default createAppContainer(TabNavigator);
