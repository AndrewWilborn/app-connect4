import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {


  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
