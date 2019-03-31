/**
 * @file 公共头部
 * @author cyseria <xcyseria@gmail.com>
 */

import React, { Component } from 'react';
import './index.less';

export default class GlobalHeader extends Component {
    render() {
        return (
            <div className='nav'>
                <a href='/home'>主页</a>
                <a href='/activities'>动态</a>
                <a href='/topic/togepi'>话题</a>
            </div>
        );
    }
}
