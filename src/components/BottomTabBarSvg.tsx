import React from "react";
import { View } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

import {
  WINDOW_WIDTH,
  SEARCH_BUTTON_RADIUS,
  TRANSPARENT_CIRCLE_RADIUS,
  SEGMENT_LENGTH,
  TAB_BAR_HEIGHT,
  TAB_BAR_TOTAL_HEIGHT,
} from "../utils/constants";

const BottomTabBarSvg = () => {
  return (
    <View style={{ bottom: 0, left: 0, position: "absolute", right: 0 }}>
      <Svg height={TAB_BAR_TOTAL_HEIGHT} width="100%">
        <Circle
          cx="50%"
          cy={SEARCH_BUTTON_RADIUS}
          fill="#12142d"
          r={SEARCH_BUTTON_RADIUS}
          stroke="none"
        />
        <Path
          d={`M0 ${TAB_BAR_TOTAL_HEIGHT - TAB_BAR_HEIGHT} h${
            (WINDOW_WIDTH - SEGMENT_LENGTH) / 2
          } a${TRANSPARENT_CIRCLE_RADIUS} ${TRANSPARENT_CIRCLE_RADIUS} 0 0 0 ${SEGMENT_LENGTH} 0 h${
            (WINDOW_WIDTH - SEGMENT_LENGTH) / 2
          } v${TAB_BAR_HEIGHT} h${-WINDOW_WIDTH} Z`}
          fill="#12142d"
          stroke="none"
        />
      </Svg>
    </View>
  );
};

export default BottomTabBarSvg;
