import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import App2 from "./App2";
import App from "./App";
// import FormsButton from "./components/FormsButton";
import FormsInput from "./components/FormsInput";
import Socialbtn from "./components/Socialbtn";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
