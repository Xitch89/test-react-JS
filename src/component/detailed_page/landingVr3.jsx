import React, { Component } from 'react';
import LandingVr3 from '../../assets/image_detail_page/landing_vr2.jpg';
import DetailedPage from '../camon/detailed_page/detailed_page';

class Landing3 extends Component {
  render() {
    return (
      <div>
        <DetailedPage weyImage={LandingVr3} mainText="Landing vr.2" sumText="Lorem ipsum dolor sit amet consecte" />
      </div>
    );
  }
}

export default Landing3;
