import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  Card,
  CardSection,
  ProHeader,
  ProfileFooter,
  CaptainArea,
  PostArea
} from "./common";
import Icon from "react-native-vector-icons/Ionicons";

class CelbFeeds extends React.Component {
  render() {
    const {
      ImageStyle,
      mainViewStyle,
      TextStyle,
      TextStyleTime,
      iconStyle,
      iconViewStyle,
      PostImageStyle,
      CaptainViewStyle,
      flameStyle,
      ViewTextStyle,
      ViewStyle,
      DecTextStyle
    } = styles;
    return (
      <ScrollView>
        <ProHeader>
          <CardSection>
            <View style={mainViewStyle}>
              <Image
                source={require("../images/image2.jpg")}
                style={ImageStyle}
              />
              <View>
                <Text style={TextStyle}>profile Name</Text>
                <Text style={TextStyleTime}>17 mins ago</Text>
              </View>
            </View>
          </CardSection>
          <Card />
        </ProHeader>
        <CaptainArea>
          <CardSection>
            <View style={CaptainViewStyle}>
              <Text>
                this is an Awesome picture that is download from internet{" "}
              </Text>
            </View>
          </CardSection>
        </CaptainArea>

        <PostArea>
          <CardSection>
            <Image
              source={require("../images/image3.jpg")}
              style={PostImageStyle}
            />
          </CardSection>
        </PostArea>

        <ProfileFooter>
          <View style={iconViewStyle}>
            <Icon name="md-heart" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
          </View>
        </ProfileFooter>

        <ProHeader>
          <CardSection>
            <View style={mainViewStyle}>
              <Image
                source={require("../images/image4.jpg")}
                style={ImageStyle}
              />
              <View>
                <Text style={TextStyle}>profile Name</Text>
                <Text style={TextStyleTime}>17 mins ago</Text>
              </View>
            </View>
          </CardSection>
          <Card />
        </ProHeader>
        <CaptainArea>
          <CardSection>
            <View style={CaptainViewStyle}>
              <Text>
                this is an Awesome picture that is download from internet{" "}
              </Text>
            </View>
          </CardSection>
        </CaptainArea>

        <PostArea>
          <CardSection>
            <Image
              source={require("../images/image5.jpg")}
              style={PostImageStyle}
            />
          </CardSection>
        </PostArea>

        <ProfileFooter>
          <View style={iconViewStyle}>
            <Icon name="md-heart" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
          </View>
        </ProfileFooter>

        <ProHeader>
          <CardSection>
            <View style={mainViewStyle}>
              <Image
                source={require("../images/image3.jpg")}
                style={ImageStyle}
              />
              <View>
                <Text style={TextStyle}>profile Name</Text>
                <Text style={TextStyleTime}>17 mins ago</Text>
              </View>
            </View>
          </CardSection>
          <Card />
        </ProHeader>
        <CaptainArea>
          <CardSection>
            <View style={CaptainViewStyle}>
              <Text>
                this is an Awesome picture that is download from internet{" "}
              </Text>
            </View>
          </CardSection>
        </CaptainArea>

        <PostArea>
          <CardSection>
            <Image
              source={require("../images/image2.jpg")}
              style={PostImageStyle}
            />
          </CardSection>
        </PostArea>

        <ProfileFooter>
          <View style={iconViewStyle}>
            <Icon name="md-heart" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
          </View>
        </ProfileFooter>

        <ProHeader>
          <CardSection>
            <View style={mainViewStyle}>
              <Image
                source={require("../images/image5.jpg")}
                style={ImageStyle}
              />
              <View>
                <Text style={TextStyle}>profile Name</Text>
                <Text style={TextStyleTime}>17 mins ago</Text>
              </View>
            </View>
          </CardSection>
          <Card />
        </ProHeader>
        <CaptainArea>
          <CardSection>
            <View style={CaptainViewStyle}>
              <Text>
                this is an Awesome picture that is download from internet
              </Text>
            </View>
          </CardSection>
        </CaptainArea>

        <PostArea>
          <CardSection>
            <Image
              source={require("../images/image2.jpg")}
              style={PostImageStyle}
            />
          </CardSection>
        </PostArea>

        <ProfileFooter>
          <View style={iconViewStyle}>
            <Icon name="md-heart" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
            <Icon name="md-flower" style={iconStyle} size={20} />
          </View>
        </ProfileFooter>
      </ScrollView>
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
    fontSize: 10
  },
  TextStyleTime: {
    marginTop: 5,
    fontSize: 10
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
    marginTop: 0,
    marginLeft: 0,
    color: "white",
    borderLeft: 5
  },
  iconStyle: {
    marginBottom: 10,
    marginTop: 10
  },
  iconViewStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 40,
    paddingLeft: 40
  },
  PostImageStyle: {
    flex: 1,
    marginTop: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: 400,
    borderRadius: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2
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
  ViewStyle: {
    backgroundColor: "#f2f2f2",
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: -110
  },
  CaptainViewStyle: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5
  }
};
export default CelbFeeds;
