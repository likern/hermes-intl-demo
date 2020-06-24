import { Onboarding, Screens, Locale } from './types';

const defaultButtonLabel = 'Next';

const onboarding: Onboarding = {
  0: {
    title: 'The right tasks at the right time',
    subtitle: 'The more tags you add, the more accurate the result.',
    buttonLabel: defaultButtonLabel
  },
  1: {
    title: 'Dates and time periods',
    subtitle:
      'Choose dates, time periods and tasks that fall into at least one of them will be shown.',
    buttonLabel: defaultButtonLabel
  },
  2: {
    title: 'Relative dates',
    subtitle:
      'Automatically change their value. For example, every day or every week.',
    buttonLabel: defaultButtonLabel
  },
  3: {
    title: 'Add multiple dates to task',
    subtitle:
      'You can add one, two or more dates to one task. All for your convenience.',
    buttonLabel: defaultButtonLabel
  },
  4: {
    signin: {
      title: 'Get started',
      subtitle:
        'Enter your phone number and we will send you an SMS with a code to sign in to the application.',
      buttonLabel: 'Sign In'
    },
    loading: { buttonLabel: 'Loading ...' }
  }
};

const screens: Screens = {
  onboarding
};

const locale: Locale = { screens };

export default locale;
