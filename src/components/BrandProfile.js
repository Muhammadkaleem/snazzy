import React from "react";
import { View, Image, ImageBackground, Text, Button } from "react-native";

class BrandProfile extends React.Component {
  render() {
    const { FontStyle, miniFontStyle, ButtonStyle } = styles;
    return (
      <View>
        <ImageBackground
          source={require("../images/Brand.jpg")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 24,
            width: "100%",
            height: "75%"
          }}
        >
          <View>
            <Image
              style={{
                height: 100,
                width: 100,
                marginTop: -100,
                borderRadius: 10
              }}
              source={require("../images/Rosse.jpg")}
            />
            <Text style={FontStyle}>Sam jane ben</Text>
            <Text style={miniFontStyle}>US Model</Text>
          </View>
          <View />
        </ImageBackground>
      </View>
    );
  }
}
export default BrandProfile;
const styles = {
  FontStyle: {
    fontSize: 20
  },
  miniFontStyle: {
    fontSize: 16,
    color: "#63707e"
  }
};
