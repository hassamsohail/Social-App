import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FormsInput from "../components/FormsInput";
import FormButton from "../components/FormsButton";
import Socialbtn from "../components/Socialbtn";
const Login = ({ navigation }) => {
  const [Email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <View style={style.container}>
      <Image
        source={require("../assets/rn-social-logo.png")}
        style={style.logo}
      />

      <Text style={style.text}>RN Social App</Text>
      <FormsInput
        labelText={Email}
        placeholderText={"Email"}
        iconType={"user-o"}
        keyboardType="email-address"
        onChangeText={(userEmail) => setEmail(userEmail)}
        autoCapitalize="none"
        autoCorrect={true}
      />
      <FormsInput
        labelText={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText={"Password"}
        iconType={"lock"}
      />
      <View style={{ width: "100%" }}>
        <FormButton buttontitle={"Sign in"} onPress={() => alert("hfdcb")} />
      </View>
      <TouchableOpacity style={style.forgotButton}>
        <Text style={style.navButtonText}>Forget Password</Text>
      </TouchableOpacity>
      <Socialbtn
        btnTitle={"Sign in with Facebook"}
        btnType={"facebook-square"}
        color={"#4867aa"}
        backgroundcolor={"#e6eaf4"}
        onPress={() => alert("hbdffb")}
      />
      <Socialbtn
        btnTitle={"Sign in with Google"}
        btnType={"google"}
        color={"#de4d41"}
        backgroundcolor={"#f5e7e1"}
        onPress={() => alert("hbdffb")}
      />

      <TouchableOpacity
        style={style.forgotButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={style.navButtonText}>
          Don't have an Account? create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafd",
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 20,
    color: "#051d5f",
    marginBottom: 10,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
