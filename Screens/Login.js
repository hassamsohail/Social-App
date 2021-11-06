import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>This Is Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <View>
          <Text>This IS Sign Up screen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
