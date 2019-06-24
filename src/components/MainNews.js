import React, { Component } from "react";
import { View, SafeAreaView, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TopTabs } from "../navigation/RootStack";
import Profile from "./Profile";
import News from "./News";

export default class MainNews extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            width: "100%",
            justifyCenter: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 10,
              width: 40,
              height: 40,
              justifyContent: "center"
            }}
          >
            <Icon
              name="md-menu"
              title="open"
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
              size={26}
            />
          </View>
          <View
            style={{
              position: "absolute",
              marginLeft: 100,
              width: 150,
              height: 30,
              justifyContent: "center",
              alignSelf: "center"
            }}
          >
            <Image
              style={{
                position: "absolute",
                left: 10,
                width: 150,
                height: 30,
                justifyContent: "center",
                borderRadius: 4
              }}
              source={require("../images/logo2.png")}
            />
          </View>
          <View
            style={{
              position: "absolute",
              right: 10,
              width: 40,
              height: 40,
              justifyContent: "center"
            }}
          >
            <Icon
              name="md-search"
              title="open"
              onPress={() => {
                this.props.navigation.navigate("News");
              }}
              size={26}
            />
          </View>
        </View>
        <TopTabs />
      </SafeAreaView>
    );
  }
}
