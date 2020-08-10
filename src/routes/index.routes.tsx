import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomeScreen from '../screens/Home/Home.screen.web';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </>
  );
}