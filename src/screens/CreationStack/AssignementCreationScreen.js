import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AssignementCreationScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ alignItems: "center", width: windowWidth * 0.6 }}>
        <Text
          style={{
            fontSize: 20,
            color: "#3A62BF",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          CHEM 130
        </Text>
        <Text style={{ textAlign: "center" }}>
          Enter all the following information regarding this course
        </Text>
      </View>
      {/* Assignement Details Component */}
    </SafeAreaView>
  );
};

export default AssignementCreationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "flex-start",
    paddingTop: windowHeight * 0.15,
    alignItems: "center",
  },
});
