import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import BottomTabBarSvg from "./BottomTabBarSvg";
import {
  SEARCH_BUTTON_RADIUS,
  SEGMENT_LENGTH,
  TAB_BAR_HEIGHT,
  TAB_BAR_TOTAL_HEIGHT,
  WINDOW_WIDTH,
} from "../utils/constants";

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};

const BottomTabBar = ({ state, descriptors, navigation }: Props) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <BottomTabBarSvg />
      <View style={styles.tabBarContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          if (label === "Search") {
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.searchButtonContainer}>
                <Text
                  style={[
                    {
                      color: isFocused ? "#fafafa" : "#999",
                    },
                    styles.searchButton,
                  ]}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Text
                style={[
                  {
                    color: isFocused ? "#fafafa" : "#999",
                  },
                  styles.navButton,
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    alignItems: "flex-end",
    bottom: 0,
    flexDirection: "row",
    height: TAB_BAR_TOTAL_HEIGHT,
    justifyContent: "space-between",
    left: 0,
    position: "absolute",
    right: 0,
  },
  searchButtonContainer: {
    left: WINDOW_WIDTH / 2 - SEARCH_BUTTON_RADIUS,
    position: "absolute",
    top: 0,
  },
  searchButton: {
    borderRadius: 999,
    height: SEARCH_BUTTON_RADIUS * 2,
    lineHeight: SEARCH_BUTTON_RADIUS * 2,
    textAlign: "center",
    width: SEARCH_BUTTON_RADIUS * 2,
  },
  navButton: {
    height: TAB_BAR_HEIGHT,
    lineHeight: TAB_BAR_HEIGHT,
    textAlign: "center",
    width: (WINDOW_WIDTH - SEGMENT_LENGTH) / 2,
  },
});

export default BottomTabBar;
