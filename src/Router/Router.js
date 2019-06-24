import React from "react";
import { View, Text } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Brand from "../components/Brand";
import Profile from "../components/Profile";
import Icon from "react-native-vector-icons/Ionicons";
const TabIcon = ({ focused, IconName }) => {
  var color = focused ? "#f7b71d" : "#f36886";
  return <Icon name="md-flower" style={iconStyle} size={20} />;
};

const Routes = () => {
  <Router>
    <Scene key="root">
      <Scene key="screenMoov">
        <Scene key="Tab1" title="tab1">
          <Scene key="Brand" title="Brand" component={Profile} />
          <Scene key="Profile" title="Profile" component={Profile} />
        </Scene>
        <Scene key="Tab1" title="tab2" />
      </Scene>
    </Scene>
  </Router>;
};
export default Routes;
