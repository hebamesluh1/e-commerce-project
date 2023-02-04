import { useRoutes } from "react-router-dom";
import React, { Suspense } from 'react';
import { ThemeProvider } from "styled-components";
import { router as routes } from './routes';

//Style
import { GlobalStyle } from "./Global/style";
import { darkTheme, lightTheme} from "./Global/theme";

//context
import { themeContext } from "./Context/themeContext";
import { useEffect, useState } from "react";
import { AuthContext } from './Context/authContext';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    localStorage.getItem("theme") ===darkTheme.theme ? setTheme(darkTheme) : setTheme(lightTheme);
  }, []); 

  
  const router = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={[isAuthorized, setIsAuthorized]}>
        <themeContext.Provider value={[theme, setTheme]}>
            <GlobalStyle />
            <Suspense fallback={<div className="lds-dual-ring"></div>}>{router}</Suspense>
        </themeContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
