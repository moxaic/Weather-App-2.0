import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import NewSearch from "../screens/NewSearch";
import Search from "../screens/Search";

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="NewSearch" component={NewSearch} />
    </Stack.Navigator>
  );
};

export default SearchStack;
