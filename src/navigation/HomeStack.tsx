import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
/*
  TODO:
  remove react-native-shared-element & react-navigation-shared-element
*/

import Home from "../screens/Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="BriefInfo" headerMode="none">
      <Stack.Screen name="BriefInfo" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
