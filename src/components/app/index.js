'use strict';

import React from 'react';
import {BrowserRouter, route} from 'react-router-dom';

import Dashboard from '../dashboard/index.js';
import Landing from '../landing/index.js';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}