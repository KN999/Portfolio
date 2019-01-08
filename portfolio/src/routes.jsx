import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Components/App/App';
//import MainPage from './components/MainPage';
//import SomePage from './componenets/SomePage';
import Project from './Components/Project/Project';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
    </Route>
);

//<Route path="/Projects" component={Project} />