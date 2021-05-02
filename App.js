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
import InfoSlidesScreen from "./src/screens/CreationStack/InfoSlidesScreen";

const Stack = createStackNavigator();

const CreationStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="InfoSlides"
          component={InfoSlidesScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CourseSelection"
          component={CourseSelectionScreen}
        /> */}
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="AssignementCreation"
          component={AssignementCreationScreen}
        /> */}
        {/* <Stack.Screen
        options={{ headerShown: false }}
        name="HoursOfStudy"
        component={HoursOfStudyScreen}
      /> */}
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Calendar"
          component={CalendarScreen}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={DashboardScreen}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeStack}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <MainNavigator />;
};
export default App;
