import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Game from './pages/Game';
import { orange } from '@mui/material/colors';

function App() {
  const [username, setUsername] = useState("Guest")

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[500]
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
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
