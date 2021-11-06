import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { windowheight } from "../HeightAnd Width/Dimension";
const FormsInput = ({
  labelText,
  iconType,
  placeholderText,

  ...rest
}) => {
  return (
    <View style={style.inputerConatiner}>
      <View style={style.iconStyle}>
        <FontAwesome name={iconType} size={20} color="black" />
      </View>
      <View>
        <TextInput
          style={style.input}
          placeholder={placeholderText}
          value={labelText}
          numberOfLines={1}
          placeholderTextColor="#666"
          secureTextEntry={placeholderText == "Password" ? true : false}
          {...rest}
        />
      </View>
    </View>
  );
};

export default FormsInput;

const style = StyleSheet.create({
  inputerConatiner: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: windowheight / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,

    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});
