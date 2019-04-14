/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
import Topic from './layout/index';
import '../../style/common.less';
import GlobalHeader from '../../components/GlobalHeader/index';

// 如果要用 BrowserRouter（没有 #）直接把 HashRouter 换成 BrowserRouter 即可
ReactDOM.render(
    <HashRouter>
        <Fragment>
            <GlobalHeader />
            <Topic />
        </Fragment>
    </HashRouter>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
