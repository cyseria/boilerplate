import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Togepi from './Togepi/index';
import Bulbasaur from './Bulbasaur/index';
import Pikachu from './Pikachu/index';
import Squirtle from './Squirtle/index';
import Psyduck from './Psyduck/index';

export default class Topic extends Component {
  render() {
    return (
      <div className="content">
        <h1>Topic</h1>
        <div className="nav">
          <Link to="/topic/togepi">波克比</Link>
          <Link to="/topic/bulbasaur">妙蛙种子</Link>
          <Link to="/topic/pikachu">皮卡丘</Link>
          <Link to="/topic/squirtle">杰尼龟</Link>
          <Link to="/topic/psyduck">可达鸭</Link>
        </div>
        <Switch>
          <Route path="/topic/togepi" component={Togepi}/>
          <Route path="/topic/bulbasaur" component={Bulbasaur}/>
          <Route path="/topic/pikachu" component={Pikachu}/>
          <Route path="/topic/squirtle" component={Squirtle}/>
          <Route path="/topic/psyduck" component={Psyduck}/>
        </Switch>
      </div>
    )
  }
}
