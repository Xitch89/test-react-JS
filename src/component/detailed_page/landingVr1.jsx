import React, { Component } from 'react';
import LandingVr1 from '../../assets/image_detail_page/landing_vr1.jpg';
import DetailedPage from '../camon/detailed_page/detailed_page';

class Landing1 extends Component {
  render() {
    return (
      <div>
        <DetailedPage weyImage={LandingVr1} mainText="Landing vr.1" sumText="Lorem ipsum dolor sit amet" />
      </div>
    );
  }
}

export default Landing1;
