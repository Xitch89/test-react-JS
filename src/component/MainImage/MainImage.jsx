import React from 'react';
import { useTranslation } from 'react-i18next';
import RefButton from '../camon/RefButton';
import classes from './MainImage.module.css';

function MainImage() {
  const { t } = useTranslation();
  return (
    <div className={classes.mainImage}>
      <p className={classes.mainImage_smallTitleText}>
        {t('agencyDescription')}
      </p>
      <h1 className={classes.mainImage_titleText}>
        {t('uniqueTemplateDescription')}
        <br />
        {t('creativeAgenciesDescription')}
      </h1>
      <RefButton classLink={classes.mainImage_linkLayout} linkText={t('vieLayouts')} />
    </div>
  );
}

export default MainImage;
