import { useEffect, useState } from "react";
import { getDate } from "../utils/date";

/* eslint-disable react/prop-types */
const Card = ({ weatherLocation, weatherCurrent, convert }) => {
  const [date, setDate] = useState();

  useEffect(() => {
    if (weatherLocation) {
      const formattedDate = getDate(weatherLocation);
      setDate(formattedDate);
    }
  }, [weatherLocation.name]);

  console.log(convert);
  return (
    <div className=" flex items-center justify-center  border-2 shadow-md w-72  rounded-md ">
      <div className="flex flex-col bg-white rounded p-4  max-w-xs w-full">
        <div className="font-bold text-xl">{weatherLocation.name}</div>
        <div className="text-sm text-gray-500">{date}</div>
        <div className="mt-6  self-center inline-flex items-center justify-center rounded-lg  h-32 w-32">
          <img
            className="text-2xl w-full object-contain h-full"
            src={weatherCurrent.condition.icon}
          />{" "}
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">
            {" "}
            {convert ? weatherCurrent.temp_c : weatherCurrent.temp_f}
          </div>
          <div className="flex flex-col items-center ml-6">
            <div>{weatherCurrent.condition.text}</div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="text-sm font-light text-gray-500">
                {convert ? weatherCurrent.temp_c : weatherCurrent.temp_f}
              </span>
            </div>
            <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="text-sm font-light text-gray-500">
                {convert ? weatherCurrent.temp_c : weatherCurrent.temp_f}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">
              {weatherCurrent.wind_kph}km/h{" "}
              <span className="text-red-500">{weatherCurrent.wind_dir}</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">
              {weatherCurrent.humidity}%
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">
              {weatherCurrent.vis_km}km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
