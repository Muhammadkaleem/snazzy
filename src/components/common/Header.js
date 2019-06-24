import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.HeaderText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  viewStyle: {
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    paddingTop: 15,
    shadowColor: "#0000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    elevation: 2,
    position: "relative",
    marginTop: 0
  }
};

export { Header };
