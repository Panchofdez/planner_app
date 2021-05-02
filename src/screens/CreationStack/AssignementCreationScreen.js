import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import AssignementDetails from "../../Components/AssignementDetails";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AssignementCreationScreen = () => {
  return (
    <ScrollView>
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#3A62BF",
            alignSelf: "flex-start",
            marginLeft: 20,
            marginVertical: 10,
          }}
        >
          Assignments/Homework
        </Text>
        <AssignementDetails />

        <Button
          icon={<FontAwesome name="plus" size={24} color="#3A62BF" />}
          buttonStyle={{
            borderRadius: 50,
            backgroundColor: "white",
            height: 50,
            width: 50,
            marginVertical: 10,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#3A62BF",
            alignSelf: "flex-start",
            marginLeft: 20,
            marginVertical: 10,
          }}
        >
          Exams/Quizzes
        </Text>
        <AssignementDetails />
        <Button
          icon={<FontAwesome name="plus" size={24} color="#3A62BF" />}
          buttonStyle={{
            borderRadius: 50,
            backgroundColor: "white",
            height: 50,
            width: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="Continue"
          buttonStyle={{
            borderRadius: 40,
            backgroundColor: "#3A62BF",
            height: 45,
            width: 200,
            marginVertical: 10,
          }}
        />
      </SafeAreaView>
    </ScrollView>
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
