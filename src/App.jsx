import React from 'react';
import { Switch } from 'react-router';
import './App.scss';
import { Route } from 'react-router-dom';
import { Home, Footer, Header, Profile } from './containers';
import { NotFound } from './components';

const App = () => {
  return (
    <>
      <Header />
      <main className='main-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/:id' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
