import React, { Component } from "react";
import { Text, ImageBackground, View, Image, ScrollView } from "react-native";
import { Card, CardSection } from "./common";
import News from "./News";

class Brand extends Component {
  render() {
    const { MainViewStyle, ImageStyle } = styles;
    return (
      <ImageBackground
        source={require("../images/Brand.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView horizontal={true}>
          <View style={MainViewStyle}>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/Rosse.jpg")}
                  style={ImageStyle}
                  onPress={() => {
                    try {
                      console.log("button", "clicked");
                      this.props.navigation.navigate("BrandProfile");
                    } catch (e) {
                      console.log("error", e);
                    }
                  }}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/Rosse.jpg")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/Rosse.jpg")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/Rosse.jpg")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/Rosse.jpg")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/Rosse.jpg")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
export default Brand;
const styles = {
  MainViewStyle: {
    alignItems: "flex-start",
    justifyCenter: "center",
    marginTop: 400,
    marginLeft: 5,
    flexDirection: "row"
  },
  ImageStyle: { height: 200, width: 110, borderRadius: 10 }
};
