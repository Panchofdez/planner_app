import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CourseSelectionScreen from "./src/screens/CreationStack/CourseSelectionScreen";
import HoursOfStudyScreen from "./src/screens/CreationStack/HoursOfStudyScreen";

const Stack = createStackNavigator();

const CreationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="CourseSelection"
        component={CourseSelectionScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HoursOfStudy"
        component={HoursOfStudyScreen}
      />
    </Stack.Navigator>
  );
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeStack}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Creation"
          component={CreationStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <MainNavigator />;
};
export default App;
