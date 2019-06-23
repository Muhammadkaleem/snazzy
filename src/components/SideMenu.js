import React, { Component } from "react";
import PropTypes, { FlatList, Image, Text, View } from "react-native";
import { SideMenuItem } from "../components/SideMenuItem";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    const MenuData = [
      {
        icon: (
          <View>
            <Image
              source={require("../images/Brand.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                marginLeft: 20
              }}
            />
            <Text style={{ fontSize: 25, marginTop: 20, marginLeft: 20 }}>
              Guest User
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20 }}>
                <Text>0</Text> Gossip
              </Text>
              <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20 }}>
                <Text>0</Text> Fav
              </Text>
            </View>
          </View>
        )
      },
      {
        name: "Intro Video",
        screenName: "Packages",
        icon: (
          <Icon
            style={{ marginRight: 20 }}
            name="md-arrow-dropright"
            size={20}
          />
        ),
        key: 1
      },
      {
        name: "Gossip Corner",
        screenName: "Packages",
        icon: (
          <Icon style={{ marginRight: 20 }} name="md-chatboxes" size={20} />
        ),
        key: 2
      },

      {
        name: "Spotted",
        screenName: "Packages",
        icon: <Icon style={{ marginRight: 20 }} name="md-camera" size={20} />,
        key: 3
      },
      {
        name: "Search",
        screenName: "Packages",
        icon: <Icon style={{ marginRight: 20 }} name="md-search" size={20} />,
        key: 4
      },

      {
        name: "Celeberties",
        screenName: "Packages",
        icon: <Icon style={{ marginRight: 20 }} name="md-people" size={20} />,
        key: 5
      },
      {
        name: "Notification",
        screenName: "Packages",
        icon: (
          <Icon style={{ marginRight: 20 }} name="md-notifications" size={20} />
        ),
        key: 6
      },

      {
        name: "Account Settings",
        screenName: "Packages",
        icon: <Icon style={{ marginRight: 20 }} name="md-cog" size={20} />,
        key: 7
      },
      {
        name: "About Us",
        screenName: "Packages",
        icon: <Icon style={{ marginRight: 20 }} name="md-help" size={20} />,
        key: 8
      },

      {
        name: "Rate app",
        screenName: "Packages",
        icon: (
          <Icon style={{ marginRight: 20 }} name="md-star-half" size={20} />
        ),
        key: 9
      }
    ];

    return (
      <View style={{ height: "100%", width: "100%" }}>
        <FlatList
          style={{ marginTop: 25, marginBottom: 25 }}
          data={MenuData}
          initialNumToRender={0}
          renderItem={({ item }) => (
            <SideMenuItem
              navigation={navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={<Text>{item.name}</Text>}
              key={item.key}
            />
          )}
        />
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default withNavigation(SideMenu);
