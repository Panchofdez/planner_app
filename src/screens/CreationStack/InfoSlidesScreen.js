import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Image } from "react-native-elements";
import Top from "../../Images/top.svg";
import Efficiently from "../../Images/efficiently.svg";
import Smart from "../../Images/smart.svg";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { Button } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InfoSlidesScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      title: "Stay on",
      highlighted: "top",
      title2: "of your courses",
      component: <Top />,
    },
    {
      title: "Manage your time",
      highlighted: "efficiently",
      title2: "",
      component: <Efficiently />,
    },
    {
      title: "Personalized",
      highlighted: "smart",
      title2: "planner",
      component: <Smart />,
      // styling: {},
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          borderRadius: 5,
          height: 250,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              marginBottom: 100,
              color: "black",
              fontFamily: "BasisGrotesquePro",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              marginLeft: 6,
              marginRight: 6,
              lineHeight: 40,
              fontSize: 40,
              marginBottom: 100,
              color: "#4C74D0",
              // fontWeight: "bold",
              fontFamily: "BasisGrotesquePro_Bold",
            }}
          >
            {item.highlighted}
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginBottom: 100,
              fontFamily: "BasisGrotesquePro",
            }}
          >
            {item.title2}
          </Text>
        </View>

        {/* <Image source={item.source} style={item.styling} /> */}
        {item.component}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        //   marginTop: windowHeight * 0.2,
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: windowHeight * 0.1,
      }}
    >
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.7,
          alignItems: "center",
        }}
      >
        <Carousel
          layout={"default"}
          data={carouselItems}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
      <Pagination
        dotsLength={3}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: "transparent" }}
        dotStyle={{
          width: 13,
          height: 13,
          borderRadius: 25,
          marginHorizontal: 3,
          borderWidth: 2,
          borderColor: "#225271",
          backgroundColor: "#D8FBFF",
        }}
        inactiveDotStyle={{
          width: 13,
          height: 13,
          borderColor: "#225271",
          borderRadius: 25,
          marginHorizontal: 3,
          backgroundColor: "#225271",
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
      <Button
        buttonStyle={{
          width: 244,
          height: 50,
          borderRadius: 50,
          backgroundColor: "#4C74D0",
          borderRadius: 25,
        }}
        onPress={() => {
          navigation.push("CourseSelection");
        }}
        title="Continue"
        titleStyle={{ fontWeight: "bold" }}
      />
    </SafeAreaView>
  );
};

export default InfoSlidesScreen;
