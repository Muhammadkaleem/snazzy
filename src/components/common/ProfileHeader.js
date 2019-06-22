import React from "react";
import { View } from "react-native";

const ProHeader = props => {
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
    marginRight: 5,
    marginTop: 0,
    marginBottom: 0,
    borderTopLeftRadius: 10,

    borderTopRightRadius: 10
  }
};

export { ProHeader };
