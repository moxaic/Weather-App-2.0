import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ContextProvider from "./src/contexts";
import Navigation from "./src/navigation";

const App = () => {
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0)" />
        <Navigation />
      </SafeAreaProvider>
    </ContextProvider>
  );
};

export default App;
