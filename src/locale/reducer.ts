import { getBrowserLocale } from "./utils";
import { TOGGLE_LANGUAGE } from "./actions";
import { LOCALE_EN, LOCALE_JA } from "./index";
import { AllowedLocale } from "./types";

const localeReducer = (
    state: AllowedLocale = getBrowserLocale(),
    { type }: { type: string }
) => {
    switch (type) {
        case TOGGLE_LANGUAGE:
            return state === LOCALE_JA ? LOCALE_EN : LOCALE_JA;
        default:
            return state;
    }
};

export default localeReducer;
