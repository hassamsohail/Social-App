import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import onbording from "./Screens/onbording";
import Login from "./Screens/Login";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const AppStack = createNativeStackNavigator();

export default function App() {
  const [IsFirstScreenLogin, setIsFirstScreenLogin] = React.useState(null);
  // React.useEffect(() => {
  //   AsyncStorage.getItem("alreadyLaunched").then((Value) => {
  //     if (Value == null) {
  //       AsyncStorage.setItem("alreadyLaunched", "true");
  //       setIsFirstScreenLogin(true);
  //     }
  //   });
  // }, []);
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="onbording"
          component={onbording}
          options={{ headerShown: false }}
        />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
