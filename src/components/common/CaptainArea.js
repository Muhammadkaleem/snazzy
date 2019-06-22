import React from "react";
import { View } from "react-native";

const CaptainArea = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderRadius: 2,
    borderColor: "",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    borderRadius: 0
  }
};

export { CaptainArea };
