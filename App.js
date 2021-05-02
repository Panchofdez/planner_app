import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CourseSelectionScreen from "./src/screens/CreationStack/CourseSelectionScreen";
import HoursOfStudyScreen from "./src/screens/CreationStack/HoursOfStudyScreen";
import AssignementCreationScreen from "./src/screens/CreationStack/AssignementCreationScreen";
import DashboardScreen from "./src/screens/CreationStack/DashboardScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import configureStore from "./src/store";
import { Provider } from "react-redux";
import InfoSlidesScreen from "./src/screens/CreationStack/InfoSlidesScreen";
import * as Font from "expo-font";

const Stack = createStackNavigator();

const store = configureStore();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="InfoSlides"
          component={InfoSlidesScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CourseSelection"
          component={CourseSelectionScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AssignementCreation"
          component={AssignementCreationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HoursOfStudy"
          component={HoursOfStudyScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Calendar"
          component={CalendarScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={DashboardScreen}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  let [fontsLoaded] = Font.useFonts({
    BasisGrotesquePro_Bold: require("./assets/fonts/BasisGrotesquePro-Bold.ttf"),
    BasisGrotesquePro: require("./assets/fonts/BasisGrotesquePro-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
};
export default App;
