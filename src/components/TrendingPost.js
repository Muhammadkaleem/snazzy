import React from "react";
import { Image, Text, View } from "react-native";
import Card from "./TRpost/Card";
import CardSection from "./TRpost/CardSection";

class TrendingPost extends React.Component {
  render() {
    const { ImageStyle, ViewStyle, textStyle, TrendingTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <View style={ViewStyle}>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <Text style={textStyle}>Trending</Text>
          </View>
          <View style={ViewStyle}>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <Text style={textStyle}>Trending</Text>
          </View>

          <View style={ViewStyle}>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <Text style={textStyle}>Trending</Text>
          </View>
          <View style={ViewStyle}>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <Text style={textStyle}>Trending</Text>
          </View>
          <View style={ViewStyle}>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <Text style={textStyle}>Trending</Text>
          </View>
          <View style={ViewStyle}>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <Text style={textStyle}>Trending</Text>
          </View>
          <View style={ViewStyle}>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <Text style={textStyle}>Trending</Text>
          </View>
        </CardSection>
        <CardSection>
          <Text style={TrendingTextStyle}>Trending News</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  ImageStyle: {
    marginLeft: 10,
    width: 50,
    marginTop: 5,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  ViewStyle: {
    flexDirection: "column",
    justifyContent: "space-between"
  },

  textStyle: {
    fontSize: 10,
    marginLeft: 12,
    marginTop: 7
  },
  TrendingTextStyle: {
    marginLeft: 10
  }
};

export default TrendingPost;
