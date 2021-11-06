import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
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
      <AppStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Signup"
        component={Signup}
        options={({ navigation }) => ({
          title: " ",
          headerStyle: {
            backgroundColor: "#f9fafd",
            // shadowColor: "#f9fafd",
            // elevation: 0,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 5 }}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                color="#333"
                backgroundColor="#f9fafd"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
            // <FontAwesome name="long-arrow-left" size={24} color="black" />
          ),
        })}
      />
    </AppStack.Navigator>
  );
}
