import axios from "axios";
import React from "react";

async function getData() {
  const response = await axios.get(
    `https://open-meteo.com/en/docs#latitude=52.52,0.000053&longitude=13.41,0.000011&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,pressure_msl,surface_pressure,cloud_cover,wind_speed_120m,wind_speed_180m,wind_direction_80m,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm&timezone=Europe%2FMoscow`
  );
  return response.data;
}

export default async function page() {
  const data = await getData();

  return <div></div>;
}
