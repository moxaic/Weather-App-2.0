import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

import SearchBar from "../components/SearchBar";

type Props = {
  navigation: any;
};

const Search = ({ navigation }: Props) => {
  const searchBarTouchHandler = () => {
    navigation.navigate("NewSearch");
  };

  return (
    <LinearGradient colors={["#12142d", "#4e4480"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={searchBarTouchHandler}>
          <View pointerEvents="box-only">
            <SearchBar editable={false} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Search;
