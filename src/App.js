import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Game from './pages/Game';

function App() {
  const [username, setUsername] = useState("Guest")

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
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
