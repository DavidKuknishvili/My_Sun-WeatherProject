import React from "react";
import { Location } from "../icons/icons";
import { ResultInterface } from "../api/dataApi";
import Day from "./Day";
import PopupComponent from "./PopupComponent";

export default function DetailSide(props: {
  currentWeather: ResultInterface | null;
  city: string;
  fourDay: any;
  setcity: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);



  return (
    <div className="right_side">
      <div className="right_main">
        <div>
          <div className="phw_div">
            {}
            <div className="phw_title">FEELS LIKE</div>
            <div className="phw_value">
              {Math.round(Number(props.currentWeather?.feelsLike))}
            </div>
          </div>
          <div className="phw_div">
            <div className="phw_title">HUMIDITY</div>
            <div className="phw_value">
              {props.currentWeather?.humidity + "%"}{" "}
            </div>
          </div>
          <div className="phw_div">
            <div className="phw_title">WIND</div>
            <div className="phw_value">
              {props.currentWeather?.wind + " km/h"}
            </div>
          </div>
        </div>
        <div className="day_conatiner_div">
          {props.fourDay.length === 0
            ? null
            : props.fourDay.map((item: any) => {
                const key = props.fourDay.indexOf(item);
                if (key === 0) {
                  return (
                    <Day
                      key={key}
                      item={item}
                      backgroundColor="#fff"
                      iconTextColor="#000"
                    />
                  );
                } else {
                  return (
                    <Day
                      key={key}
                      item={item}
                      backgroundColor="#272E37"
                      iconTextColor="#fff"
                    />
                  );
                }
              })}
        </div>

        <div>
          <button onClick={() => handleOpen()} className="Location_button">
            <Location /> Change Location
          </button>
        </div>
      </div>
      <PopupComponent setcity={props.setcity} open={open} setOpen={setOpen} />
    </div>
  );
}
