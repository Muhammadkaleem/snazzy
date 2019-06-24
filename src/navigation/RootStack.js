import React, { Component } from "react";

import Brand from "../components/Brand";
import News from "../components/News";
import MainNews from "../components/MainNews";
import CelbFeeds from "../components/CelbFeeds";
import { AddButton } from "../components/common";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import { ScreenStack } from "../components/Brand";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SideMenu from "../components/SideMenu";
import Profile from "../components/Profile";
import TrendingPost from "../components/TrendingPost";

let NewsStack = createStackNavigator(
  {
    News: { screen: News },
    Profile: { screen: Profile },
    Brand: { screen: Brand }
  },
  {
    initialRouteName: "News",
    headerMode: "none"
  }
);
export const TopTabs = createMaterialTopTabNavigator(
  {
    HOME: {
      screen: NewsStack,
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
    Adding: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <AddButton /> // Plus button component
      })
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
      screen: Profile,
      navigationOptions: {
        TabBarLable: "Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    tabBarComponent: props => {
      const {
        navigation: {
          state: { index, routes }
        },
        style,
        activeTintColor,
        inactiveTintColor,
        renderIcon,
        jumpTo
      } = props;
      return (
        <ViewOverflow
          style={{
            flexDirection: "row",
            height: 50,
            width: "100%",
            ...style
          }}
        >
          {routes.map((route, idx) => (
            <ViewOverflow
              key={route.key}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableWithoutFeedback onPress={() => jumpTo(route.key)}>
                {renderIcon({
                  route,
                  focused: index === idx,
                  tintColor: index === idx ? activeTintColor : inactiveTintColor
                })}
              </TouchableWithoutFeedback>
            </ViewOverflow>
          ))}
        </ViewOverflow>
      );
    },
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "Black",
      inactiveTintColor: "Black",
      style: {
        backgroundColor: "white"
      },
      tabStyle: {}
    }
  }
);

let DrawerAppNavigator = createDrawerNavigator(
  {
    BottomStack: { screen: BottomStack }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerPosition: "left",
    lazy: true
  }
);

let MainStack = createStackNavigator(
  {
    DrawerAppNavigator: { screen: DrawerAppNavigator }
  },
  {
    initialRouteName: "DrawerAppNavigator",
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
    headerMode: "none",
    animationEnabled: true
  }
);
