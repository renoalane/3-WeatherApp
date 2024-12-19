/* eslint-disable  @typescript-eslint/no-explicit-any */
interface PropsResultWeather {
  data: any;
}

const ResultWeather = ({ data }: PropsResultWeather) => {
  function Ktoc(K: number) {
    return Math.floor(K - 273.15) + "°C";
  }

  return (
    <div>
      {data && (
        <div className="p-2 flex flex-col justify-center items-center gap-1">
          <p>{Ktoc(data.main.temp)}</p>
          <p>{data.name}</p>
          <div className="flex justify-center items-center mt-2">
            <p>{data.weather[0].main}</p>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultWeather;
