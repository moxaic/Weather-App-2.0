import React from "react";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <LinearGradient colors={["#12142d", "#4e4480"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ color: "#fafafa", padding: 20 }}>
          Hello from settings.
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
