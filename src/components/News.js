import React, { Component } from "react";
import { View, ScrollView, Image } from "react-native";
import { Card, CardSection } from "./common";
import TrendingPost from "./TrendingPost";

const News = () => {
  const { ImageStyle } = styles;
  return (
    <ScrollView>
      <TrendingPost />
      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpeg")} style={ImageStyle} />
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpeg")} style={ImageStyle} />
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpeg")} style={ImageStyle} />
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Image source={require("../images/Rosse.jpeg")} style={ImageStyle} />
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
  }
};
export default News;
