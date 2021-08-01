import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component = {Homepage}/>
      {/* <Route path='/hats' component = {HatsPage}/> */}
      </Switch>
    </div>
  );
}

export default App;
