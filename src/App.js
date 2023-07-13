import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Game from './pages/Game';
import { blue, blueGrey } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

function App() {
  const [username, setUsername] = useState("Guest")

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[300]
      },
      background: {
        default: "#f4f4f5"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path='/game' element={<Game username={username}/>} />
          <Route path='/' element={<Home setUsername={setUsername}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
