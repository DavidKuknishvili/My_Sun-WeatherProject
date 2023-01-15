import axios from "axios";

const ACCESS_KEY = "7dc07bf469f229c58d60abfc452eeeae";
const ACCESS_KEY1 = "9c47e5215a4846bca316d0efba8f06ce";

export interface ResultInterface {
  name: String;
  temp: Number;
  description: String;
  icon: String;
  humidity: Number;
  wind:number;
  feelsLike:Number;
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
    humidity:data.main.humidity,
    wind:data.wind.speed,
    feelsLike:data.main.feels_like
  };
  // console.log(results)
  return results;
};

export const fourDays = async (city: string) => {
  const BASE_URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=9c47e5215a4846bca316d0efba8f06ce`;
  

  const response = await axios.get(BASE_URL)
  return response.data.data.slice(0,4)

};
