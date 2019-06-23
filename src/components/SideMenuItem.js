import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SideMenuItem = ({ navigation, icon, name, screenName }) => (
  <TouchableOpacity style={styles.menuItem}>
    {icon}
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
    marginEnd: 25,
    paddingTop: 8,
    paddingBottom: 6
  },
  menuItemText: {
    flex: 1,
    color: "black",
    fontSize: 18,
    fontWeight: "300",
    margin: 0,
    paddingLeft: 0
  },
  icon: {
    width: 25,
    height: 25,
    margin: 16,
    marginLeft: 0
  }
});
