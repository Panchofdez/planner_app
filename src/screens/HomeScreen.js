import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native";
import moment from "moment";
//  Icons
import CheckMark from "../Images/checkMark.svg";
import ArrowForward from "../Images/arrowForward.svg";
import Arrowback from "../Images/arrowBack.svg";
import CalendarIcon from "../Images/calendarIcon.svg";

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

const COLOURS = ["#939BFF", "#6FB75E", "#C662BE", "CHEM 120"];
let allAssignments = [
  {
    name: "Assignment 1",
    course: "CPS412",
    weight: 45,
    estimated: 20,
    hoursLeft: 20,
    hoursDaily: 2,
    difficulty: 3,
    finished: false,
    dueDate: "May 12 2021",
    daysLeft: 10,
  },
  {
    name: "Assignment 2",
    course: "CPS209",
    weight: 30,
    estimatedHours: 10,
    hoursLeft: 10,
    hoursDaily: 2,
    finished: false,
    difficulty: 4,
    dueDate: "May 20 2021",
    daysLeft: 18,
  },
  {
    name: "Assignment 3",
    course: "MTH110",
    weight: 50,
    estimatedHours: 15,
    hoursLeft: 15,
    hoursDaily: 3,
    difficulty: 2,
    finished: false,
    dueDate: "May 15 2021",
    daysLeft: 13,
  },
  {
    name: "Assignment 4",
    course: "BLG143",
    weight: 10,
    estimatedHours: 15,
    hoursLeft: 15,
    hoursDaily: 1,
    difficulty: 1,
    finished: false,
    dueDate: "May 7 2021",
    daysLeft: 5,
  },
];

const HomeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignments);
  const hours = useSelector((state) => state.totalHours);
  const finishedAssignments = [];
  console.log("assignment", assignments);
  console.log(allAssignments);

  //All assignments to do
  // const [assignments1, setAssignments1] = useState(allAssignments);

  useEffect(() => {
    // console.log("USE EFFECT");
    // console.log(assignments1);

    // //if we need to assign the daily tasks
    // if (
    //   dailyAssignments &&
    //   dailyAssignments.length === 0 &&
    //   assignments1 &&
    //   assignments1.length > 0
    // ) {
    //   console.log("ASSIGNMENTS 2", assignments1);

    optimize2(allAssignments);
  }, []);

  //Assignments that are finished
  // const [finishedAssignments, setFinishedAssignments] = useState([]);

  //assignments that are assigned for the day
  const [dailyAssignments, setDailyAssignments] = useState([]);

  //Map that stores all the daily tasks for all the possible days until the latest due date
  const [map, setMap] = useState({});

  const [totalHours, setTotalHours] = useState(6);

  const [currentDay, setCurrentDay] = useState(0);

  // Current Date
  var currentDate = moment().format("dddd, MMMM Do");
  var currentD = moment().format("Do");
  // As user fills checkmarks this will go up
  const [dailyHoursCompleted, setDailyHoursCompleted] = useState(0);
  // Total daily hours of work to do
  const percentComplete = ((dailyHoursCompleted / totalHours) * 100).toFixed(0);

  //  state for date
  const [date, setDate] = useState(currentDate);

  console.log(`${percentComplete}%`);

  function knapsack(W, wt, val, n, assignments) {
    let i, w;
    let K = new Array(n + 1);
    for (i = 0; i < K.length; i++) {
      K[i] = new Array(W + 1);
      for (let j = 0; j < W + 1; j++) {
        K[i][j] = 0;
      }
    }

    // Build table K[][] in bottom up manner
    for (i = 0; i <= n; i++) {
      for (w = 0; w <= W; w++) {
        if (i == 0 || w == 0) K[i][w] = 0;
        else if (wt[i - 1] <= w)
          K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
        else K[i][w] = K[i - 1][w];
      }
    }

    // stores the result of Knapsack
    let res = K[n][W];
    console.log(res + "<br>");
    let dailyTasks = [];
    w = W;
    for (i = n; i > 0 && res > 0; i--) {
      // either the result comes from the top
      // (K[i-1][w]) or from (val[i-1] + K[i-1]
      // [w-wt[i-1]]) as in Knapsack table. If
      // it comes from the latter one/ it means
      // the item is included.
      if (res == K[i - 1][w]) continue;
      else {
        // This item is included.
        console.log(wt[i - 1] + " ");
        let index = i - 1;

        let assignment = assignments[index];
        // let dailyTasks = [];
        // //Updated the given assignment total hours. If the hours left to finish assignment is 0 or less then the assignment is finished
        // let updatedHours = assignment["hoursLeft"] - assignment["hoursDaily"];
        // if (updatedHours <= 0) {
        //   assignment["hoursLeft"] = 0;
        //   assignment["finished"] = true;
        //   finishedAssignments.push(assignment);
        // } else {
        //   assignment["hoursLeft"] = updatedHours;
        // }
        dailyTasks.push({ ...assignment });
        // Since this weight is included its
        // value is deducted
        res = res - val[i - 1];
        w = w - wt[i - 1];
      }
    }
    return [...dailyTasks];
  }

  const optimize2 = (assignments) => {
    let weights = [];
    let values = [];
    let assignmentMap = {};
    let len = assignments.length;
    let day = 0;
    //Assign a priority score to all the ongoing assignments
    while (day < 10) {
      for (let i = 0; i < len; i++) {
        let assignment = assignments[i];
        //We want to add daily tasks based to maximize assignments with most priority
        values.push(assignment["weight"]);

        //weights are the recommended hours to spend during the day. Max is the total hours to spend daily.
        weights.push(Math.min(assignment["hoursDaily"], totalHours));
      }
      let result = knapsack(totalHours, weights, values, len, assignments);
      assignmentMap[day] = result;
      day++;
    }

    setMap(assignmentMap);
    setDailyAssignments(assignmentMap[0]);
  };

  // const optimizeSchedule = (assignments) => {
  //   let day = 0;
  //   let latest = 0;
  //   let finishedAssignments = [];
  //   let assignmentMap = {};
  //   while (finishedAssignments.length < assignments.length || day < latest) {
  //     let values = [];
  //     let weights = [];
  //     const len = assignments.length;
  //     let newAssignments = [];

  //     //Assign a priority score to all the ongoing assignments
  //     for (let i = 0; i < len; i++) {
  //       if (assignments[i]["finished"] === false) {
  //         assignments[i]["priorityScore"] = getPriorityScore(
  //           assignments[i]["estimatedHours"],
  //           assignments[i]["hoursDaily"]
  //         );
  //       }
  //     }

  //     //sort them by the priority score
  //     assignments.sort(function (a, b) {
  //       return a["priorityScore"] - b["priorityScore"];
  //     });

  //     for (let i = 0; i < len; i++) {
  //       let assignment = assignments[i];
  //       if (assignment["finished"] === false) {
  //         newAssignments.push(assignment);

  //         //We want to add daily tasks based to maximize assignments with most priority
  //         values.push(assignment["priorityScore"]);

  //         //weights are the recommended hours to spend during the day. Max is the total hours to spend daily.
  //         weights.push(Math.min(assignment["hoursDaily"], totalHours));

  //         if (assignment["hoursLeft"] > latest) {
  //           latest = assignment["hoursLeft"];
  //         }
  //       }
  //     }

  //     assignments = [...newAssignments];

  //     assignmentMap[day] = knapsack(
  //       totalHours,
  //       weights,
  //       values,
  //       assignments.length,
  //       assignments
  //     );

  //     day++;
  //   }

  //   setMap(assignmentMap);
  //   console.log(assignmentMap);
  //   setDailyAssignments(assignmentMap[0]);
  // };

  // Prints the items which are put
  // in a knapsack of capacity W
  // function knapsack(W, wt, val, n) {
  //   let i, w;
  //   let K = new Array(n + 1);
  //   for (i = 0; i < K.length; i++) {
  //     K[i] = new Array(W + 1);
  //     for (let j = 0; j < W + 1; j++) {
  //       K[i][j] = 0;
  //     }
  //   }

  //   // Build table K[][] in bottom up manner
  //   for (i = 0; i <= n; i++) {
  //     for (w = 0; w <= W; w++) {
  //       if (i == 0 || w == 0) K[i][w] = 0;
  //       else if (wt[i - 1] <= w)
  //         K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
  //       else K[i][w] = K[i - 1][w];
  //     }
  //   }

  //   // stores the result of Knapsack
  //   let res = K[n][W];
  //   console.log(res + "<br>");
  //   let dailyTasks = [];
  //   w = W;
  //   for (i = n; i > 0 && res > 0; i--) {
  //     // either the result comes from the top
  //     // (K[i-1][w]) or from (val[i-1] + K[i-1]
  //     // [w-wt[i-1]]) as in Knapsack table. If
  //     // it comes from the latter one/ it means
  //     // the item is included.
  //     if (res == K[i - 1][w]) continue;
  //     else {
  //       // This item is included.
  //       console.log(wt[i - 1] + " ");
  //       let index = i - 1;

  //       let assignment = assignments[index];
  //       // let dailyTasks = [];
  //       // //Updated the given assignment total hours. If the hours left to finish assignment is 0 or less then the assignment is finished
  //       // let updatedHours = assignment["hoursLeft"] - assignment["hoursDaily"];
  //       // if (updatedHours <= 0) {
  //       //   assignment["hoursLeft"] = 0;
  //       //   assignment["finished"] = true;
  //       //   finishedAssignments.push(assignment);
  //       // } else {
  //       //   assignment["hoursLeft"] = updatedHours;
  //       // }
  //       dailyTasks.push({ ...assignment });
  //       // Since this weight is included its
  //       // value is deducted
  //       res = res - val[i - 1];
  //       w = w - wt[i - 1];
  //     }
  //   }
  //   return [...dailyTasks];
  // }

  // //uses the dynamic programming knapsack algorithm to assign daily tasks based on their priority
  // function knapsack(totalWeight, weights, values, len, assignments) {
  //   let i, w;

  //   //create an 2d matrix to store our values;
  //   let table = new Array(len + 1);
  //   for (i = 0; i < table.length; i++) {
  //     table[i] = new Array(totalWeight + 1);
  //     for (let j = 0; j < totalWeight + 1; j++) {
  //       table[i][j] = 0;
  //     }
  //   }

  //   // Build table[i][w] in bottom up manner
  //   for (i = 0; i <= len; i++) {
  //     for (w = 0; w <= totalWeight; w++) {
  //       if (i == 0 || w == 0) table[i][w] = 0;
  //       else if (weights[i - 1] <= w)
  //         table[i][w] = Math.max(
  //           values[i - 1] + table[i - 1][w - weights[i - 1]],
  //           table[i - 1][w]
  //         );
  //       else table[i][w] = table[i - 1][w];
  //     }
  //   }

  //   // stores the result of Knapsack the maximum value
  //   let res = table[len][totalWeight];
  //   console.log("RESULT", res);

  //   // const finishedAssignmentsCopy = [...finishedAssignments];
  //   const dailyTasks = [];

  //   w = totalWeight;
  //   for (i = len; i > 0 && res > 0; i--) {
  //     // either the result comes from the top
  //     // (table[i-1][w]) or from (values[i-1] + table[i-1]
  //     // [w-weight[i-1]]) as in Knapsack table. If
  //     // it comes from the latter one/ it means
  //     // the item is included.
  //     if (res == table[i - 1][w]) continue;
  //     else {
  //       // This item is included.
  //       let index = i - 1;
  //       console.log(weights[index] + " ");

  //       let assignment = assignments[index];

  //       //Updated the given assignment total hours. If the hours left to finish assignment is 0 or less then the assignment is finished
  //       let updatedHours = assignment["hoursLeft"] - assignment["hoursDaily"];
  //       if (updatedHours <= 0) {
  //         assignment["hoursLeft"] = 0;
  //         assignment["finished"] = true;
  //         finishedAssignments.push(assignment);
  //       } else {
  //         assignment["hoursLeft"] = updatedHours;
  //       }
  //       dailyTasks.push({ ...assignment });
  //       // Since this weight is included its
  //       // value is deducted
  //       res = res - values[index];
  //       w = w - weights[index];
  //     }
  //   }
  //   return [...dailyTasks];
  // }

  const getPriorityScore = (difficultyScore, weight) => {
    //(DifficultyScore)*(1+weight%)/(Days in advance to work on it)
    let score = (difficultyScore * (1 + weight)) / 14;
    console.log(Math.round(score));
    return Math.round(score);
  };

  console.log(dailyAssignments);
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
          {currentDate}
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
                0/{totalHours} Hours Completed
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
              0/{totalHours} Hours Completed
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
        {dailyAssignments.map((item, i) => {
          return (
            <CheckListItem
              key={item.name}
              colour={COLOURS[i % 4]}
              course={item.course}
              assignement={item.name}
              hoursOfWork={item.hoursDaily}
              setDailyHoursCompleted={setDailyHoursCompleted}
              dailyHoursCompleted={dailyHoursCompleted}
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
          onPress={() => {
            if (currentDay > 0) {
              setCurrentDay(currentDay - 1);
              setDailyAssignments(map[currentDay - 1]);
            }
          }}
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
              fontWeight: "bold",
            }}
          >
            {currentDay}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (currentDay < Object.keys(map).length - 1) {
              setCurrentDay(currentDay + 1);
              setDailyAssignments(map[currentDay + 1]);
            }
          }}
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

const CheckListItem = ({
  colour,
  course,
  assignement,
  hoursOfWork,
  setDailyHoursCompleted,
  dailyHoursCompleted,
}) => {
  const [checked, setChecked] = useState(false);

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
        onPress={() => {
          if (checked) {
            setDailyHoursCompleted(Math.max(dailyHoursCompleted - hoursOfWork));
          } else {
            setDailyHoursCompleted(Math.min(dailyHoursCompleted + hoursOfWork));
          }
          setChecked(!checked);
        }}
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
        {checked && <CheckMark />}
      </TouchableOpacity>

      {/* item information */}
      <TouchableOpacity>
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
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              {course}
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>{assignement}</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            {hoursOfWork}Hr(s)
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
