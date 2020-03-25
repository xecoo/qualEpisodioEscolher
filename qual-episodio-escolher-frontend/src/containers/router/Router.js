import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import RandomEpisodePage from '../randomEpisodePage/RandomEpisodePage';

const Routes = {
    signup: '/signup',
    login: '/login',
    random: '/'
};

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={Routes.signup}>
                        SIGNUP
                    </Route>
                    <Route path={Routes.login}>
                        LOGIN
                    </Route>
                    <Route path={Routes.random}>
                        <RandomEpisodePage />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;