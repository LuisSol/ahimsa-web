import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import MainScreen from './components/MainScreen';
import StartScreen from './components/StartScreen';
import store from './redux/storeConfig';

const MainContainer = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
`
const AppView = styled.section`
  height: 93%;
`

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <MainContainer>
        <Header />        
        <AppView>   
          <AnimatePresence exitBeforeEnter>       
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={MainScreen} />
              <Route path="/start" component={StartScreen} />
            </Switch>
          </AnimatePresence>
        </AppView>       
      </MainContainer>
    </Provider>
  );
}

export default App;
