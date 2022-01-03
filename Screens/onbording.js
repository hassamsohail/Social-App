/** @format */

import React from "react";
import { View, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Onboarding from "react-native-onboarding-swiper";

const onbording = ({ navigation }) => {
  const Nv = navigation;
  const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "black" : "white";
    return (
      <View
        style={{
          height: 5,
          width: 5,

          marginHorizontal: 3,
          borderRadius: 5,
          backgroundColor: backgroundColor,
        }}
      />
    );
  };
  const Skip = ({ ...props }) => (
    <TouchableOpacity style={{ marginLeft: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  );
  const Next = ({ ...props }) => (
    <TouchableOpacity style={{ marginRight: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
  );
  const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginRight: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );
  //sdfkfksufdukf
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => Nv.navigate("Login")}
      onDone={() => Nv.navigate("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../Image/onboarding-img1.png")} />,
          title: "OnBording 1",
          subtitle: "Done with React Native Onbording Swiper",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../Image/onboarding-img2.png")} />,
          title: "OnBording 2",
          subtitle: "Done with React Native Onbording Swiper",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../Image/onboarding-img3.png")} />,
          title: "OnBording 2",
          subtitle: "Done with React Native Onbording Swiper",
        },
      ]}
    />
  );
};

export default onbording;
