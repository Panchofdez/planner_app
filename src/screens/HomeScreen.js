import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// let assignmentValues = [];
// let assignmentWeights = [];
// let totalHours = 50;

let allAssignments = [
  {
    name: "Assignment 1",
    course: "CPS109",
    percentage: 45,
    totalHours: 20,
    hoursLeft: 20,
    hoursDaily: 2,
    finished: false,
  },
  {
    name: "Assignment 2",
    course: "CPS209",
    percentage: 30,
    totalHours: 10,
    hoursLeft: 10,
    hoursDaily: 2,
    finished: false,
  },
  {
    name: "Assignment 3",
    course: "CPS109",
    percentage: 50,
    totalHours: 15,
    hoursLeft: 15,
    hoursDaily: 3,
    finished: false,
  },
  {
    name: "Assignment 4",
    course: "CPS310",
    percentage: 10,
    totalHours: 15,
    hoursLeft: 15,
    hoursDaily: 1,
    finished: false,
  },
];

// const map = {};

const HomeScreen = ({ navigation }) => {
  const finishedAssignments = [];
  //this will store the latest due date for an assignement
  const [latestDueDate, setLatestDueDate] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);

  //All assignments to do
  const [assignments1, setAssignments1] = useState(allAssignments);

  //Assignments that are finished
  // const [finishedAssignments, setFinishedAssignments] = useState([]);

  //assignments that are assigned for the day
  const [dailyAssignments, setDailyAssignments] = useState([]);

  //Map that stores all the daily tasks for all the possible days until the latest due date
  const [map, setMap] = useState({});

  const [totalHours, setTotalHours] = useState(5);

  useEffect(() => {
    console.log("USE EFFECT");

    //if we need to assign the daily tasks
    if (
      dailyAssignments &&
      dailyAssignments.length === 0 &&
      assignments1 &&
      assignments1.length > 0
    ) {
      optimizeSchedule(assignments1);
    }
  }, []);

  const optimizeSchedule = (assignments) => {
    let day = 0;
    let latest = 0;
    let finishedAssignments = [];
    let assignmentMap = {};
    while (finishedAssignments.length < assignments.length || day < latest) {
      let values = [];
      let weights = [];
      const len = assignments.length;
      let newAssignments = [];

      for (let i = 0; i < len; i++) {
        let assignment = assignments[i];
        if (assignment["finished"] === false) {
          newAssignments.push(assignment);
          values.push(assignment["percentage"]);
          weights.push(assignment["hoursDaily"]);

          if (assignment["hoursLeft"] > latest) {
            latest = assignment["hoursLeft"];
          }
        }
      }

      assignments = newAssignments;

      assignmentMap[day] = knapsack(
        totalHours,
        weights,
        values,
        assignments.length,
        day,
        assignments
      );

      day++;
    }
    console.log(assignmentMap);
    setMap(assignmentMap);
    setDailyAssignments(assignmentMap[0]);
  };

  //uses the dynamic programming knapsack algorithm to assign daily tasks based on their priority
  function knapsack(totalWeight, weights, values, len, day, assignments) {
    let i, w;

    //create an 2d matrix to store our values;
    let table = new Array(len + 1);
    for (i = 0; i < table.length; i++) {
      table[i] = new Array(totalWeight + 1);
      for (let j = 0; j < totalWeight + 1; j++) {
        table[i][j] = 0;
      }
    }

    // Build table[i][w] in bottom up manner
    for (i = 0; i <= len; i++) {
      for (w = 0; w <= totalWeight; w++) {
        if (i == 0 || w == 0) table[i][w] = 0;
        else if (weights[i - 1] <= w)
          table[i][w] = Math.max(
            values[i - 1] + table[i - 1][w - weights[i - 1]],
            table[i - 1][w]
          );
        else table[i][w] = table[i - 1][w];
      }
    }

    // stores the result of Knapsack the maximum value
    let res = table[len][totalWeight];

    // const finishedAssignmentsCopy = [...finishedAssignments];
    const dailyTasks = [];

    w = totalWeight;
    for (i = len; i > 0 && res > 0; i--) {
      // either the result comes from the top
      // (table[i-1][w]) or from (values[i-1] + table[i-1]
      // [w-weight[i-1]]) as in Knapsack table. If
      // it comes from the latter one/ it means
      // the item is included.
      if (res == table[i - 1][w]) continue;
      else {
        // This item is included.
        let index = i - 1;
        console.log(weights[index] + " ");

        let assignment = assignments[index];

        //Updated the given assignment total hours. If the hours left to finish assignment is 0 or less then the assignment is finished
        let updatedHours = assignment["hoursLeft"] - assignment["hoursDaily"];
        if (updatedHours <= 0) {
          assignment["hoursLeft"] = 0;
          assignment["finished"] = true;
          finishedAssignments.push(assignment);
        } else {
          assignment["hoursLeft"] = updatedHours;
        }
        dailyTasks.push({ ...assignment });
        // Since this weight is included its
        // value is deducted
        res = res - values[index];
        w = w - weights[index];
      }
    }
    return [...dailyTasks];
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>{totalHours} hours of studying daily</Text>
      <Text style={{ fontSize: 25 }}>DAY {currentDay}: </Text>

      <Text style={{ fontSize: 25 }}>Daily Assignments</Text>
      {dailyAssignments &&
        dailyAssignments.length > 0 &&
        dailyAssignments.map((a, i) => (
          <View key={i} style={{ marginBottom: 20 }}>
            <Text>
              {a.name} {a.course}
            </Text>
            <Text>Percentage: {a.percentage}</Text>
            <Text>{a.totalHours} Total hours to finish assignment</Text>
            <Text>{a.hoursLeft} hours left</Text>
            <Text>{a.hoursDaily} recommended hours today</Text>
          </View>
        ))}

      <Button
        onPress={() => {
          if (currentDay > 0) {
            setCurrentDay(currentDay - 1);
            setDailyAssignments(map[currentDay - 1]);
          }
        }}
        title="Previous Day"
        color="#841584"
      />

      <Button
        onPress={() => {
          setCurrentDay(currentDay + 1);
          setDailyAssignments(map[currentDay + 1]);
        }}
        title="Next Day"
        color="#333"
      />

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
});
