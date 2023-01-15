import React from "react";
import {
  Cloudy,
  CloudySun,
  CurrentIcon,
  Mist,
  Rain,
  Snow,
  Sun,
  Thunder,
} from "../icons/icons";

import { Location } from "../icons/icons";
import { ResultInterface } from "../api/dataApi";
// imageUrl:string, currentWeather:ResultInterface |null
export default function ImageSide(props: {
  currentWeather: ResultInterface | null;
  imageUrl: string;
}) {
  const date = new Date();
  const monthNumber = date.getMonth();
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day =
    date.toDateString().split(" ")[2].toString() +
    " " +
    date.toDateString().split(" ")[0].toString() +
    " " +
    date.toDateString().split(" ")[3].toString();

  const icon_id = String(props.currentWeather?.icon);

  return (
    <div className="left_side">
      <div className="cityImagediv">
        {props.imageUrl ? (
          <img className="cityImg" src={props.imageUrl} alt="" />
        ) : null}
        <div className="dateTextDiv">
          <div>
            <div className="date_day">{monthList[monthNumber]}</div>
            <div className="date">{day}</div>
          </div>
          <div className="location_conatainer_div">
            <div>
              <Location />
            </div>
            {props.currentWeather?.name}
          </div>
        </div>
        <div className="temperature_container_div">
          {CurrentIcon("95px", "95px", "#fff", icon_id)}
          <div className="temperature">
            {Math.round(Number(props.currentWeather?.temp)) + " °C"}
          </div>
          <div className="temperature_description">
            {props.currentWeather?.description}
          </div>
        </div>
      </div>
    </div>
  );
}
