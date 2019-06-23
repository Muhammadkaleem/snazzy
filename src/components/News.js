import React, {Component} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {Card, CardSection} from "./common";
import TrendingPost from "./TrendingPost";
import Icon from "react-native-vector-icons/Ionicons";
import {withNavigation} from 'react-navigation'

const News = props => {
  console.log("props", props);
  const {
    ImageStyle,
    ViewStyle,
    DecTextStyle,
    flameStyle,
    ViewTextStyle,
    iconStyle,
    PlusButtonsStyle
  } = styles;
  return (
    <View>
      <ScrollView>
        <TrendingPost navigation={props.navigation}/>

        <Card>
          <CardSection>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <View style={flameStyle}>
              <Icon name="md-eye" style={iconStyle} size={20} />
              <Text style={ViewTextStyle}>4.5k</Text>
              <Icon name="md-flower" style={iconStyle} size={20} />
            </View>
          </CardSection>

          <CardSection>
            <View style={ViewStyle} />
            <Text style={DecTextStyle}>this is description Text</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <View style={flameStyle}>
              <Icon name="md-eye" style={iconStyle} size={20} />
              <Text style={ViewTextStyle}>4.5k</Text>
              <Icon name="md-flower" style={iconStyle} size={20} />
            </View>
          </CardSection>

          <CardSection>
            <View style={ViewStyle} />
            <Text style={DecTextStyle}>this is description Text</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <View style={flameStyle}>
              <Icon name="md-eye" style={iconStyle} size={20} />
              <Text style={ViewTextStyle}>4.5k</Text>
              <Icon name="md-flower" style={iconStyle} size={20} />
            </View>
          </CardSection>

          <CardSection>
            <View style={ViewStyle} />
            <Text style={DecTextStyle}>this is description Text</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <View style={flameStyle}>
              <Icon name="md-eye" style={iconStyle} size={20} />
              <Text style={ViewTextStyle}>4.5k</Text>
              <Icon name="md-flower" style={iconStyle} size={20} />
            </View>
          </CardSection>

          <CardSection>
            <View style={ViewStyle} />
            <Text style={DecTextStyle}>this is description Text</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <View style={flameStyle}>
              <Icon name="md-eye" style={iconStyle} size={20} />
              <Text style={ViewTextStyle}>4.5k</Text>
              <Icon name="md-flower" style={iconStyle} size={20} />
            </View>
          </CardSection>

          <CardSection>
            <View style={ViewStyle} />
            <Text style={DecTextStyle}>this is description Text</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <View style={flameStyle}>
              <Icon name="md-eye" style={iconStyle} size={20} />
              <Text style={ViewTextStyle}>4.5k</Text>
              <Icon name="md-flower" style={iconStyle} size={20} />
            </View>
          </CardSection>

          <CardSection>
            <View style={ViewStyle} />
            <Text style={DecTextStyle}>this is description Text</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Image source={require("../images/Rosse.jpg")} style={ImageStyle} />
            <View style={flameStyle}>
              <Icon name="md-eye" style={iconStyle} size={20} />
              <Text style={ViewTextStyle}>4.5k</Text>
              <Icon name="md-flower" style={iconStyle} size={20} />
            </View>
          </CardSection>

          <CardSection>
            <View style={ViewStyle} />
            <Text style={DecTextStyle}>this is description Text</Text>
          </CardSection>
        </Card>
      </ScrollView>
    </View>
  );
};
const styles = {
  ImageStyle: {
    width: 350,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 2,
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
  },
  flameStyle: {
    marginLeft: -105,
    flexDirection: "row",
    height: 30,
    width: 100,
    backgroundColor: "#414141",
    alignItem: "center",
    justifyContent: "center",
    marginTop: 10,

    borderRadius: 7,
    position: "relative"
  },
  ViewTextStyle: {
    marginLeft: 7,
    marginRight: 7,
    color: "#f2f2f2",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5
  },
  iconStyle: {
    marginBottom: 5,
    marginTop: 5,
    color: "#f2f2f2"
  },
  PlusButtonsStyle: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: "green",
    flexDirection: "row",
    height: 80,
    alignItems: "center"
  }
};

export default withNavigation(News);
