import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

import Indicator from "./Indicator";

type Props = {
  visibleIndex: Animated.SharedValue<number>;
  weatherData: any[];
};

const Indicators = ({ visibleIndex, weatherData }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
      }}>
      {weatherData.map((each, index) => (
        <Indicator {...{ index, key: each.id, visibleIndex }} />
      ))}
    </View>
  );
};

export default Indicators;
