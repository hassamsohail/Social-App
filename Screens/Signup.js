import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FormsInput from "../components/FormsInput";
import FormButton from "../components/FormsButton";
import Socialbtn from "../components/Socialbtn";
const Signup = ({ navigation }) => {
  const [Email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [Confirmpassword, setConfirmpassword] = React.useState();
  return (
    <View style={style.container}>
      <Text style={style.text}>Create An Account</Text>
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
      <FormsInput
        labelText={Confirmpassword}
        onChangeText={(userConfirmPassword) =>
          setConfirmpassword(userConfirmPassword)
        }
        placeholderText={"Confirm Password"}
        iconType={"lock"}
        secureTextEntry={true}
      />
      <View style={{ width: "100%" }}>
        <FormButton buttontitle={"Sign up"} onPress={() => alert("hfdcb")} />
      </View>
      <View style={style.textPrivate}>
        <Text style={style.color_textPrivate}>
          By register ? you Confirm that you accept our
        </Text>
        <TouchableOpacity onPress={() => alert("This Terms of service")}>
          <Text style={[style.color_textPrivate, { color: "#e88832" }]}>
            terms of service
          </Text>
        </TouchableOpacity>
        <Text
          style={[style.color_textPrivate, { marginLeft: 5, marginRight: 5 }]}
        >
          and
        </Text>
        <TouchableOpacity onPress={() => alert("This is privacy policy")}>
          <Text style={[style.color_textPrivate, { color: "#e88832" }]}>
            privacy policy
          </Text>
        </TouchableOpacity>
      </View>
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

export default Signup;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafd",
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
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    // fontFamily: "Lato-Regular",
    color: "grey",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
});
