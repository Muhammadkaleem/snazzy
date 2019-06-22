import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Brand from "../components/Brand";
import News from "../components/News";
import MainNews from "../components/MainNews";
import CelbFeeds from "../components/CelbFeeds";

import Icon from "react-native-vector-icons/Ionicons";
import TrendingCelebs from "../components/TrendingCelebs";

import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Profile from "../components/Profile";
let TopTabs = createMaterialTopTabNavigator(
  {
    HOME: {
      screen: News,
      navigationOptions: {
        TabBarLable: "Celebs",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contacts" color={tintColor} size={20} />
        )
      }
    },
    CELEBS: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Spotted",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-camera" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    activeTintColor: "black",
    shifting: false
  }
);
export const BottomStack = createMaterialBottomTabNavigator(
  {
    Celebs: {
      screen: MainNews,
      navigationOptions: {
        TabBarLable: "Celebs",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contacts" color={tintColor} size={20} />
        )
      }
    },
    Spotted: {
      screen: News,
      navigationOptions: {
        TabBarLable: "Spotted",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-camera" color={tintColor} size={20} />
        )
      }
    },
    this: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: ".",
        tabBarIcon: ({ tintColor }) => (
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              marginTop: -9,
              borderColor: "#ffff",
              borderWidth: 3
            }}
          >
            <Icon name="md-add" color={tintColor} size={20} />
          </View>
        )
      }
    },
    Brands: {
      screen: Brand,
      navigationOptions: {
        TabBarLable: "Brands",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-pricetags" color={tintColor} size={20} />
        )
      }
    },
    Notifications: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    activeTintColor: "white",
    shifting: false
  }
);

let DrawwerAppNavigator = createDrawerNavigator({
  TopTabs: TopTabs,
  Home: Profile,
  search: TrendingCelebs
});

let MainStack = createStackNavigator(
  {
    DrawwerAppNavigator: { screen: DrawwerAppNavigator },
    BottomStack: { screen: BottomStack }
  },
  {
    initialRouteName: "BottomStack",
    headerMode: "none"
  }
);
export const RootStack = createStackNavigator(
  {
    MainStack: {
      screen: MainStack
    }
  },
  {
    initialRouteName: "MainStack",
    headerMode: "none"
  }
);
