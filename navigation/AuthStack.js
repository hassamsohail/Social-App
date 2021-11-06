import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import onbording from "../Screens/onbording";

import Login from "../Screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppStack = createNativeStackNavigator();

export default function AuthStack() {
  const [IsFirstScreenLogin, setIsFirstScreenLogin] = React.useState(null);
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
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name="onbording"
          component={onbording}
          options={{ headerShown: false }}
        />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    );
  } else {
    return <Login />;
  }
}
