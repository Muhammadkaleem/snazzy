import React from "react";
import { View, TextInput, Image, ScrollView, Text } from "react-native";
import { Header } from "../components/common";
import Card from "./TRpost/Card";
import CardSection from "./TRpost/CardSection";

class Fanbase extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <TextInput
          placeholder="Search here"
          style={{
            marginTop: 0,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "#f2f2f2",
            height: 50,
            paddingLeft: 10
          }}
        />
        <ScrollView>
          <Card>
            <CardSection>
              <View style={{ flexDirecton: "row" }}>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 10 }}
                  source={require("../images/Brand.jpg")}
                />
                <Text>Muhammad kaleem</Text>
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 10 }}
                  source={require("../images/Brand.jpg")}
                />
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 10 }}
                  source={require("../images/Brand.jpg")}
                />
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 10 }}
                  source={require("../images/Brand.jpg")}
                />
              </View>
            </CardSection>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
export default Fanbase;
