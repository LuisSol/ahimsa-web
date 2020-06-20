import React from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import MainScreen from './components/MainScreen'

const MainContainer = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
`


function App() {
  return (
    <MainContainer>
      <Header />
      <MainScreen />
    </MainContainer>
  );
}

export default App;
