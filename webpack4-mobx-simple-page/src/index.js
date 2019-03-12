/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import * as stores from './stores';
import Home from './layout/Home/index';
import Topic from './layout/Topic/index';
import Activites from './layout/Activities/index';
import Expection from './layout/Expection/404';

ReactDOM.render((
        <BrowserRouter>
            <Provider {...stores}>
                <Fragment>
                    <Link to="/">主页</Link>
                    <Link to="/activities">动态</Link>
                    <Link to="/topic">话题</Link>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/topic" component={Topic} />
                        <Route path="/activities" component={Activites} />
                        <Route path="/expection" component={Expection} />
                        {/* <Redirect to="/login" /> */}
                    </Switch>
                </Fragment>
            </Provider>
        </BrowserRouter>
), document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}