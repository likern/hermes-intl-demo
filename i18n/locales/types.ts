interface OnboardingGeneral {
  title: string;
  subtitle: string;
  buttonLabel: string;
}

interface OnboardingSignIn {
  signin: { title: string; subtitle: string; buttonLabel: string };
  loading: { buttonLabel: string };
}

export interface Onboarding {
  0: OnboardingGeneral;
  1: OnboardingGeneral;
  2: OnboardingGeneral;
  3: OnboardingGeneral;
  4: OnboardingSignIn;
}

export interface Screens {
  onboarding: Onboarding;
}

export interface Locale {
  screens: Screens;
}

export interface Locales {
  [lang: string]: Locale;
}
