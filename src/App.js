import React, { Component } from 'react';
import './App.css';

import  '../src/css/reponsive.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// cai dat Bootstrap
import '../src/css/space.css';

import {Game1} from './component/game1';

import {Game2} from './component/game2';
import {Game3} from './component/game3';
import {Game4} from './component/game4';
import {Game5} from './component/game5';
import {Game6} from './component/game6';
import {Game7} from './component/game7';

import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import {FinalGame1} from './component/finalGame1';
import {FinalGame2} from './component/finalGame2';
import {FinalGame3} from './component/finalGame3';

import { Master } from './master';
import { FinalGame6 } from './component/finalGame6';
import { FinalGame7 } from './component/finalGame7';
import { FinalGame4 } from './component/finalGame4';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      
      <Router>
        <div>
          <Route exact path={"/"} component={Master}/>
          <Route path={"/game1"} component={Game1}  />
          <Route path={"/game2"} component={Game2}  />
          <Route path={"/game3"} component={Game3} />
          <Route path={"/game4"} component={Game4}/>
          <Route path={"/game5"} component={Game5}/>
          <Route path={"/game6"} component={Game6}/>
          <Route path={"/game7"} component={Game7}/>
 

          <Route path={"/finalgame1"} component={FinalGame1}/>
          <Route path={"/finalgame2"} component={FinalGame2} />
          <Route path={"/finalgame3"} component={FinalGame3} />
          <Route path={"/finalgame4"} component={FinalGame4} />
          <Route path={"/finalgame6"} component={FinalGame6} />
          <Route path={"/finalgame7"} component={FinalGame7} />

        </div>
      </Router>
    );
    
  }
  componentDidMount(){
    //localStorage.clear();
  }

}

export default App;
