import React, {useContext} from 'react';
import { GlobalStyled } from "./GlobalStyled";

import { CreateContext } from './context/CreateContext';
import AuthContext from './context/AuthContext';
import Router from './router/Router';

function App() {

  const authContext = AuthContext();
  return (
    <>
      <CreateContext.Provider value={authContext}>
        <GlobalStyled />
        <Router />
      </CreateContext.Provider>
    </>
  )
}

export default App;