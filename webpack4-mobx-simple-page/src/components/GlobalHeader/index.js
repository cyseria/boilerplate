/**
 * @file 公共头部
 * @author cyseria <xcyseria@gmail.com>
 */

import React, {Component} from 'react';

import './index.less';

export default class GlobalHeader extends Component {
    state = {
        username: 'Cyseria',
        userAvatar: 'https://eux-public.bj.bcebos.com/2018/07/25/5hs55kimlbe272.jpg'
    }
    onMenuClick = () => {
        console.log('onMenuClick');
    }
    render() {
        return (
            <header className="header">
                Header
            </header>
        );
    }
}