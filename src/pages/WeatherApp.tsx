import { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import ResultWeather from "../components/ResultWeather";

const WeatherApp = () => {
  const [weather, setWeather] = useState<object>();

  const APIKEY = "39c73fc8bcd015254683b98855d14051";

  const weatherFetch = async (city: string = "") => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: APIKEY,
        },
      },
    );
    if (response.status === 200) return response.data;
  };

  const handleChangeLocation = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value !== "") {
      const res = await weatherFetch(e.target.value);
      setWeather(res);
    } else {
      setWeather(undefined);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="text-sm m-5 p-2">
        <h4 className="mb-2">Input The Location</h4>
        <input
          name="location"
          type="text"
          onChange={handleChangeLocation}
          className="border border-black p-1 w-full text-black"
        />
      </div>
      <ResultWeather data={weather} />
      <Footer />
    </div>
  );
};

export default WeatherApp;
