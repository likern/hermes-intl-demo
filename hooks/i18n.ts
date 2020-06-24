import { useState, useCallback, useEffect } from 'react';
import {
  addEventListener,
  removeEventListener,
  getLocales
} from 'react-native-localize';

import { languages, defaultLanguage } from '../i18n';

const getBestLocaleOrDefault = (defaultVal: string = defaultLanguage) => {
  const locales = getLocales();
  const supportedLocales = locales.filter(locale =>
    languages.includes(locale.languageCode)
  );
  return supportedLocales.length > 0
    ? supportedLocales[0].languageCode
    : defaultVal;
};

export const useLocale = () => {
  const [currentLocale, setCurrentLocale] = useState<string>(() =>
    getBestLocaleOrDefault()
  );

  console.log(`[useLocale] currentLocale is [${currentLocale}]`);

  const localeChanged = useCallback(() => {
    console.log(`[useLocale] localeChanged callback`);
    const newLocale = getBestLocaleOrDefault();
    console.log(
      `[useLocale] localeChanged callback: newLocale is [${newLocale}]`
    );
    newLocale !== currentLocale && setCurrentLocale(newLocale);
  }, [currentLocale]);

  useEffect(() => {
    console.log(`[useLocale] addEventListener is [${addEventListener}]`);
    console.log(`[useLocale] removeEventListener is [${removeEventListener}]`);
    addEventListener('change', localeChanged);

    return () => {
      removeEventListener('change', localeChanged);
    };
  }, [localeChanged]);

  return currentLocale;
};
