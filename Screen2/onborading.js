import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Onboarding from "react-native-onboarding-swiper";
const onborading = ({ navigation }) => {
  const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "black" : "white";
    return (
      <View
        style={{
          height: 5,
          width: 5,

          marginHorizontal: 5,
          borderRadius: 20,
          backgroundColor,
        }}
      />
    );
  };

  const Skip = ({ ...Props }) => (
    <TouchableOpacity style={{ marginLeft: 10 }} {...Props}>
      <Text>Skip</Text>
    </TouchableOpacity>
  );
  const Done = ({ ...Props }) => (
    <TouchableOpacity style={{ marginRight: 10 }} {...Props}>
      <Text>Done</Text>
    </TouchableOpacity>
  );

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "white",
          image: <Image source={require("../Image/onboarding-img1.png")} />,
          title: "onboarding 1",
          subtitle: "This Is First Screen",
        },
        {
          backgroundColor: "white",
          image: <Image source={require("../Image/onboarding-img2.png")} />,
          title: "onboarding 1",
          subtitle: "This Is First Screen",
        },
        {
          backgroundColor: "white",
          image: <Image source={require("../Image/onboarding-img3.png")} />,
          title: "onboarding 1",
          subtitle: "This Is First Screen",
        },
      ]}
    />
  );
};

export default onborading;
