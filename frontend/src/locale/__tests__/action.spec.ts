import { dispatchToggleLanguage, TOGGLE_LANGUAGE } from "../actions";

describe("Locale Actions", () => {
    it(`should return action with type ${TOGGLE_LANGUAGE} and no payload when dispatching toggle language`, function() {
        expect(dispatchToggleLanguage()).toEqual({
            type: TOGGLE_LANGUAGE,
        });
    });
});
