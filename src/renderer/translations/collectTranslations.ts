import { Resource, ResourceKey, ResourceLanguage } from 'i18next';
import { availableLanguages } from '../constants';
import { Langs } from './translations.interface';

const { readdirSync, readFileSync } = window.node.fs;

export const collectTranslations = (
  pathToLocales: string,
  langsToLoad: Langs[] = [...availableLanguages]
): Resource => {
  return langsToLoad.reduce((accTranslations: Resource, curLang: Langs): Resource => {
    const langFolder = `${pathToLocales}/${curLang}/`;

    try {
      const files = readdirSync(langFolder, { encoding: 'utf8' }).filter((fileName: string) =>
        fileName.includes('.json')
      );

      if (files.length > 0) {
        const langNamespaces: ResourceKey = files.reduce(
          (accNs: ResourceLanguage, curNs: string): ResourceLanguage => {
            try {
              const contents: JSON = JSON.parse(readFileSync(`${langFolder}/${curNs}`, 'utf8'));

              if (contents) {
                return { ...accNs, [curNs.replace('.json', '').toString()]: contents };
              }
            } catch (err) {
              // Ignore file and carry on...
            }

            return accNs;
          },
          {}
        );

        return { ...accTranslations, [curLang]: langNamespaces } as Resource;
      }
    } catch (error) {
      console.log('### error', error);
      // Ignore..
    }

    return accTranslations;
  }, {});
};
