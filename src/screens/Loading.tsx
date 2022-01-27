import React from "react";
import { StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Loading = () => {
  return (
    <LinearGradient
      colors={["#12142d", "#4e4480"]}
      style={styles.pageContainer}>
      <Text>Loading...</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Loading;
