import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import GameScreen from '../screens/GameScreen';
import ApplyScreen from '../screens/ApplyScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
    />
  ),
};


const AboutStack = createStackNavigator({
  About: AboutScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'CNV',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information${focused ? '' : '-outline'}` : 'md-information'}
    />
  ),
};

const GameStack = createStackNavigator({
  Game: GameScreen,
});

GameStack.navigationOptions = {
  tabBarLabel: 'Jouer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `logo-game-controller-b${focused ? '' : '-outline'}` : 'logo-game-controller-b'}
    />
  ),
};

const ApplyStack = createStackNavigator({
  Apply: ApplyScreen,
});

ApplyStack.navigationOptions = {
  tabBarLabel: 'Appliquer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AboutStack,
  GameStack,
  ApplyStack,
});
