import OneWeatherContent from "./components/OneWeatherContent";
import Header from "./components/Header";
import { Container } from "@mui/material";
import WeatherContent from "./components/WeatherContent";
import Title from "./ui/Title";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Container>
          <Title>Current Weather</Title>
          <OneWeatherContent />
          <Title>Weather Forecast</Title>
          <WeatherContent />
        </Container>
      </main>
    </div>
  );
};

export default App;
