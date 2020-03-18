import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import NewSet from './pages/NewSet';
import AllSets from './pages/AllSets';
import CustomSets from './pages/CustomSets';
import Home from './pages/Home';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  overflow: auto;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`;

export default function App() {
  return (
    <Router>
      <AppContainer>
        <AppHeader />

        <Main>
          <Switch>
            <Route path="/newset">
              <NewSet />
            </Route>
            <Route path="/all/:setName">
              <AllSets />
            </Route>
            <Route path="/custom/:userId">
              <CustomSets />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </AppContainer>
    </Router>
  );
}
