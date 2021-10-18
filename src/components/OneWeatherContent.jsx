import { API_URL_ONE_LOCATION } from "../API/api";
import useWeather from "../hooks/useWeather";
import Search from "../ui/Search";
import "./Card.scss";
import WeatherCard from "./WeatherCard";

const OneWeatherContent = () => {
  const [oneWeatherData, fetchData, error, buttonDisabled] = useWeather(
    API_URL_ONE_LOCATION,
    "current-weather-city"
  );

  const onSearchSubmit = (value) => {
    if (value.trim().length < 1) return;

    fetchData(`${API_URL_ONE_LOCATION}${value}`);
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <Search
        disabled={buttonDisabled}
        onSubmit={onSearchSubmit}
        error={error}
      />
      {oneWeatherData && Object.keys(oneWeatherData).length > 0 && (
        <WeatherCard data={oneWeatherData} />
      )}
    </div>
  );
};

export default OneWeatherContent;
