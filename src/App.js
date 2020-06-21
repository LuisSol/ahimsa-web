import React from 'react';
import styled from 'styled-components'
import { Provider } from 'react-redux'

import Header from './components/Header'
import MainScreen from './components/MainScreen'
import store from './redux/storeConfig'

const MainContainer = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
`

function App() {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <MainScreen />
      </MainContainer>
    </Provider>
  );
}

export default App;
