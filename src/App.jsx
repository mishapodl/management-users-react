import React from 'react';
import { Switch } from 'react-router';
import './App.scss';
import { Home } from './Home';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
};

export default App;
