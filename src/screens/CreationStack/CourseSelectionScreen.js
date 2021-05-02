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

const courseList1 = [
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

const CreationScreen = ({ navigation }) => {
  const [courseList, setCourseList] = useState(courseList1);
  const [course1, setCourse1] = useState();
  const [course2, setCourse2] = useState();
  const [course3, setCourse3] = useState();
  const [course4, setCourse4] = useState();
  const [course5, setCourse5] = useState();
  const [numInputs, setNumInputs] = useState(3);

  //   Adding course to our list
  const AddCourse = () => {
    const item = {
      id: courseList.length,
      title: `Add Course ${courseList.length + 1}`,
    };
    setCourseList([...courseList, item]);
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
              <View style={{ margin: 10 }}>
                <Input
                  placeholder="Add course 1"
                  value={course1}
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
                  onChangeText={setCourse1}
                />
              </View>
              <View style={{ margin: 10 }}>
                <Input
                  placeholder="Add course 2"
                  value={course2}
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
                  onChangeText={setCourse2}
                />
              </View>
              <View style={{ margin: 10 }}>
                <Input
                  placeholder="Add course 3"
                  value={course3}
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
                  onChangeText={setCourse3}
                />
              </View>
              {numInputs > 3 && (
                <View style={{ margin: 10 }}>
                  <Input
                    placeholder="Add course 4"
                    value={course4}
                    textAlign="center"
                    placeholderTextColor="rgba(79,116,208,0.5)"
                    inputStyle={{
                      color: "rgb(79,116,208)",
                      fontWeight: "bold",
                    }}
                    containerStyle={{
                      height: 44,
                      width: windowWidth * 0.6,
                      backgroundColor: "white",
                      borderRadius: 25,
                    }}
                    inputContainerStyle={{ borderColor: "white" }}
                    onChangeText={setCourse4}
                  />
                </View>
              )}
              {numInputs > 4 && (
                <View style={{ margin: 10 }}>
                  <Input
                    placeholder="Add course 5"
                    value={course5}
                    textAlign="center"
                    placeholderTextColor="rgba(79,116,208,0.5)"
                    inputStyle={{
                      color: "rgb(79,116,208)",
                      fontWeight: "bold",
                    }}
                    containerStyle={{
                      height: 44,
                      width: windowWidth * 0.6,
                      backgroundColor: "white",
                      borderRadius: 25,
                    }}
                    inputContainerStyle={{ borderColor: "white" }}
                    onChangeText={setCourse5}
                  />
                </View>
              )}
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
              onPress={() => setNumInputs(numInputs + 1)}
            />
          </View>

          <Button
            onPress={() => {
              const data = [];
              if (course1 != "") {
                data.push(course1);
              }
              if (course2 != "") {
                data.push(course2);
              }
              if (course3 != "") {
                data.push(course3);
              }
              if (course4 != "") {
                data.push(course4);
              }
              if (cours5 != "") {
                data.push(course5);
              }
              console.log(data);
              navigation.push("AssignementCreation", {
                courseList: data,
                idx: 0,
                assignments: [],
              });
            }}
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
// const AddCourseContainer = ({ title, setTitle }) => {
//   return (

//   );
// };
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
