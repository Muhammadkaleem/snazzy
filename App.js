import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStack } from "./src/navigation/RootStack";
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <RootStack />
      </View>
    );
  }
}
