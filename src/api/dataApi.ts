import axios from "axios";
import { ACCESS_KEY } from "../config";
import { ACCESS_KEY1 } from "../config";


export interface ResultInterface {
  name: String;
  temp: Number;
  description: String;
  icon: String;
  humidity: Number;
  wind: number;
  feelsLike: Number;
}

export const current = async (city: string) => {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`;

  const response = await axios.get(BASE_URL + ACCESS_KEY);
  const data = response.data;

  const results: ResultInterface = {
    name: data.name,
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    feelsLike: data.main.feels_like,
  };
  return results;
};

export const fourDays = async (city: string) => {
  const BASE_URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=`;

  const response = await axios.get(BASE_URL+ACCESS_KEY1);
  return response.data.data.slice(0, 4);
};
