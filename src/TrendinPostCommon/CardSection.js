import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};
const styles = {
  containerStyle: {
    padding: 0,
    backgroundColor: "",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "",
    position: "relative",
    borderRadius: 15
  }
};
export { CardSection };
