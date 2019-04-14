/**
 * @file
 * @author 陈蔓青 <chenmanqing@baidu.com>
 * @created time: 2019-04-12 11:54:59
 * @last modified by: 陈蔓青
 * @last modified time: 2019-04-14 14:37:39
 */

import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Togepi from './Togepi/index';
import Bulbasaur from './Bulbasaur/index';
import Pikachu from './Pikachu/index';
import Squirtle from './Squirtle/index';
import Psyduck from './Psyduck/index';

export default class Topic extends Component {
    render() {
        return (
            <div className='content'>
                <h1>Topic</h1>
                <div className='nav'>
                    <Link to='/'>波克比</Link>
                    <Link to='/bulbasaur'>妙蛙种子</Link>
                    <Link to='/pikachu'>皮卡丘</Link>
                    <Link to='/squirtle'>杰尼龟</Link>
                    <Link to='/psyduck'>可达鸭</Link>
                </div>
                <Switch>
                    <Route exact path='/' component={Togepi} />
                    <Route path='/bulbasaur' component={Bulbasaur} />
                    <Route path='/pikachu' component={Pikachu} />
                    <Route path='/squirtle' component={Squirtle} />
                    <Route path='/psyduck' component={Psyduck} />
                </Switch>
            </div>
        );
    }
}
