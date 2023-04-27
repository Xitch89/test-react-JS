import React from 'react';
import LandingVr2 from '../../assets/image_detail_page/landing_vr2.jpg';
import DetailedPage from '../camon/DetailedPage/DetailedPage';
import withScrollToTop from '../withScrollToTop';

function Landing2() {
  return (
    <DetailedPage weyImage={LandingVr2} mainText="Landing vr.2" sumText="Lorem ipsum dolor sit amet consecte" />
  );
}

export default withScrollToTop(Landing2);
