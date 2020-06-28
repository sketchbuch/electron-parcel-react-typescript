export * from './config';
export * from './detectorOptions';

import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const i18n = i18next.use(LanguageDetector).use(initReactI18next);
