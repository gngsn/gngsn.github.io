import Main from './components/main';
import About from './components/about';
import Project from './components/Project';
import Header from './components/Header'
import React, { useReducer } from 'react';
import { initState, initReducer } from './context/default'
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './components/libs/theme';
import { mainContext } from './context';
import Cursor from './components/Cursor';
import DarkModeToggle from './components/DarkModeToggle';
import ProjectDetail from './components/Project/ProjectDetail';


function App() {
  const [state, dispatch] = useReducer(initReducer, initState)
  
  return (
    <mainContext.Provider value={{...state, dispatch}}>
      <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme} className="App">
        <Cursor/>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <DarkModeToggle/>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/project/:title" component={ProjectDetail} />
          </BrowserRouter>
      </ThemeProvider>
    </mainContext.Provider>
  );
}

export default App;
