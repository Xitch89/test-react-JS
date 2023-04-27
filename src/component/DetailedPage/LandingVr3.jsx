import React from 'react';
import LandingVr3 from '../../assets/image_detail_page/landing_vr2.jpg';
import DetailedPage from '../camon/DetailedPage/DetailedPage';
import withScrollToTop from '../withScrollToTop';

function Landing3() {
  return (
    <DetailedPage weyImage={LandingVr3} mainText="Landing vr.3" sumText="Lorem ipsum dolor sit amet consecte" />
  );
}

export default withScrollToTop(Landing3);
