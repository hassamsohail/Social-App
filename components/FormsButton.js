import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowheight } from "../HeightAnd Width/Dimension";
const FormsButton = ({ buttontitle, ...rest }) => {
  return (
    <TouchableOpacity style={style.btnconatiner} {...rest}>
      <Text style={style.Textdesign}>{buttontitle}</Text>
    </TouchableOpacity>
  );
};

export default FormsButton;

const style = StyleSheet.create({
  btnconatiner: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2e64e5",
    padding: 10,
    height: windowheight / 15,
    width: "100%",
    borderRadius: 3,
  },
  Textdesign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
