import React from "react";
import "./App.css";
import imageRequest from "./api/imageApi";
import { current, fourDays } from "./api/dataApi";
import { ResultInterface } from "./api/dataApi";
import ImageSide from "./components/ImageSide";
import DetailSide from "./components/DetailSide";
import { motion } from "framer-motion";

function App() {
  const [city, setcity] = React.useState<string>("tbilisi");

  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [currentWeather, setCurrentWeather] =
    React.useState<ResultInterface | null>(null);

  const [fourDay, setFourDay] = React.useState<any>([]);

  React.useLayoutEffect(() => {
    const imageData = async (city: string) => {
      const imgUrl = await imageRequest(city);
      setImageUrl(imgUrl);
    };
    imageData(city);

    const currentData = async (city: string) => {
      const currentWeatherData = await current(city);
      setCurrentWeather(currentWeatherData);
    };
    currentData(city);

    const fourDaysData = async (city: string) => {
      const fourData = await fourDays(city);

      setFourDay(fourData);
    };
    fourDaysData(city);
  }, [city]);

  return (
    <div className="App">
      <div className="main_conatiner">
        <motion.div
          className="motionDivFirst"
          initial={{ x: 1000, y: 20 }}
          animate={{ x: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          <DetailSide
            currentWeather={currentWeather}
            city={city}
            fourDay={fourDay}
            setcity={setcity}
          />
        </motion.div>
        <motion.div
          className="motionDivSecond"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          <ImageSide imageUrl={imageUrl} currentWeather={currentWeather} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
