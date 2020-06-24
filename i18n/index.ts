import { allLocales } from './locales';

const flattenMessages = (
  nestedMessages: any,
  prefix = ''
): { [x: string]: string } => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

type AccumulatorType = [string[], { [lang: string]: { [id: string]: string } }];

const [languages, translations] = Object.entries(allLocales).reduce(
  ([_languages, _translations], [lang, locale]) => {
    const translation = flattenMessages(locale);
    const newTranslations = { ..._translations, [lang]: translation };
    const newLanguages = [..._languages, lang];
    const result: AccumulatorType = [newLanguages, newTranslations];
    return result;
  },
  [[], {}] as AccumulatorType
);

// At least one language should always exist
const defaultLanguage = languages[0];

export { languages, translations, defaultLanguage };
