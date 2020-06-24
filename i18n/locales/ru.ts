import { Onboarding, Screens, Locale } from './types';

const defaultButtonLabel = 'Далее';

const onboarding: Onboarding = {
  0: {
    title: 'Нужные задачи в нужный момент',
    subtitle: 'Чем больше тегов вы добавляете, тем точнее результат.',
    buttonLabel: defaultButtonLabel
  },
  1: {
    title: 'Даты и времeнные промежутки',
    subtitle:
      'Выберите даты, временные промежутки и задачи, которые попадают хоть в один из них, будут показаны.',
    buttonLabel: defaultButtonLabel
  },
  2: {
    title: 'Относительные даты',
    subtitle:
      'Автоматически меняют своё значение. Например, каждый день или каждую неделю.',
    buttonLabel: defaultButtonLabel
  },
  3: {
    title: 'Добавляйте даты к задаче',
    subtitle:
      'Вы можете добавлять одну, две и больше дат к одной задаче. Все для вашего удобства.',
    buttonLabel: defaultButtonLabel
  },
  4: {
    signin: {
      title: 'Начните работать',
      subtitle:
        'Введите номер телефона и мы отправим вам SMS с кодом для входа в приложение.',
      buttonLabel: 'Войти'
    },
    loading: { buttonLabel: 'Загружаем данные ...' }
  }
};

const screens: Screens = {
  onboarding
};

const locale: Locale = { screens };

export default locale;
