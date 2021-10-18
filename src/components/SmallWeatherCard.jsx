import { Card, CardContent, CardHeader } from "@mui/material";
import { API_IMAGE_URL } from "./../API/api";
import windIcon from "./../assets/img/wind.png";

const WeatherCard = ({ data }) => {
  const formatTemp = (temp) => `${Math.floor(temp)}°`;

  console.log(data.list[4]);
  const weatherData = data.list.map((item) => {
    return (
      <li key={item.dt} className="card__item item-card">
        <div className="item-card__header">
          <span className="item-card__date">
            {item.dt_txt.substring(5, 10).replaceAll("-", ".")}
          </span>
          <span className="item-card__time">
            {item.dt_txt.slice(-8).slice(0, -3)}
          </span>
        </div>
        <div className="item-card__content">
          <div className="item-card__weather">
            {item.weather[0].description}
          </div>
          <div className="item-card__icon">
            <img
              src={`${API_IMAGE_URL}${item.weather[0].icon}.png`}
              alt={item.weather[0].main}
            />
          </div>
          <div className="item-card__body">
            <ul className="item-card__info">
              <li className="item-card__info-item">
                Max:
                <span className="item-card__info-name">
                  {formatTemp(item.main.temp_max)}
                </span>
              </li>
              <li className="item-card__info-item">
                Min:
                <span className="item-card__info-name">
                  {formatTemp(item.main.temp_min)}
                </span>
              </li>
              <li className="item-card__info-item">
                F.L.:
                <span className="item-card__info-name">
                  {formatTemp(item.main.feels_like)}
                </span>
              </li>
              <li className="item-card__info-item item-card__info-wind">
                <img src={windIcon} alt="wind" />
                <span className="item-card__info-name">
                  {Math.ceil(item.wind.speed)}
                </span>
                <span className="item-card__info-value">m/s</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    );
  });

  return (
    <Card className="card">
      <CardHeader
        className="card__header"
        action={data.country}
        title={data.name}
        titleTypographyProps={{
          fontSize: "2rem",
        }}
      ></CardHeader>
      <CardContent>
        <ul className="card__list">{weatherData}</ul>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
