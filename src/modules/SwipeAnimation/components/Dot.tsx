import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

const AnimatedView = Animated.createAnimatedComponent(View);

type Props = {
  index: number;
};

const Dot = ({ index }: Props) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(
      index * 100,
      withRepeat(withSpring(-5), -1, true),
    );
    return () => cancelAnimation(translateY);
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return <AnimatedView style={[styles.dots, animatedStyles]} />;
};

const styles = StyleSheet.create({
  dots: {
    backgroundColor: "#fafafa",
    borderRadius: 999,
    height: 5,
    marginHorizontal: 5,
    width: 5,
  },
});

export default Dot;
