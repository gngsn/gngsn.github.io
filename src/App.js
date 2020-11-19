import Main from './components/main';
import About from './components/about';
import Project from './components/Project';
import Header from './components/Header'
import React, { useReducer } from 'react';
import { initState, initReducer } from './context/default'
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './theme';
import { mainContext } from './context';

function App() {
  const [state] = useReducer(initReducer, initState)
  console.log('state : ', state)
  
  return (
    <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme} className="App">
      <mainContext.Provider>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
        </BrowserRouter>
        </mainContext.Provider>
    </ThemeProvider>
  );
}

export default App;
