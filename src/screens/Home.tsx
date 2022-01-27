import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

import BriefInfo from "../modules/BriefInfo";
import Carousel from "../modules/Carousel";

import { useWeatherDataContext } from "../contexts/WeatherData";

const Home = () => {
  const { weatherData } = useWeatherDataContext();
  const [briefWeather, setBriefWeather] = useState<any>(weatherData[0]);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  return (
    <LinearGradient colors={["#12142d", "#4e4480"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ color: "#fafafa", marginTop: 10, textAlign: "center" }}>
          Drizzle
        </Text>
        <Carousel {...{ setBriefWeather, setIsScrolling }} />
        <BriefInfo briefWeather={briefWeather} isScrolling={isScrolling} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
