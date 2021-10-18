import { API_URL_FORECAST } from "../API/api";
import useWeather from "../hooks/useWeather";
import Search from "../ui/Search";
import SmallWeatherCard from "./SmallWeatherCard";
import "./Card.scss";

const WeatherContent = () => {
  const [weatherData, fetchData, error, buttonDisabled] = useWeather(
    API_URL_FORECAST,
    "forecast-weather-city"
  );

  const onSearchSubmit = (value) => {
    if (value.trim().length < 1) return;

    fetchData(`${API_URL_FORECAST}${value}`);
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <Search
        disabled={buttonDisabled}
        onSubmit={onSearchSubmit}
        error={error}
      />
      {weatherData && Object.keys(weatherData).length > 0 && (
        <SmallWeatherCard data={weatherData} />
      )}
    </div>
  );
};

export default WeatherContent;
