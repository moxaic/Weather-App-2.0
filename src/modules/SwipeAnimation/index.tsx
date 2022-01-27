import React from "react";
import { StyleSheet, View } from "react-native";

import Dot from "./components/Dot";

const SwipeAnimation = () => {
  const RenderDots = () => {
    const Dots: any = [];
    for (let index = 0; index < 3; index++) {
      Dots.push(<Dot {...{ index, key: index }} />);
    }
    return Dots;
  };

  return (
    <View style={styles.container}>
      <RenderDots />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default SwipeAnimation;
