import React from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";

type Props = {
  editable: boolean;
  query?: string;
  searchBarRef?: React.MutableRefObject<null>;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ editable, query, searchBarRef, setQuery }: Props) => {
  const onChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    if (setQuery) {
      setQuery(e.nativeEvent.text);
    }
  };

  return (
    <TextInput
      ref={editable ? searchBarRef : null}
      style={{
        backgroundColor: "#fafafa",
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 20,
        paddingHorizontal: 15,
      }}
      editable={editable}
      onChange={onChangeHandler}
      placeholder="Search..."
      placeholderTextColor="#111"
      value={editable ? query : ""}
    />
  );
};

export default SearchBar;
