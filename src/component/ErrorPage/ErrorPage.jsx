import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ErrorPage.module.css';

function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div className={classes.error_page_container}>
      <div className={classes.error_page}>
        <h1>{t('error')}</h1>
        <p className={classes.error_massage}>{t('errorMasseg')}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
