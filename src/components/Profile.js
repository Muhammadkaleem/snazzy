import React from "react";
import { View, Image, ImageBackground, Text, Button } from "react-native";
import { Header } from "../components/common";

class Profile extends React.Component {
  render() {
    const { FontStyle, miniFontStyle, ButtonStyle } = styles;
    return (
      <View>
        <ImageBackground
          source={require("../images/logo2.png")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2,
            width: "100%",
            height: 300
          }}
        >
          <View style={{ marginTop: 80 }}>
            <Image
              style={{
                height: 100,
                width: 100,
                marginTop: -100,
                borderRadius: 10
              }}
              source={require("../images/profile1.webp")}
            />
            <Text style={FontStyle}>Sam jane ben</Text>
            <Text style={miniFontStyle}>US Model</Text>
          </View>
          <View />
        </ImageBackground>
        <View
          style={{
            backgroundColor: "#F2F2F2",
            justifyContent: "center",
            alignItems: "center",
            height: 65,
            paddingTop: 15,
            position: "relative",
            flexDirection: "row"
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text>18</Text>
            <Text>Gossips</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 60,
              paddingRight: 60
            }}
          >
            <Text>18</Text>
            <Text>Fans</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text>18</Text>
            <Text>News Feeds</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Profile;
const styles = {
  FontStyle: {
    fontSize: 20
  },
  miniFontStyle: {
    fontSize: 16,
    color: "#63707e"
  }
};
