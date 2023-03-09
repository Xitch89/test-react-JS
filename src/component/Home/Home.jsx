import React, { Component } from 'react';
import Content from '../Content/Content';
import ExampleLayouts from '../camon/ExampleLayouts/ExampleLayouts';
import FollowSocial from '../FollowSocial/FollowSocial';
import MainImage from '../MainImage/MainImage';
import OurServices from '../OurServices/OurServices';
import SocRef from '../SocRef/SocRef';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import BottomBlock from '../BottomBlock/BottomBlock';

class Home extends Component {
  render() {
    return (
      <>
        <MainImage />
        <ExampleLayouts grayText="Our Core Layouts" yellowText="Template Pages" />
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
