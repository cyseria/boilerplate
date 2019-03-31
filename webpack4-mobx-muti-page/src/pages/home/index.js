/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from '../../components/GlobalHeader/index';
import '../../style/common.less';
import Home from './layout/index';

alert('aaaaa');
console.log('lalallalallal');

// 如果要用 BrowserRouter（没有 #）直接把 HashRouter 换成 BrowserRouter 即可
ReactDOM.render(
    <div>
        <GlobalHeader />
        <Home />
    </div>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
