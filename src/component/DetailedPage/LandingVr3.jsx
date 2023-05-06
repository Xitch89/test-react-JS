import React from 'react';
import { useTranslation } from 'react-i18next';
import LandingVr3 from '../../assets/image_detail_page/landing_vr2.jpg';
import DetailedPage from '../camon/DetailedPage/DetailedPage';
import withScrollToTop from '../withScrollToTop';

function Landing3() {
  const { t } = useTranslation();

  return (
    <DetailedPage weyImage={LandingVr3} mainText={t('mainText3')} sumText={t('sumText3')} />
  );
}

export default withScrollToTop(Landing3);
