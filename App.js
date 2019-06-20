import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Header, Card, CardSection } from "./src/components/common";
import News from "./src/components/News";
import CelbFeeds from "./src/components/CelbFeeds";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createMaterialTopTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

function App() {
  return <View />;
}
export default createMaterialBottomTabNavigator(
  {
    Celebrities: {
      screen: News,
      navigationOptions: {
        TabBarLable: "Celebrities",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contacts" color={tintColor} size={24} />
        )
      }
    },
    Spotted: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Spotted",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-camera" color={tintColor} size={24} />
        )
      }
    },
    Brands: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Brands",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-ribbon" color={tintColor} size={24} />
        )
      }
    },
    Notifications: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    activeTintColor: "white",
    shifting: false
  }
);
