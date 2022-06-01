import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from './layout/MainLayout';
import Overview from './overview/Overview';
import RoomDetail from './room/RoomDetail';

const MainRoute = () => {
    return (
        <Switch>
            <Layout>
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/">
                    <Redirect to="/overview" />
                </Route>
                <Route exact path="/overview/:room" component={RoomDetail} />
                <Route exact path="/overview/user_profile" component={Overview} />
                <Route exact path="/overview/preferences" component={Overview} />
            </Layout>
        </Switch>
    )
}

export default MainRoute;