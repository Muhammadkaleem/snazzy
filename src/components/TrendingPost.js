import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import Card from "./TRpost/Card";
import CardSection from "./TRpost/CardSection";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import Profile from "./Profile";
class TrendingPost extends React.Component {
  render() {
    console.log("this.props.navigation", this.props);
    const {
      ImageStyle,
      ViewStyle,
      textStyle,
      TrendingTextStyle,
      TrendingNewsViewStyle,
      IconViewstyle,
      IconStyle,
      IconTextStyle
    } = styles;
    return (
      <View>
        <Card>
          <CardSection>
            <View style={TrendingNewsViewStyle}>
              <Text style={TrendingTextStyle}>Trending News</Text>
              <View style={IconViewstyle}>
                <Icon
                  name="md-eye"
                  size={20}
                  onPress={() => {
                    try {
                      console.log("button", "clicked");
                      this.props.navigation.navigate("Profile");
                    } catch (e) {
                      console.log("error", e);
                    }
                  }}
                />
                <Text style={IconTextStyle}>542,543,43432</Text>
                <Icon
                  style={IconStyle}
                  name="md-arrow-round-forward"
                  size={20}
                />
              </View>
            </View>
          </CardSection>
        </Card>
        <CardSection>
          <ScrollView horizontal={true}>
            <View style={ViewStyle}>
              <Image
                source={require("../images/image2.jpg")}
                style={ImageStyle}
              />

              <Text style={textStyle}>jam anderson roy</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/image3.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>wiliumson</Text>
            </View>

            <View style={ViewStyle}>
              <Image
                source={require("../images/image4.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>david Warner</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/image5.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Shahid khan</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/image4.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Rahat Ali</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/image3.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Asif Ali</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/image2.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>M kaleem</Text>
            </View>
          </ScrollView>
        </CardSection>

        <Card>
          <CardSection>
            <View style={TrendingNewsViewStyle}>
              <Text style={TrendingTextStyle}>Trending</Text>
              <View style={IconViewstyle}>
                <Icon
                  style={{ marginLeft: 50 }}
                  name="md-trending-up"
                  size={20}
                />
                <Text style={IconTextStyle}>98,345,6426</Text>
              </View>
            </View>
          </CardSection>
        </Card>
      </View>
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
  },
  TrendingNewsViewStyle: {
    flexDirection: "row"
  },
  IconViewstyle: {
    flexDirection: "row",
    marginLeft: 100,
    height: 30
  },
  IconStyle: {
    marginLeft: 5,
    marginRight: 5
  },
  IconTextStyle: {
    fontSize: 14,
    marginLeft: 5
  }
};

export default withNavigation(TrendingPost);
