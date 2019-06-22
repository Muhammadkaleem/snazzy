import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import Card from "./TRpost/Card";
import CardSection from "./TRpost/CardSection";
import Icon from "react-native-vector-icons/Ionicons";

class TrendingPost extends React.Component {
  render() {
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
                  onPress={() => this.props.navigation.navigate("News")}
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
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />

              <Text style={textStyle}>Trending</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Trending</Text>
            </View>

            <View style={ViewStyle}>
              <Image
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Trending</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Trending</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Trending</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Trending</Text>
            </View>
            <View style={ViewStyle}>
              <Image
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />
              <Text style={textStyle}>Trending</Text>
            </View>
          </ScrollView>
        </CardSection>

        <Card>
          <CardSection>
            <View style={TrendingNewsViewStyle}>
              <Text style={TrendingTextStyle}>Trending News</Text>
              <View style={IconViewstyle}>
                <Icon name="md-trending-up" size={20} />
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
    marginLeft: 100
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

export default TrendingPost;
