import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import onborading from "./Screen2/onborading";
import Login from "./Screen2/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AppStack = createNativeStackNavigator();
const App2 = () => {
  const [isAppluched, setisAppluched] = React.useState(null);
  React.useEffect(() => {
    AsyncStorage.getItem("Applunched").then((Value) => {
      if (Value == null) {
        AsyncStorage.setItem("Applunched", "true");
        setisAppluched(true);
      } else {
        setisAppluched(false);
      }
    });
  }, []);
  if (isAppluched == null) {
    return null;
  } else if (isAppluched == true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="onborading" component={onborading} />
          <AppStack.Screen name="Login" component={Login} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Login />;
  }
};

export default App2;
