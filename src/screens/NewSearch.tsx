import React, { useEffect, useRef, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

import SearchBar from "../components/SearchBar";

const NewSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<Array<any>>([]);

  const searchBarRef = useRef<any>(null);

  useEffect(() => {
    if (searchBarRef && searchBarRef.current) {
      searchBarRef.current.focus();
    }
  }, []);

  return (
    <LinearGradient colors={["#12142d", "#4e4480"]} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <SearchBar {...{ editable: true, query, searchBarRef, setQuery }} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default NewSearch;
