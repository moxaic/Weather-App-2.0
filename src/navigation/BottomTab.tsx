import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomTabBar from "../components/BottomTabBar";
import Settings from "../screens/Settings";
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTab;
