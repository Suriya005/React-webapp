/// <reference types="react" />
import { I18nProvider } from '../types';
export interface TranslationContextProps {
    locale: string;
    setLocale: (locale: string) => void;
    i18nProvider: I18nProvider;
}
declare const TranslationContext: import("react").Context<TranslationContextProps>;
export { TranslationContext };
