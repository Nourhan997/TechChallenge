//REACT UTILITIES
import React, { useEffect, useState } from "react";

//LAYOUT
import "./App.scss";

import appTheme from "./theme/SuperAdminTheme";
import { ThemeProvider } from "@mui/material/styles";

//COMPONENT
import { AppContext } from "./AppContext";
import AppRouter from "./core/routes/AppRouter";

function App() {
  const [isSideOpen, setSideOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <AppContext.Provider
          value={{
            isSideOpen,
            setSideOpen,
          }}
        >
          <AppRouter />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
