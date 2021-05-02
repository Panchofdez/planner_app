import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { diff } from "react-native-reanimated";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";

// Icons
import Happy from "../Images/happy";
import Normal from "../Images/normal";
import Sad from "../Images/sad";
import PlusSign from "../Images/plusSign.svg";
import HappySelected from "../Images/happySelected";
import NormalSelected from "../Images/normalSelected";
import SadSelected from "../Images/sadSelected";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AssignementDetails = ({ addAssignment, type }) => {
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [weight, setWeight] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [isEditable, setIsEditable] = useState(true);

  // difficulty states
  const [sad, setSad] = useState(false);
  const [normal, setNormal] = useState(false);
  const [happy, setHappy] = useState(false);

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          width: windowWidth * 0.9,
          borderRadius: 10,
          height: 176,
          borderRadius: 22,
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
              height: 73,
              borderRadius: 8,
              backgroundColor: "#F0F0F0",
            }}
          >
            <Input
              editable={isEditable}
              value={description}
              onChangeText={setDescription}
              placeholder="Name"
              textAlign="center"
              placeholderTextColor="rgba(79,116,208,0.5)"
              inputStyle={{
                color: "rgb(79,116,208)",
                // fontWeight: "bold",
                fontFamily: "BasisGrotesquePro_Bold",
              }}
              containerStyle={{
                height: 44,
                marginTop: 30,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
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
                height: 33,
                backgroundColor: "#F0F0F0",
              }}
            >
              <Input
                editable={isEditable}
                value={dueDate}
                onChangeText={setDueDate}
                placeholder="Due Date"
                textAlign="center"
                placeholderTextColor="rgba(79,116,208,0.5)"
                inputStyle={{
                  color: "rgb(79,116,208)",
                  // fontWeight: "bold",
                  fontFamily: "BasisGrotesquePro_Bold",
                }}
                containerStyle={{
                  height: 44,
                  borderRadius: 25,
                  marginTop: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                inputContainerStyle={{
                  borderColor: "transparent",
                  justifyContent: "center",
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
                height: 33,
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
                keyboardType="number-pad"
                inputContainerStyle={{ borderColor: "transparent" }}
                placeholderTextColor="rgba(79,116,208,0.5)"
                inputStyle={{
                  color: "rgb(79,116,208)",
                  // fontWeight: "bold",
                  fontFamily: "BasisGrotesquePro_Bold",
                }}
                containerStyle={{
                  height: 44,
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 25,
                  marginLeft: 30,
                }}
                inputContainerStyle={{
                  borderColor: "transparent",
                  justifyContent: "center",
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: -6,
            display: "flex",
            padding: 10,
            height: 85,
            paddingTop: 5,
            justifyContent: "center",
            alignItems: "center",
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
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "rgba(79,116,208,0.5)",
                // fontWeight: "bold",
                fontFamily: "BasisGrotesquePro_Bold",
                fontSize: 18,
                marginBottom: 7,
              }}
            >
              Difficulty
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                marginBottom: 7,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setSad(true);
                  setHappy(false);
                  setNormal(false);
                }}
              >
                <Text
                  style={{
                    color: !sad ? "rgba(79,116,208,0.5)" : "rgba(79,116,208,1)",
                    // fontWeight: "bold",
                    fontFamily: "BasisGrotesquePro_Bold",
                    fontSize: 18,
                  }}
                >
                  Easy
                </Text>
                {/* {!sad && <Sad />}
                {sad && <SadSelected />} */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSad(false);
                  setHappy(false);
                  setNormal(true);
                }}
              >
                <Text
                  style={{
                    color: !normal
                      ? "rgba(79,116,208,0.5)"
                      : "rgba(79,116,208,1)",
                    // fontWeight: "bold",
                    fontFamily: "BasisGrotesquePro_Bold",
                    fontSize: 18,
                  }}
                >
                  Normal
                </Text>
                {/* {!normal && <Normal />}
                {normal && <NormalSelected />} */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSad(false);
                  setHappy(true);
                  setNormal(false);
                }}
              >
                <Text
                  style={{
                    color: !happy
                      ? "rgba(79,116,208,0.5)"
                      : "rgba(79,116,208,1)",
                    // fontWeight: "bold",
                    fontFamily: "BasisGrotesquePro_Bold",
                    fontSize: 18,
                  }}
                >
                  Hard
                </Text>
                {/* {!happy && <Happy />}
                {happy && <HappySelected />} */}
              </TouchableOpacity>
            </View>
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
          icon={<PlusSign />}
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
