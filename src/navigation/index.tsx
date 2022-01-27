import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTab from "./BottomTab";
import Loading from "../screens/Loading";

import { useUserConfigContext } from "../contexts/UserConfig";
import { useWeatherDataContext } from "../contexts/WeatherData";

const Navigation = () => {
  const { cities, getCities, getUserSettings } = useUserConfigContext();
  const { getWeatherData, setWeatherData } = useWeatherDataContext();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([getCities(), getUserSettings()]);
        if (cities) {
          const res = await getWeatherData(cities);
          setWeatherData(res);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {loading ? <Loading /> : <BottomTab />}
    </NavigationContainer>
  );
};

export default Navigation;
