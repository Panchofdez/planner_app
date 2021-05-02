import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Input, Button } from "react-native-elements";

// Icons
import PlusSign from "../../Images/plusSign.svg";

const courseList = [
  {
    id: 0,
    title: "Add Course 1",
  },
  {
    id: 1,
    title: "Add Course 2",
  },
  {
    id: 2,
    title: "Add Course 3",
  },
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CreationScreen = () => {
  const [updatedCourseList, setUpdatedCourseList] = useState(courseList);
  //   Adding course to our list
  const AddCourse = () => {
    const item = {
      id: updatedCourseList.length,
      title: `Add Course ${updatedCourseList.length + 1}`,
    };
    setUpdatedCourseList([...updatedCourseList, item]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, justifyContent: "flex-start" }}
    >
      <ScrollView>
        <SafeAreaView style={styles.mainContainer}>
          {/* Header Text */}
          <View
            style={{
              width: windowWidth * 0.6,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#3A62BF",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              Let's set up your planner for this term
            </Text>
          </View>
          <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 34 }}>
            Enter your courses
          </Text>
          {/* Add Course Section */}

          <View
            style={{
              alignItems: "center",
              height: windowHeight * 0.5,
            }}
          >
            <View
              style={{
                justifyContent: "flex-start",
                // height: windowHeight * 0.4,
              }}
            >
              {updatedCourseList.map((course) => {
                return (
                  <AddCourseContainer
                    key={`${course.title}-${course.id}`}
                    title={course.title}
                  />
                );
              })}
            </View>
            <Button
              buttonStyle={{
                height: 51,
                width: 51,
                borderRadius: 50,
                marginTop: 10,
                backgroundColor: "white",
              }}
              icon={<PlusSign />}
              onPress={() => AddCourse()}
            />
          </View>

          <Button
            buttonStyle={{
              height: 58,
              width: windowWidth * 0.45,
              backgroundColor: "#4C74D0",
              borderRadius: 50,
              marginTop: windowHeight * 0.1,
            }}
            title="Done"
            titleStyle={{ fontWeight: "bold" }}
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Add course Container
const AddCourseContainer = ({ title }) => {
  return (
    <View style={{ margin: 10 }}>
      <Input
        placeholder={title}
        textAlign="center"
        placeholderTextColor="rgba(79,116,208,0.5)"
        inputStyle={{ color: "rgb(79,116,208)", fontWeight: "bold" }}
        containerStyle={{
          height: 44,
          width: windowWidth * 0.6,
          backgroundColor: "white",
          borderRadius: 25,
        }}
        inputContainerStyle={{ borderColor: "white" }}
      />
    </View>
  );
};
export default CreationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "flex-start",
    paddingTop: windowHeight * 0.15,
    alignItems: "center",
  },
});
