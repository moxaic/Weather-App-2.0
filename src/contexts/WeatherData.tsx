import React, { createContext, useContext, useState } from "react";

import axios, { AxiosResponse } from "../api";

const WeatherData = createContext({});
const useWeatherDataContext = () => useContext<any>(WeatherData);

type Props = {
  children: JSX.Element;
};

const WeatherDataProvider = ({ children }: Props) => {
  const API_KEY = "YOUR API KEY";
  const [weatherData, setWeatherData] = useState<any[]>([]);

  const getWeatherData = async (cities: string[]) => {
    const req = (cityName: string): Promise<AxiosResponse<any>> => {
      return axios.get(`weather?q=${cityName}&units=metric&appid=${API_KEY}`);
    };

    const promises = cities.map((eachCity) => {
      return req(eachCity);
    });

    try {
      const res = await Promise.all(promises);
      const data = res.map((each) => each.data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const value = { getWeatherData, setWeatherData, weatherData };
  return <WeatherData.Provider {...{ value }}>{children}</WeatherData.Provider>;
};

export default WeatherDataProvider;
export { useWeatherDataContext };
