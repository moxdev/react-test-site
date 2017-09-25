import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404 Error</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>

    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));

// Switch needed for the 404 route, if not using Switch then both routes are valid and will render both components
