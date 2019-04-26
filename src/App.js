import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import NotFound from './NotFound';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route
            exact path={'/'}
            component={Home}
          />
          <Route
            path={'/projects'}
            component={Projects}
          />
          <Route
            path={'/about'}
            component={About}
          />
          <Route
            component={NotFound}
          />
        </Switch>
        <Footer />

      </main>
    </div>
  );
}

export default App;
