import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { API_IMAGE_URL } from "./../API/api";
import humidityIcon from "./../assets/img/humidity.png";
import tempIcon from "./../assets/img/temp.png";
import windIcon from "./../assets/img/wind.png";

const WeatherCard = ({ data }) => {
  const formatTemp = (temp) => `${Math.floor(temp)}°`;
  const [weatherInfo] = data.weather;
  const weatherListInfo = [
    {
      label: "Max temp",
      value: formatTemp(data.main.temp_max),
      icon: tempIcon,
    },
    {
      label: "Min temp",
      value: formatTemp(data.main.temp_min),
      icon: tempIcon,
    },
    {
      label: "Wind speed",
      value: `${Math.floor(data.wind.speed)} m/s`,
      icon: windIcon,
    },
    {
      label: "Humidity",
      value: data.main.humidity + "%",
      icon: humidityIcon,
    },
  ];
  const weatherList = weatherListInfo.map((item) => {
    return (
      <ListItem key={item.label} disablePadding>
        <ListItemText className="card__info-item">
          <div>
            <img src={item.icon} alt="" aria-hidden="true" />
            <Typography component="span" variant="body1">
              {item.label} :
            </Typography>
          </div>
          <Typography fontWeight="700" component="span" variant="h6">
            {item.value}
          </Typography>
        </ListItemText>
      </ListItem>
    );
  });

  return (
    <Card className="card">
      <CardHeader
        className="card__header"
        action={data.sys.country}
        title={data.name}
        titleTypographyProps={{
          fontSize: "2rem",
        }}
      ></CardHeader>
      <CardContent>
        <Box marginBottom="10px" display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" flex="1 1 auto">
              <Box>
                <img
                  className="card__icon"
                  src={`${API_IMAGE_URL}${weatherInfo.icon}.png`}
                  alt={weatherInfo.main}
                />
              </Box>
              <Box>
                <Typography variant="h3">
                  {formatTemp(data.main.temp)}
                </Typography>
                <Typography variant="h6">
                  Feels like: {formatTemp(data.main.feels_like)}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h5">{weatherInfo.description}</Typography>
          </Box>
          <Box flexBasis="400px" flexShrink="1">
            <List>{weatherList}</List>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
