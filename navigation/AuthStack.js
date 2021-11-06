import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import onbording from "../Screens/onbording";

import Login from "../Screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Signup from "../Screens/Signup";
import Onboarding from "react-native-onboarding-swiper";
const AppStack = createNativeStackNavigator();

export default function AuthStack() {
  const [IsFirstScreenLogin, setIsFirstScreenLogin] = React.useState(null);
  let RouteName;
  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((Value) => {
      if (Value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstScreenLogin(true);
      } else {
        setIsFirstScreenLogin(false);
      }
    });
  }, []);

  if (IsFirstScreenLogin == null) {
    return null;
  } else if (IsFirstScreenLogin == true) {
    RouteName = "Onboarding";
  } else {
    RouteName = "Login";
  }
  return (
    <AppStack.Navigator initialRouteName={RouteName}>
      <AppStack.Screen
        name="onbording"
        component={onbording}
        options={{ headerShown: false }}
      />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Signup" component={Signup} />
    </AppStack.Navigator>
  );
}
