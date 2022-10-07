import { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import AppState from "./state/appState";
import appTheme, {palette} from "./styles/theme";
import AppDrawer from "./components/appDrawer";
import PrimaryAppBar from "./components/primaryAppbar";
import "./App.css";
import Main from "./components/main";


function App() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
      () => ({
          toggleMode: () => {
              setMode( prevMode => prevMode === 'light' ? 'dark' : 'light')
          }
      }), []
  );

  const theme = useMemo(
    () => createTheme({
      palette:
      {...palette, mode: mode},
      ...appTheme
    })
  )

  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <PrimaryAppBar switchColorMode={colorMode.toggleMode}/>
          <CssBaseline />
          <AppDrawer />
          <Main />
        </Box>
      </AppState>
    </ThemeProvider>
  );
}

export default App;
