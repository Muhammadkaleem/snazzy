import React, { Component } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Card, CardSection } from "./common";
import TrendingPost from "./TrendingPost";

const News = () => {
  const { ImageStyle, ViewStyle, DecTextStyle } = styles;
  return (
    <ScrollView>
      <TrendingPost />

      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
        </CardSection>
        <CardSection>
          <View style={ViewStyle} />
          <Text style={DecTextStyle}>this is description Text</Text>
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
        </CardSection>
        <CardSection>
          <View style={ViewStyle} />
          <Text style={DecTextStyle}>this is description Text</Text>
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
        </CardSection>
        <CardSection>
          <View style={ViewStyle} />
          <Text style={DecTextStyle}>this is description Text</Text>
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
        </CardSection>
        <CardSection>
          <View style={ViewStyle} />
          <Text style={DecTextStyle}>this is description Text</Text>
        </CardSection>
      </Card>
    </ScrollView>
  );
};
const styles = {
  ImageStyle: {
    width: 350,
    marginTop: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: 250,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  ViewStyle: {
    backgroundColor: "#f2f2f2",
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: -110
  },
  DecTextStyle: {
    marginTop: -50,
    marginLeft: -50,
    color: "white"
  }
};
export default News;
