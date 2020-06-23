import { I18nextProvider } from 'react-i18next';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { collectTranslations } from './translations/collectTranslations';
import { commonConfig, i18n } from './translations';
import { defaultLangKey } from './constants';
import Root from './components/Root/Root';

declare global {
  interface Window {
    __initialI18nStore__: string;
    __initialLanguage__: string;
  }
}

const resources = collectTranslations(`${__dirname}/../../locales`, [defaultLangKey]);

if (!i18n.isInitialized) {
  i18n
    .init({
      ...commonConfig,
      resources,
    })
    .then((): void => {
      ReactDOM.render(
        <I18nextProvider i18n={i18n}>
          <Root />
        </I18nextProvider>,
        document.getElementById('root')
      );
    });
}
