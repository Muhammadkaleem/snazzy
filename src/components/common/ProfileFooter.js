import React from "react";
import { View } from "react-native";

const ProfileFooter = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderRadius: 0,
    borderColor: "",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginTop: 0,
    marginRight: 5,
    marginBottom: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
};

export { ProfileFooter };
