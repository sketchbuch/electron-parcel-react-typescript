import { I18nextProvider } from 'react-i18next';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { availableLanguages } from './constants';
import { collectTranslations } from './translations/collectTranslations';
import { config, i18n } from './translations';
import Root from './components/Root/Root';

declare global {
  interface Window {
    __initialI18nStore__: string;
    __initialLanguage__: string;
  }
}

const resources = collectTranslations(`${__dirname}/../locales`, [...availableLanguages]);

if (!i18n.isInitialized) {
  i18n
    .init({
      ...config,
      resources,
    })
    .then((): void => {
      ReactDOM.render(
        <I18nextProvider i18n={i18n}>
          <Root />
        </I18nextProvider>,
        document.getElementById('root')
      );
    })
    .catch((): void => {
      ReactDOM.render(
        <p>An error occured initialising localisation</p>,
        document.getElementById('root')
      );
    });
}
