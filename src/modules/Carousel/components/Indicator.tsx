import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const AnimatedView = Animated.createAnimatedComponent(View);

type Props = {
  index: number;
  visibleIndex: Animated.SharedValue<number>;
};

const Indicator = ({ index, visibleIndex }: Props) => {
  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor =
      visibleIndex.value === index
        ? withSpring("#fafafa")
        : withSpring("#888888");
    const scale =
      visibleIndex.value === index ? withSpring(1.4) : withSpring(1);
    return {
      backgroundColor,
      transform: [{ scale }],
    };
  });

  return (
    <AnimatedView
      style={[
        {
          backgroundColor: "#fafafa",
          borderRadius: 999,
          height: 5,
          marginHorizontal: 7,
          width: 5,
        },
        animatedStyles,
      ]}
    />
  );
};

export default Indicator;
