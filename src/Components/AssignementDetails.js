import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AssignementDetails = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: windowWidth * 0.9,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#F0F0F0",
            width: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            height: 100,
            borderRadius: 8,
            backgroundColor: "#F0F0F0",
          }}
        >
          <Input
            placeholder="Description"
            inputContainerStyle={{ borderColor: "transparent" }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "37%",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#F0F0F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5,
              borderRadius: 8,
              height: 45,
              backgroundColor: "#F0F0F0",
            }}
          >
            <Input
              placeholder="Due Date"
              inputContainerStyle={{
                borderColor: "transparent",
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
              height: 45,
              borderRadius: 8,
              backgroundColor: "#F0F0F0",
              borderColor: "#F0F0F0",
            }}
          >
            <Input
              placeholder="Weight"
              inputContainerStyle={{ borderColor: "transparent" }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          height: 100,
          display: "flex",
          padding: 10,
          paddingTop: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#F0F0F0",
            flex: 1,
            borderRadius: 8,
            backgroundColor: "#F0F0F0",
          }}
        >
          <Input
            placeholder="Difficulty"
            inputContainerStyle={{ borderColor: "transparent" }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};

export default AssignementDetails;
