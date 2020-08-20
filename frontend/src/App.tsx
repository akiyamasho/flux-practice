import React from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import { mainRoutes } from "./init/routes";

const App = () => (
    <Switch>
        {mainRoutes.map(({ path, component, exact }) => (
            <Route exact={exact} key={path} path={path} component={component} />
        ))}
    </Switch>
);

export default withRouter(App);
