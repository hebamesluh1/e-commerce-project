import { useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { router as routes } from "./routes";
import AuthProvider from "./Context/authContext";
import ProductProvider from "./Context/productContext";

//Style
import { GlobalStyle } from "./Global/style";
import { darkTheme, lightTheme } from "./Global/theme";

//context
import { themeContext } from "./Context/themeContext";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    localStorage.getItem("theme") === darkTheme.theme
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
  }, []);

  const router = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <AuthProvider>
          <ProductProvider>
            <GlobalStyle />
            <Suspense fallback={<div className="lds-dual-ring"></div>}>
              {router}
            </Suspense>
          </ProductProvider>
        </AuthProvider>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
