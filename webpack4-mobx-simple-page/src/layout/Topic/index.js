import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Charmander from './Charmander/index';
import Bulbasaur from './Bulbasaur/index';
import Pikachu from './Pikachu/index';
import Squirtle from './Squirtle/index';

export default class Topic extends Component {
  render() {
    return (
      <div>
        <div>Topic</div>
        <div>
          <Link to="/topic/charmander">charmander</Link>
          <Link to="/topic/bulbasaur">bulbasaur</Link>
          <Link to="/topic/pikachu">pikachu</Link>
          <Link to="/topic/squirtle">squirtle</Link>
        </div>
        <Switch>
          <Route path="/topic/charmander" component={Charmander}/>
          <Route path="/topic/bulbasaur" component={Bulbasaur}/>
          <Route path="/topic/pikachu" component={Pikachu}/>
          <Route path="/topic/squirtle" component={Squirtle}/>
        </Switch>
      </div>
    )
  }
}
