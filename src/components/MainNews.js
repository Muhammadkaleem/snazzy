import React, { Component } from "react";
import { View, SafeAreaView, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class MainNews extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <View style={{ flexDirection: "row", height: 40, width: "100%" }} />
          <Icon
            style={{ marginLeft: 10, marginBottom: 10, marginTop: 0 }}
            name="md-menu"
            title="open"
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
            size={26}
          />
          <Icon
            style={{ marginLeft: 320, marginTop: -40, marginBottom: 10 }}
            name="md-search"
            title="open"
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
            size={26}
          />
        </View>
      </SafeAreaView>
    );
  }
}
