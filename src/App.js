import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

const DetailPage = () => {
  return <h1>Detail Page</h1>;
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/details' component={DetailPage} />
      </Switch>
    </div>
  );
};

export default App;
