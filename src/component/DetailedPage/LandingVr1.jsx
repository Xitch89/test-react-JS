import React from 'react';
import { useTranslation } from 'react-i18next';
import LandingVr1 from '../../assets/image_detail_page/landing_vr1.jpg';
import DetailedPage from '../camon/DetailedPage/DetailedPage';
import withScrollToTop from '../withScrollToTop';

function Landing1() {
  const { t } = useTranslation();
  return (
    <DetailedPage weyImage={LandingVr1} mainText={t('mainText')} sumText={t('sumText')} />
  );
}

export default withScrollToTop(Landing1);
