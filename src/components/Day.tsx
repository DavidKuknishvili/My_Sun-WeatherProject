import React from "react";
import "./Days.css";
import { CurrentIcon, Sun } from "../icons/icons";


interface VisualWeatherInterface{
  description: string;
  code: number;
  icon: string;
}

interface MainWeatherInterface{
  app_max_temp: number;
  app_min_temp: number;
  clouds: number;
  clouds_hi: number;
  clouds_low: number;
  clouds_mid: number;
  datetime: string;
  dewpt: number;
  high_temp: number;
  low_temp: number;
  max_dhi: null;
  max_temp: number;
  min_temp: number;
  moon_phase: number;
  moon_phase_lunation: number;
  moonrise_ts: number;
  moonset_ts: number;
  ozone: number;
  pop: number;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  snow_depth: number;
  sunrise_ts: number;
  sunset_ts: number;
  temp: number;
  ts: number;
  uv: number;
  valid_date: string;
  vis: number;
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_gust_spd: number;
  wind_spd: number;
  weather:VisualWeatherInterface;

}




export default function Day(props: {
  backgroundColor: string;
  iconTextColor: string;
  item: MainWeatherInterface
}) {
  
  return (
    <div>
      <div
        style={{ background: props.backgroundColor }}
        className="day_container_div"
      >
        {CurrentIcon("55px","55px", props.iconTextColor, props.item.weather.icon)}
        <div style={{ color: props.iconTextColor }} className="day_title">
          Tue
        </div>
        <div style={{ color: props.iconTextColor }} className="day_temperature">
          {Math.round(Number(props.item.high_temp)) +'°C'} 
        </div>
      </div>
    </div>
  );
}


