import { useState } from 'react';
import Content from '../Content/Content';
import ExampleLayouts from '../camon/ExampleLayouts/ExampleLayouts';
import FollowSocial from '../FollowSocial/FollowSocial';
import MainImage from '../MainImage/MainImage';
import OurServices from '../OurServices/OurServices';
import SocRef from '../SocRef/SocRef';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import BottomBlock from '../BottomBlock/BottomBlock';
import SearchWeather from '../weather/SearchWeather/SearchWeather';
import WeatherInfo from '../weather/WeatherInfo/WeatherInfo';
import classes from './Home.module.css';
import withScrollToTop from '../withScrollToTop';
import { API_KEY } from '../../constants/constants';

function Home() {
  const [fetchedWeatherData, setWeatherData] = useState({
    temp: undefined,
    city: undefined,
    humidity: undefined,
    sunrise: undefined,
    wind: undefined,
    error: undefined,
  });

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const HTTP_INFO = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;

    if (city) {
      try {
        const apiUrl = await fetch(HTTP_INFO);
        const weatherData = await apiUrl.json();

        setWeatherData({
          temp: weatherData.main.temp,
          city: weatherData.name,
          humidity: weatherData.main.humidity,
          wind: weatherData.wind.speed,
          error: undefined,
        });
      } catch (error) {
        if (error.response?.status === 404) {
          setWeatherData({
            city: undefined,
            error: (
              <div className={classes.weatherErrorGif}>
                <p>The name of the city is incorrect</p>
                <img
                  src="https://i.gifer.com/FZ26.gif"
                  alt="Gif 404"
                  width="100px"
                  height="75px"
                />
              </div>
            ),
          });
        } else {
          setWeatherData({
            city: undefined,
            error: (
              <div className={classes.weatherErrorGif}>
                <p>The name of the city is incorrect</p>
                <img
                  src="https://i.gifer.com/FZ26.gif"
                  alt="Gif 404"
                  width="100px"
                  height="75px"
                />
              </div>
            ),
          });
        }
      }
    } else {
      setWeatherData({
        city: undefined,
        error: (
          <div className={classes.weatherErrorGif}>
            <p>Enter your city</p>
            <img
              src="https://i.gifer.com/FZ26.gif"
              alt="Gif 404"
              width="100px"
              height="75px"
            />
          </div>
        ),
      });
    }
  };

  const {
    temp, city, humidity, sunrise, wind, error,
  } = fetchedWeatherData;
  return (
    <>
      <MainImage />
      <ExampleLayouts grayText="Our Core Layouts" yellowText="Template Pages" />
      <SearchWeather weatherMethod={getWeather} />
      <WeatherInfo 
        temp={temp}
        city={city}
        humidity={humidity}
        sunrise={sunrise}
        wind={wind}
        error={error}
      />
      <Content />
      <BottomBlock />
      <ExampleLayouts grayText="Our Core Features" yellowText="Our Services" />
      <OurServices />
      <FollowSocial />
      <SubscribeBlock />
      <SocRef />
    </>
  );
}

export default withScrollToTop(Home);
