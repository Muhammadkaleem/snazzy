import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("Dashboard")}
          title="Welcome Screen"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("")}
          title="Welcome Screen"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Text>Dashboard screen</Text>
      </View>
    );
  }
}

class Settings extends React.Component {
  render() {
    return (
      <View>
        <Text>Dashboard screen</Text>
      </View>
    );
  }
}

class Feeds extends React.Component {
  render() {
    return (
      <View>
        <Text>Dashboard screen</Text>
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator({
  Feeds,
  Settings
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardTabNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});
const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
