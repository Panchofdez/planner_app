import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { diff } from "react-native-reanimated";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AssignementDetails = ({ addAssignment, type }) => {
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [weight, setWeight] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [isEditable, setIsEditable] = useState(true);
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          width: windowWidth * 0.9,
          borderRadius: 10,
          marginTop: 20,
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
              editable={isEditable}
              value={description}
              onChangeText={setDescription}
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
                editable={isEditable}
                value={dueDate}
                onChangeText={setDueDate}
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
                editable={isEditable}
                value={weight}
                onChangeText={setWeight}
                placeholder="Weight %"
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
              editable={isEditable}
              // value={difficulty}
              // onChangeText={setDifficulty}
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
      {showButton && (
        <Button
          onPress={() => {
            let date = moment(new Date(dueDate));
            let now = moment(new Date());

            let days = date.diff(now, "days");
            let data = {
              name: description,
              difficulty: 2,
              weight,
              dueDate,
              daysLeft: days,
              type,
            };
            addAssignment(data, type);
            setShowButton(false);
            setIsEditable(false);
          }}
          icon={<FontAwesome name="plus" size={24} color="#3A62BF" />}
          buttonStyle={{
            borderRadius: 50,
            backgroundColor: "white",
            height: 50,
            width: 50,
            marginVertical: 10,
          }}
        />
      )}
    </>
  );
};

export default AssignementDetails;
