import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Header, Card, CardSection } from "./src/components/common";
import News from "./src/components/News";

export default function App() {
  return (
    <View>
      <Header />
      <News />
    </View>
  );
}
