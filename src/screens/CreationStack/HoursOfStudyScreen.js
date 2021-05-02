import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  LogBox,
} from "react-native";
import ScrollPicker from "react-native-wheel-scroll-picker";
import { Button } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HoursOfStudyScreen = ({ navigation, route }) => {
  LogBox.ignoreLogs(["Expected style "]);
  const { assignments } = route.params;
  console.log(assignments);
  const [hours, setHours] = useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          width: windowWidth * 0.9,
        }}
      >
        <Text
          style={{
            color: "#3A62BF",
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          How many hours would you like to dedicate to studying every day?
        </Text>
      </View>
      <View
        style={{
          width: windowWidth * 0.5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          I would like to study for a maximum of
        </Text>
        {/* Amount of Hours */}
        <View style={{ height: windowHeight * 0.2 }}>
          <ScrollPicker
            dataSource={["1", "2", "3", "4", "5", "6", "7", "8"]}
            selectedIndex={1}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              setHours(data);
            }}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperBackground={"#F0F0F0"}
            itemHeight={60}
            highlightColor={"#3A62BF"}
            highlightBorderWidth={0}
            activeItemColor={"#3A62BF"}
            itemColor={"#3A62BF"}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Hours per day
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("HomeScreen", { assignments, hours });
        }}
        buttonStyle={{
          height: 46,
          marginTop: windowHeight * 0.1,
          width: windowWidth * 0.45,
          borderRadius: 50,
          backgroundColor: "#3A62BF",
        }}
        title="Finish"
        titleStyle={{ fontWeight: "bold" }}
      />
    </SafeAreaView>
  );
};

export default HoursOfStudyScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: windowHeight * 0.1,
    paddingBottom: windowHeight * 0.05,
  },
});
