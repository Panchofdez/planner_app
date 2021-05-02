import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

// Icons
import BackBlueArrow from "../Images/backBlueArrow.svg";
import ForwardBlueArrow from "../Images/forwardBlueArrow.svg";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(34, 82, 113, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  //   legend: ["Rainy Days"], // optional
};

// Chart Styling
const chartConfig = {
  //   backgroundGradientFrom: "#225271",
  backgroundGradientFromOpacity: 0,
  //   backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(34, 82, 113, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  //   barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          "2021-05-17": { marked: true, dotColor: "blue" },
          "2021-05-18": { marked: true, dotColor: "red" },
        }}
        // // Initially visible month. Default = Date()
        // current={"2012-03-01"}
        current={moment().format("yyyy-MM-DD")}
        // // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) =>
          direction === "left" ? <ForwardBlueArrow /> : <BackBlueArrow />
        }
        // Specify style for calendar container element. Default = {}
        style={{
          width: windowWidth,
          height: windowHeight * 0.5,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: "#F0F0F0",
          calendarBackground: "#F0F0F0",
          textSectionTitleColor: "#4C74D0",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#123179",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#212121",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 24,
          textDayHeaderFontSize: 16,
        }}
      />
      {/* <View
        style={{
          width: windowWidth * 0.9,
          backgroundColor: "white",
          borderRadius: 25,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          marginTop: 10,
        }}
      >
        <LineChart
          data={data}
          width={windowWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
        />
      </View> */}
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "flex-start",
    paddingTop: windowHeight * 0.15,
    alignItems: "center",
  },
});
