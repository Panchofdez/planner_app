import React from "react";
import { View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AssignementDetails = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: windowWidth * 0.9,
      }}
    ></View>
  );
};

export default AssignementDetails;
