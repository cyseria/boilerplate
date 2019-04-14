/**
 * @file 公共头部
 * @author cyseria <xcyseria@gmail.com>
 */

import React, {Component} from 'react';

import './index.less';

export default class GlobalHeader extends Component {
    render() {
        return (
            <header className='nav'>
                <a href='/home.html'>主页</a>
                <a href='/activities.html'>动态</a>
                <a href='/topic.html'>话题</a>
            </header>
        );
    }
}
