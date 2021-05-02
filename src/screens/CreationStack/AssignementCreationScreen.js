import React, { useState } from "react";
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

// Icons
import PlusSign from "../../Images/plusSign.svg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AssignementCreationScreen = ({ navigation, route }) => {
  const { courseList, idx, assignments } = route.params;
  const [numAssignments, setNumAssignments] = useState(1);
  const [numExams, setNumExams] = useState(1);

  const addAssignment = (data, type) => {
    let estimatedHours = getEstimatedHours(data["difficulty"]);
    let recommendedHours = getRecommendedHours(
      estimatedHours,
      data["daysLeft"]
    );
    assignments.push({
      ...data,
      course: title,
      finished: false,
      hoursDaily: recommendedHours,
      estimatedHours,
      hoursLeft: estimatedHours,
    });
    console.log(type);
    if (type === "Assignment") {
      setNumAssignments(numAssignments + 1);
    } else {
      setNumExams(numExams + 1);
    }
  };

  //Estimated Hours (the hours it will take to finish assignment)= Difficulty Score*5
  const getEstimatedHours = (difficultyScore) => {
    return difficultyScore * 5;
  };
  //Hours/Day = Estimated Hours/(Days in advance to work on it)
  const getRecommendedHours = (estimatedHours, days) => {
    return Math.round(estimatedHours / days);
  };
  const showAssignmentInputs = () => {
    const inputs = [];
    for (let i = 0; i < numAssignments; i++) {
      inputs.push(
        <AssignementDetails
          addAssignment={addAssignment}
          key={i}
          type="Assignment"
        />
      );
    }
    return inputs;
  };

  const showExamInputs = () => {
    const inputs = [];
    for (let i = 0; i < numExams; i++) {
      inputs.push(
        <AssignementDetails addAssignment={addAssignment} key={i} type="Exam" />
      );
    }
    return inputs;
  };

  console.log(assignments);
  console.log(idx);
  let title = courseList[idx];
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
            {title}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
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
            marginTop: 20,
          }}
        >
          Assignments/Homework
        </Text>
        {showAssignmentInputs()}

        {/* <Button
          icon={<FontAwesome name="plus" size={24} color="#3A62BF" />}
          buttonStyle={{
            borderRadius: 50,
            backgroundColor: "white",
            height: 50,
            width: 50,
            marginVertical: 10,
          }}
        /> */}

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#3A62BF",
            alignSelf: "flex-start",
            marginLeft: 20,
          }}
        >
          Exams/Quizzes
        </Text>
        {showExamInputs()}

        <Button
          title="Continue"
          buttonStyle={{
            borderRadius: 40,
            backgroundColor: "#3A62BF",
            height: 45,
            width: 200,
            marginVertical: 10,
          }}
          onPress={() => {
            if (idx === courseList.length - 1) {
              navigation.push("HomeScreen", {
                assignments,
              });
            } else {
              console.log("INDEX", idx);
              navigation.push("AssignementCreation", {
                assignments,
                courseList,
                idx: idx + 1,
              });
            }
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
    paddingTop: windowHeight * 0.09,
    alignItems: "center",
  },
});
