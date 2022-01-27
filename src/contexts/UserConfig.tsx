import React, { createContext, useContext, useState } from "react";
import { MMKV } from "react-native-mmkv";

const UserConfig = createContext({});
const useUserConfigContext = () => useContext<any>(UserConfig);

type UserSettings = {
  allowNotification: boolean;
  allowLocationAccess: boolean;
  timer: number;
  unit: string;
};

type Props = {
  children: JSX.Element;
};

const UserConfigProvider = ({ children }: Props) => {
  const [cities, setCities] = useState<string[]>(["Shimla", "Tokyo"]);
  const [userSettings, setUserSettings] = useState<UserSettings>();

  const getCities = () => {
    const cities = MMKV.getString("interested_cities");
    // TODO: will return array of object containing lat, long. @akscorner14
    // currently returns array of string(city name).
    if (cities) {
      setCities(JSON.parse(cities));
    }
  };

  const getUserSettings = () => {
    const userSettings = MMKV.getString("user_settings");
    if (userSettings) {
      setUserSettings(JSON.parse(userSettings));
    }
  };

  const updateCities = () => {};

  const updateUserSettings = () => {};

  const value = {
    cities,
    getCities,
    getUserSettings,
    updateCities,
    updateUserSettings,
    userSettings,
  };

  return <UserConfig.Provider {...{ value }}>{children}</UserConfig.Provider>;
};

export default UserConfigProvider;
export { useUserConfigContext };
