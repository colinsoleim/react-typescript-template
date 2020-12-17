/* eslint @typescript-eslint/ban-types: 'off' */

import { Dict, Translation } from './model';
import TRANSLATIONS from '../en-us.json';

export const _keys = (obj: Object): string[] => (obj ? Object.keys(obj) : []);

export const _replaceAll = (original: string, textToReplace: string, replaceWith: string): string => {
  return (original || '').split(textToReplace).join(replaceWith);
};

export const __t = (key: string, _params: Object = {}): string => {
  const rawText = TRANSLATIONS[key];
  if (!rawText) return key;

  return _keys(_params)
    .map((paramKey) => [`{{${paramKey}}}`, _params[paramKey]])
    .reduce((translatedText, currentItem) => {
      const [textToReplace, replaceWith] = currentItem;
      return _replaceAll(translatedText, textToReplace, replaceWith);
    }, rawText);
};

export const _translateEach = <T extends Object>(dict: T): T => {
  return (
    _keys(dict)
      .map((key) => [key, dict[key]])
      // map any string values to Translation
      .map(([key, value]): { key: string; translation: Translation } => {
        const translation: Translation = _toTranslation(value);
        return { key, translation };
      })
      // now the type is { key:string, translation:Translation }
      .map(({ key, translation }): [string, string] => [key, __t(translation.key, translation.params)])
      .reduce((obj, current): Dict<string> => {
        const [key, translatedText] = current;
        return { ...obj, [key]: translatedText };
      }, {}) as T
  );
};

export const _toTranslation = (value: string | Translation): Translation => {
  return typeof value === 'string' ? new Translation(value) : value;
};
