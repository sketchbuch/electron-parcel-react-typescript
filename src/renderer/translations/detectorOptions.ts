import { DetectorOptions } from 'i18next-browser-languagedetector';
import { lookupLocalStorage } from '../constants';

export const detection: DetectorOptions = {
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  lookupLocalStorage,
};
