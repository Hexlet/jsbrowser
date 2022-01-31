import React from 'react';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import store from './store.js';
import App from './App.jsx';

import en from './locales/index.js';

const defaultLanguage = 'en';

export default async () => {
  const i18nInstance = i18n.createInstance();

  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: defaultLanguage,
      resources: {
        en,
      },
    });

  const vdom = (
    <React.StrictMode>
      <I18nextProvider i18n={i18nInstance}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </React.StrictMode>
  );

  return vdom;
};
