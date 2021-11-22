import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component }  from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';
import { About } from './pages/About';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Balance } from './pages/Balance';




function App() {
  return (
    <>
    <Router basename='/react-food'>
    <div className="App">
      <Header />
        <main className="container content" >
        <Switch>
          <Route exact path='/'>
            <Shop />
              </Route>
              <Route path='/about' component={About} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/balance' component={Balance} />
        </Switch>
        </main>
      <Footer />
    </div>
    </Router>
    </>
  );
}

export default App;
