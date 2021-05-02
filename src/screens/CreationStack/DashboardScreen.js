import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//  List of courses
const courseList = [
  { name: "CHEM 120", dailyHoursCompleted: false },
  { name: "PHY 223", dailyHoursCompleted: false },
  { name: "BIO 111", dailyHoursCompleted: false },
  { name: "MAT 100", dailyHoursCompleted: false },
];

//   Updating Study Hours Completion Status
const StudyHoursCompleted = () => {
  const item = {
    id: updatedCourseList.length,
    title: `Add Course ${updatedCourseList.length + 1}`,
  };
  setUpdatedCourseList([...updatedCourseList, item]);
};

const DashboardScreen = () => {
  const [updatedCourseList, setUpdatedCourseList] = useState(courseList);
  // Current Date
  var date = moment().format("dddd, MMMM Do");
  // As user fills checkmarks this will go up
  const [dailyHoursCompleted, setDailyHoursCompleted] = useState(0);
  // Total daily hours of work to do
  const totalHoursTodo = 6;
  const percentComplete = (
    (dailyHoursCompleted / totalHoursTodo) *
    100
  ).toFixed(0);

  console.log(`${percentComplete}%`);
  return (
    <SafeAreaView>
      {/* Header section */}
      <View
        style={{
          backgroundColor: "#4C74D0",
          width: windowWidth,
          height: windowHeight * 0.25,
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          shadowColor: "black",
          paddingTop: windowWidth * 0.1,
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {date}
        </Text>
        {/* Hours left to complete */}
        <View
          style={{
            marginTop: 10,
            width: windowWidth * 0.8,
            height: 42,
            borderRadius: 26,
            backgroundColor: "#CCDDFF",
            alignItems: "center",
            justifyContent: percentComplete === 0 ? "center" : "flex-start",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "100%",
              borderRadius: 25,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
              width: `${percentComplete}%`,
              backgroundColor: "white",
            }}
          >
            {percentComplete >= 50 && (
              <Text
                style={{
                  fontSize: 14,
                  color: "#4C74D0",
                  fontWeight: "bold",
                }}
              >
                0/6 Hours Completed
              </Text>
            )}
          </View>
          {percentComplete < 50 && (
            <Text
              style={{
                fontSize: 14,
                color: "#4C74D0",
                fontWeight: "bold",
              }}
            >
              0/6 Hours Completed
            </Text>
          )}
        </View>
      </View>
      {/* Check list */}
      <View></View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "flex-start",
    paddingTop: windowHeight * 0.15,
    alignItems: "center",
  },
});
