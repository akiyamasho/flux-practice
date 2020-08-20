import React, { useEffect } from "react";
import styled from "styled-components";

import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import { AllowedLocale } from "../locale/types";
import { dispatchToggleLanguage } from "../locale/actions";
import { TextBtn } from "../init/ui/buttons";
import { dispatchGetModelPredictions } from "./actions";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Home = ({
    toggleLanguage,
    modelPredictions,
}: {
    toggleLanguage: Function;
    modelPredictions: string;
}) => {
    useEffect(() => {
        dispatchGetModelPredictions();
    });

    return (
        <Container>
            Model Predictions: {modelPredictions}
            <br />
            <TextBtn
                onClick={() => {
                    toggleLanguage();
                }}
            >
                <FormattedMessage id="toggleLanguage" />
            </TextBtn>
        </Container>
    );
};

const mapDispatchToProps = {
    toggleLanguage: dispatchToggleLanguage,
};

const mapStateToProps = (
    { locale }: { locale: AllowedLocale },
    { modelPredictions }: { modelPredictions: string }
) => ({
    locale,
    modelPredictions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
