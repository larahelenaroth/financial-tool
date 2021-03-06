import React from 'react';
// ACTIONS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
//COMPONENTS
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
// CSS
import './App.css';

/* 
  Combine redux store, react, routes
*/

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header branding="AM" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
/*  */
