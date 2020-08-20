import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import { AllowedLocale } from "./types";

import enMessages from "./en.json";
import jaMessages from "./ja.json";

// Constants

export const LOCALE_STORAGE_KEY = "REMEMBER_LOCALE";

export const LOCALE_JA: AllowedLocale = "ja";
export const LOCALE_EN: AllowedLocale = "en";
export const DEFAULT_LOCALE = LOCALE_JA;

export const languagesList = {
    [LOCALE_EN]: "English",
    [LOCALE_JA]: "日本語",
};

export const messages = {
    [LOCALE_EN]: enMessages,
    [LOCALE_JA]: jaMessages,
};

export const ConnectedIntlProvider = connect(
    ({ locale }: { locale: AllowedLocale } = { locale: DEFAULT_LOCALE }) => ({
        locale,
        messages: messages[locale],
    })
)(IntlProvider);
