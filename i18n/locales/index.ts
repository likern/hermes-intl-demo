import { Locales } from './types';
import en from './en';
import ru from './ru';

/** Supported locales in priority order */
/** Starting from default locale */
const allLocales: Locales = { en, ru };

export { allLocales, en, ru };
