import React, { Component } from "react";
import { Text, ImageBackground, View, Image, ScrollView } from "react-native";
import { Card, CardSection } from "./common";
import { createStackNavigator } from "react-navigation";
import Profile from "./Profile";
import { ActionConst } from "react-native-router-flux";

class Brand extends Component {
  render() {
    const { MainViewStyle, ImageStyle } = styles;
    return (
      <ImageBackground
        source={require("../images/Brand.jpg")}
        onPress={() => this.navigte()}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView horizontal={true}>
          <View style={MainViewStyle}>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/logo1.png")}
                  style={ImageStyle}
                  onPress={() => {
                    try {
                      console.log("button", "clicked");
                      this.props.navigation.navigate("Profile");
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
                  source={require("../images/logo2.png")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/logo3.png")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/logo4.png")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/logo5.png")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <Image
                  source={require("../images/logo2.png")}
                  style={ImageStyle}
                />
              </CardSection>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
  navigate() {
    Action.Profile();
  }
}
export default Brand;
const styles = {
  MainViewStyle: {
    alignItems: "flex-start",
    justifyCenter: "center",
    marginTop: 350,
    marginLeft: 5,
    flexDirection: "row"
  },
  ImageStyle: { height: 200, width: 110, borderRadius: 10 }
};
