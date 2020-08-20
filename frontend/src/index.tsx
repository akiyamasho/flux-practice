import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { rootSaga, sagaMiddleware } from "./init/sagas";
import { ConnectedIntlProvider, DEFAULT_LOCALE } from "./locale";
import { store } from "./init/reducers";

sagaMiddleware.run(rootSaga);

// Render

const intlProps = {
    defaultLocale: DEFAULT_LOCALE,
};

ReactDOM.render(
    <Provider store={store}>
        <ConnectedIntlProvider {...intlProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById("root")
);

// Service Worker

serviceWorker.unregister();
