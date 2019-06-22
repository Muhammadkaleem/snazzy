import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Card from "./TRpost/Card";
import CardSection from "./TRpost/CardSection";

class TrendingCelebs extends React.Component {
  render() {
    const {
      ProfileStyle,
      imageStyle,
      mainViewStyle,
      TextStyle,
      MinTextStyle,
      TextViewStyle,
      trendingStyle
    } = styles;

    return (
      <View>
        <ScrollView>
          <Card>
            <CardSection>
              <View style={mainViewStyle}>
                <View style={ProfileStyle}>
                  <Image
                    source={require("../images/Brand.jpg")}
                    style={imageStyle}
                  />
                </View>
                <View style={TextViewStyle}>
                  <Text style={TextStyle}>Muhammad kaleem</Text>
                  <Text style={MinTextStyle}>Bollywood</Text>
                </View>
                <View style={trendingStyle}>
                  <Text>1</Text>
                </View>
              </View>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <View style={mainViewStyle}>
                <View style={ProfileStyle}>
                  <Image
                    source={require("../images/Brand.jpg")}
                    style={imageStyle}
                  />
                </View>
                <View style={TextViewStyle}>
                  <Text style={TextStyle}>Muhammad kaleem</Text>
                  <Text style={MinTextStyle}>Bollywood</Text>
                </View>
                <View style={trendingStyle}>
                  <Text>1</Text>
                </View>
              </View>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <View style={mainViewStyle}>
                <View style={ProfileStyle}>
                  <Image
                    source={require("../images/Brand.jpg")}
                    style={imageStyle}
                  />
                </View>
                <View style={TextViewStyle}>
                  <Text style={TextStyle}>Muhammad kaleem</Text>
                  <Text style={MinTextStyle}>Bollywood</Text>
                </View>
                <View style={trendingStyle}>
                  <Text>1</Text>
                </View>
              </View>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <View style={mainViewStyle}>
                <View style={ProfileStyle}>
                  <Image
                    source={require("../images/Brand.jpg")}
                    style={imageStyle}
                  />
                </View>
                <View style={TextViewStyle}>
                  <Text style={TextStyle}>Muhammad kaleem</Text>
                  <Text style={MinTextStyle}>Bollywood</Text>
                </View>
                <View style={trendingStyle}>
                  <Text>1</Text>
                </View>
              </View>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <View style={mainViewStyle}>
                <View style={ProfileStyle}>
                  <Image
                    source={require("../images/Brand.jpg")}
                    style={imageStyle}
                  />
                </View>
                <View style={TextViewStyle}>
                  <Text style={TextStyle}>Muhammad kaleem</Text>
                  <Text style={MinTextStyle}>Bollywood</Text>
                </View>
                <View style={trendingStyle}>
                  <Text>1</Text>
                </View>
              </View>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <View style={mainViewStyle}>
                <View style={ProfileStyle}>
                  <Image
                    source={require("../images/Brand.jpg")}
                    style={imageStyle}
                  />
                </View>
                <View style={TextViewStyle}>
                  <Text style={TextStyle}>Muhammad kaleem</Text>
                  <Text style={MinTextStyle}>Bollywood</Text>
                </View>
                <View style={trendingStyle}>
                  <Text>1</Text>
                </View>
              </View>
            </CardSection>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  ProfileStyle: {
    height: 50,
    width: 50,
    alignSelf: "flex-start",
    backgroundColor: "red",
    borderRadius: 50,
    marginLeft: 5,
    flexDirection: "row"
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  mainViewStyle: {
    flexDirection: "row"
  },
  TextStyle: {
    marginLeft: 10,
    marginTop: 4,
    fontSize: 16
  },
  MinTextStyle: {
    marginLeft: 10,
    marginTop: 3,
    fontSize: 10
  },
  TextViewStyle: {
    flexDirection: "column"
  },
  trendingStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1d4d4",
    marginLeft: 90,
    marginTop: 10,
    shadowColor: "#fffff",
    shadowOpacity: 5,
    shadowRadius: 10
  }
};
export default TrendingCelebs;
