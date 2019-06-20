import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardSection } from "./common";

class CelbFeeds extends React.Component {
  render() {
    const { ImageStyle, mainViewStyle, TextStyle, TextStyleTime } = styles;
    return (
      <View>
        <Card>
          <CardSection>
            <View style={mainViewStyle}>
              <Image
                source={require("../images/Rosse.jpg")}
                style={ImageStyle}
              />
              <View>
                <Text style={TextStyle}>profile Name</Text>
                <Text style={TextStyleTime}>17 mins ago</Text>
              </View>
            </View>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <View>
              <Text>this is our your aor akdj ejakdfjsk ajkdfieial</Text>
            </View>
          </CardSection>
        </Card>
      </View>
    );
  }
}
const styles = {
  ImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 10,
    paddingRight: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  mainViewStyle: {
    flexDirection: "row"
  },
  TextStyle: {
    marginTop: 10,
    size: 100
  },
  TextStyleTime: {
    marginTop: 5,
    fontSize: 10
  }
};
export default CelbFeeds;
