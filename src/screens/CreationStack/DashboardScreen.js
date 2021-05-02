import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import moment from "moment";
import { TouchableOpacity } from "react-native";

//  Icons
import CheckMark from "../../Images/checkMark.svg";
import ArrowForward from "../../Images/arrowForward.svg";
import Arrowback from "../../Images/arrowBack.svg";
import CalendarIcon from "../../Images/calendarIcon.svg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
//  List of courses
const courseList = [
  {
    name: "CHEM 120",
    colour: "#EF6565",
    assignement: "Assignement 3",
    hoursOfWork: 2,
  },
  {
    name: "PHY 223",
    colour: "#C662BE",
    assignement: "Lab 3",
    hoursOfWork: 2,
  },
  {
    name: "BIO 111",
    colour: "#6FB75E",
    assignement: "Quiz 2",
    hoursOfWork: 1,
  },
  {
    name: "MAT 100",
    colour: "#939BFF",
    assignement: "Problem Set 3",
    hoursOfWork: 1,
  },
];

const DashboardScreen = () => {
  // Current Date
  var date = moment().format("dddd, MMMM Do");
  var currentDay = moment().format("Do");
  // As user fills checkmarks this will go up
  const [dailyHoursCompleted, setDailyHoursCompleted] = useState(0);
  // Total daily hours of work to do
  const totalHoursTodo = 6;
  const percentComplete = (
    (dailyHoursCompleted / totalHoursTodo) *
    100
  ).toFixed(0);

  //  state for date
  const [day, setDay] = useState(date);

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
        <Text
          style={{
            color: "white",
            // fontWeight: "bold",
            fontFamily: "BasisGrotesquePro_Bold",
            fontSize: 20,
          }}
        >
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
                  // fontWeight: "bold",
                  fontFamily: "BasisGrotesquePro_Bold",
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
                // fontWeight: "bold",
                fontFamily: "BasisGrotesquePro_Bold",
              }}
            >
              0/6 Hours Completed
            </Text>
          )}
        </View>
      </View>
      {/* Check list */}
      <View
        style={{
          width: windowWidth,
          alignItems: "center",
        }}
      >
        {courseList.map((item) => {
          return (
            <CheckListItem
              key={item.name}
              colour={item.colour}
              course={item.name}
              assignement={item.assignement}
              hoursOfWork={item.hoursOfWork}
              stateID={item.stateID}
            />
          );
        })}
      </View>

      <View
        style={{
          width: windowWidth,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: windowWidth * 0.1,
          marginTop: windowHeight * 0.1,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity>
          <CalendarIcon />
        </TouchableOpacity>
      </View>
      {/* Day switching component */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: "#4C74D0",
            borderWidth: 4,
            borderRadius: 50,
            height: 60,
            width: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Arrowback />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#4C74D0",
            borderRadius: 50,
            height: 80,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              // fontWeight: "bold",
              fontFamily: "BasisGrotesquePro_bold",
            }}
          >
            {currentDay}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 2,
            borderColor: "#4C74D0",
            borderRadius: 50,
            height: 60,
            width: 60,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 4,
          }}
        >
          <ArrowForward />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Checklist Item
const CheckListItem = ({
  colour,
  course,
  assignement,
  hoursOfWork,
  stateID,
}) => {
  return (
    <View
      style={{
        width: windowWidth,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      {/* check box */}
      <TouchableOpacity
        onPress={() => {}}
        style={{
          height: 50,
          marginRight: 10,
          width: 50,
          borderRadius: 50,
          backgroundColor: "white",
          shadowColor: "black",
          justifyContent: "center",
          alignItems: "center",
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 8,
        }}
      >
        <CheckMark />
      </TouchableOpacity>
      {/* item information */}
      <View
        style={{
          backgroundColor: colour,
          width: 261,
          height: 66,
          borderRadius: 30,
          alignItems: "center",
          flexDirection: "row",
          paddingRight: 25,
          paddingLeft: 25,
          justifyContent: "space-between",
          shadowColor: "black",
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 8,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "BasisGrotesquePro_Bold",
              color: "white",
            }}
          >
            {course}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              fontFamily: "BasisGrotesquePro",
            }}
          >
            {assignement}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            // fontWeight: "bold",
            fontFamily: "BasisGrotesquePro",
            color: "white",
          }}
        >
          {hoursOfWork}Hr(s)
        </Text>
      </View>
    </View>
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
