import React from "react";
import { Dimensions, FlatList, View, NativeScrollEvent } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Card from "./components/Card";
import Indicators from "./components/Indicators";

import { useWeatherDataContext } from "../../contexts/WeatherData";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const SCREEN_WIDTH = Dimensions.get("window").width;

type AnimationContext = {
  scrolling: boolean;
  startX: number;
  userScrolled: boolean;
};

type Props = {
  setBriefWeather: React.Dispatch<any>;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
};

const Carousel = ({ setBriefWeather, setIsScrolling }: Props) => {
  const scrollX = useSharedValue(0);
  const visibleIndex = useSharedValue(0);
  const { weatherData } = useWeatherDataContext();

  const handleScollEnd = (index: number) => {
    setBriefWeather(weatherData[index]);
    setIsScrolling(false);
  };

  const handleScrollStart = () => {
    setIsScrolling(true);
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e: NativeScrollEvent, ctx: AnimationContext) => {
      scrollX.value = e.contentOffset.x;
      if (!ctx.scrolling && ctx.userScrolled) {
        if (
          e.contentOffset.x - ctx.startX >= 30 ||
          e.contentOffset.x - ctx.startX <= -30
        ) {
          ctx.scrolling = true;
          runOnJS(handleScrollStart)();
        }
      }
    },
    onBeginDrag: (e: NativeScrollEvent, ctx: AnimationContext) => {
      ctx.userScrolled = true;
      ctx.startX = e.contentOffset.x;
    },
    onMomentumEnd: (e: NativeScrollEvent, ctx: AnimationContext) => {
      if (ctx.userScrolled) {
        visibleIndex.value = Math.round(
          e.contentOffset.x / (0.9 * SCREEN_WIDTH),
        );
        ctx.scrolling && runOnJS(handleScollEnd)(visibleIndex.value);
        ctx.scrolling = false;
      }
      ctx.userScrolled = false;
    },
  });

  return (
    <View>
      {weatherData && (
        <AnimatedFlatList
          style={{ paddingVertical: 20 }}
          data={weatherData}
          bounces={false}
          contentContainerStyle={{ paddingHorizontal: 0.05 * SCREEN_WIDTH }}
          decelerationRate={0}
          horizontal={true}
          initialNumToRender={7}
          keyExtractor={(item: any) => item.id.toString()}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToInterval={0.9 * SCREEN_WIDTH}
          renderItem={({ item, index }) => (
            <Card {...{ item, index, scrollX }} />
          )}
        />
      )}
      <Indicators {...{ visibleIndex, weatherData }} />
    </View>
  );
};

export default Carousel;
