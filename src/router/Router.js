import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from '../pages/home/Home';
// import About from '../pages/about/About';
// import GameScene from '../pages/gameScene/GameScene';
import NoMatch from '../pages/noMatch/NoMatch';
// import LastYear from '../pages/LastYear/LastYear';
// import Door from '../pages/Door/Door';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NoMatch} />
        </Switch>
    </Router>
);