import React from "react";

import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import { AllowedLocale } from "../locale/types";
import { dispatchToggleLanguage } from "../locale/actions";
import { TextBtn } from "../init/ui/buttons";

const Home = ({ toggleLanguage }: { toggleLanguage: Function }) => (
    <div>
        <TextBtn
            onClick={() => {
                toggleLanguage();
            }}
        >
            <FormattedMessage id="toggleLanguage" />
        </TextBtn>
    </div>
);

const mapDispatchToProps = {
    toggleLanguage: dispatchToggleLanguage,
};

const mapStateToProps = ({ locale }: { locale: AllowedLocale }) => ({
    locale,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
