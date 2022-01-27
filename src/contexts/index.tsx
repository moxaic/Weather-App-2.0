import React from "react";

import UserConfigProvider from "./UserConfig";
import WeatherDataProvider from "./WeatherData";

type Props = {
  children: JSX.Element;
};

const ContextProvider = ({ children }: Props) => {
  return (
    <UserConfigProvider>
      <WeatherDataProvider>{children}</WeatherDataProvider>
    </UserConfigProvider>
  );
};

export default ContextProvider;
