import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Input } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CreationScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header Text */}
      <View
        style={{
          backgroundColor: "pink",
          width: windowWidth * 0.6,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#3A62BF",
            textAlign: "center",
          }}
        >
          Let's set up your planner for this term
        </Text>
      </View>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Enter your course
      </Text>
      {/* Add Course Section */}
      <View>
        <AddCourseContainer title="Add Course 1" />
      </View>
    </SafeAreaView>
  );
};

// Add course Container
const AddCourseContainer = ({ title }) => {
  return (
    <View>
      <Input
        placeholder={title}
        containerStyle={{
          height: 44,
          width: windowWidth * 0.6,
          backgroundColor: "white",
          borderRadius: 25,
        }}
        inputContainerStyle={{ borderColor: "white" }}
      />
    </View>
  );
};
export default CreationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
});
