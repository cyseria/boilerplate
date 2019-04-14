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
                <a href='/home/index.html'>主页</a>
                <a href='/activities/index.html'>动态</a>
                <a href='/topic/index.html'>话题</a>
            </header>
        );
    }
}
