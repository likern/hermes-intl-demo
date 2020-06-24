import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  IntlProvider,
  FormattedMessage
} from 'react-intl';

import { useLocale } from './hooks';
import { translations } from './i18n';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text><FormattedMessage id={'screens.onboarding.0.title'} /></Text>
    </View>
  );
}

export const LocalizedApp = () => {
  const currentLocale = useLocale();
  return (
      <IntlProvider
        locale={currentLocale}
        messages={translations[currentLocale]}
      >
        {/* this is a **hack** to disable type error bug in reac-intl
     // look at this https://github.com/Microsoft/TypeScript/issues/27552
     // for how to ignore such bugs
     // @ts-ignore */}
        <App />
      </IntlProvider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
