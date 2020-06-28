import { Langs } from '../../translations/translations.interface';
import { TFunction } from 'i18next';

export interface Store {
  app: boolean;
}

export interface LangBtnProps {
  label: Langs;
  onClick: (lang: Langs) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  t: TFunction;
}
