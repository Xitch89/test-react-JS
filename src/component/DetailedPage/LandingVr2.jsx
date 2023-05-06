import React from 'react';
import { useTranslation } from 'react-i18next';
import LandingVr2 from '../../assets/image_detail_page/landing_vr2.jpg';
import DetailedPage from '../camon/DetailedPage/DetailedPage';
import withScrollToTop from '../withScrollToTop';

function Landing2() {
  const { t } = useTranslation();

  return (
    <DetailedPage weyImage={LandingVr2} mainText={t('mainText2')} sumText={t('sumText2')} />
  );
}

export default withScrollToTop(Landing2);
