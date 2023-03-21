import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Content from '../Content/Content';
import ExampleLayouts from '../camon/ExampleLayouts/ExampleLayouts';
import FollowSocial from '../FollowSocial/FollowSocial';
import MainImage from '../MainImage/MainImage';
import OurServices from '../OurServices/OurServices';
import SocRef from '../SocRef/SocRef';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import BottomBlock from '../BottomBlock/BottomBlock';
import SearchWeather from '../Weather/SearchWeather/SearchWeather';

const API_KEY = '7b2c82371fe17f86708068b387c41dfd';

class Home extends Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiUrl = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
    const weatherData = await apiUrl.json();
    console.log(weatherData);
  };

  render() {
    return (
      <>
        <MainImage />
        <ExampleLayouts grayText="Our Core Layouts" yellowText="Template Pages" />
        <SearchWeather weatherMethod={this.getWeather} />
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
}

export default Home;
