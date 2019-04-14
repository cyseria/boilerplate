/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Home from './layout/index';
import GlobalHeader from '../../components/GlobalHeader';
import '../../style/common.less';

// 如果要用 BrowserRouter（没有 #）直接把 HashRouter 换成 BrowserRouter 即可
ReactDOM.render(
    <Fragment>
        <GlobalHeader />
        <Home />
    </Fragment>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
