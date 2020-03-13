import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NewSet from './pages/NewSet';
import AllSets from './pages/AllSets';
import CustomSets from './pages/CustomSets';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="body-container">
        <Header />

        <main className="main">
          <Switch>
            <Route path="/newset">
              <NewSet />
            </Route>
            <Route path="/all">
              <AllSets />
            </Route>
            <Route path="/custom/:userId">
              <CustomSets />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
