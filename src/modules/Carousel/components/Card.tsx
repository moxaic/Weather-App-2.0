import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utils/constants";

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const Card = ({ item, index, scrollX }: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(
      scrollX.value,
      [
        (index - 1) * (0.9 * WINDOW_WIDTH),
        index * (0.9 * WINDOW_WIDTH),
        (index + 1) * (0.9 * WINDOW_WIDTH),
      ],
      [0.7, 1, 0.7],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          scaleY,
        },
      ],
    };
  });

  const {
    weather: [{ main, icon }],
    main: { temp },
    name,
  } = item;

  return (
    <View
      style={{
        height: 0.5 * WINDOW_HEIGHT,
        padding: 0.025 * WINDOW_WIDTH,
        width: 0.9 * WINDOW_WIDTH,
      }}>
      <AnimatedImageBackground
        style={[
          {
            flex: 1,
            justifyContent: "center",
          },
          animatedStyle,
        ]}
        imageStyle={{ borderRadius: 24 }}
        resizeMode="cover"
        source={require("../../../assets/images/desert-night.png")}>
        <Text
          style={{
            color: "#fafafa",
            fontWeight: "700",
            fontSize: 28,
            marginBottom: 20,
            textAlign: "center",
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: "#fafafa",
            fontWeight: "300",
            fontSize: 18,
            textAlign: "center",
          }}>
          Thursday, May 20
        </Text>
        <Text
          style={{
            color: "#fafafa",
            fontWeight: "600",
            fontSize: 90,
            textAlign: "center",
          }}>
          {parseInt(temp)}
        </Text>
        <Text
          style={{
            color: "#fafafa",
            fontWeight: "500",
            fontSize: 28,
            textAlign: "center",
          }}>
          {main}
        </Text>
      </AnimatedImageBackground>
    </View>
  );
};

export default Card;
