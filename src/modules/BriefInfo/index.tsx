import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import SwipeAnimation from "../SwipeAnimation";

import { useWeatherDataContext } from "../../contexts/WeatherData";

type Props = {
  briefWeather: any;
  isScrolling: boolean;
};

const BriefInfo = ({ briefWeather, isScrolling }: Props) => {
  const { weatherData } = useWeatherDataContext();
  const {
    main: { feels_like, humidity },
    wind: { speed },
  } = briefWeather;
  const data = [feels_like, speed, humidity, speed];

  const getName = (index: number) => {
    switch (index) {
      case 0:
        return "Actual Feel";
      case 1:
        return "Air Quality";
      case 2:
        return "Humidity";
      case 3:
        return "Wind Speed";
    }
  };

  return (
    <View style={styles.container}>
      {weatherData &&
        data.map((each, index) => {
          const infoText = getName(index);
          const style = styles.card;
          return (
            <View {...{ key: index, style }}>
              <Text style={{ color: "white", marginBottom: 5 }}>
                {infoText}
              </Text>
              {!isScrolling ? (
                <Text style={{ color: "white", fontSize: 18 }}>{each}</Text>
              ) : (
                <SwipeAnimation />
              )}
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 0.5,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 0.075 * Dimensions.get("window").width,
  },
  card: {
    alignItems: "center",
    backgroundColor: "rgba(18, 20, 45, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 0.5,
    justifyContent: "center",
    height: 0.13 * Dimensions.get("window").height,
    paddingVertical: 23,
    width: "50%",
  },
});

export default BriefInfo;
