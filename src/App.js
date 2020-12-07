import React, { createContext, useState } from 'react';
import './App.css';
import Header from './header'
import styled from 'styled-components'
import Wrapper from './wrapper'
import Table from './table'
import Rules from './rules'


export const ScoreContext = createContext()

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #0f2f52 20%, #13372d 100%);
  color: white;
  font-family: 'Agency FB', sans-serif;

  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`

function App() {
  const [score, setScore] = useState(0)
  return (
    <ScoreContext.Provider value={{
      score,
      setScore,
    }}>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default App;
