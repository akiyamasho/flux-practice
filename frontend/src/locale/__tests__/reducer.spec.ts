import localeReducer from "../reducer";
import { LOCALE_EN, LOCALE_JA } from "..";
import { TOGGLE_LANGUAGE } from "../actions";

describe("Locale Reducer", () => {
    it(`should return same language when passing unsupported action type`, function() {
        expect(localeReducer(LOCALE_JA, { type: "unsupported" })).toEqual(
            LOCALE_JA
        );
    });

    it(`should return ${LOCALE_EN} when current language is ${LOCALE_JA} and toggle language action is passed`, function() {
        expect(localeReducer(LOCALE_JA, { type: TOGGLE_LANGUAGE })).toEqual(
            LOCALE_EN
        );
    });

    it(`should return ${LOCALE_JA} when current language is ${LOCALE_EN} and toggle language action is passed`, function() {
        expect(localeReducer(LOCALE_EN, { type: TOGGLE_LANGUAGE })).toEqual(
            LOCALE_JA
        );
    });
});
