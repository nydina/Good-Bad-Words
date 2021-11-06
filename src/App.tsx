
import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import Home from './Home';
import Result from './Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  let [word, setWord] = useState<string>()
  return (
    <>
    <div className="App">
      <header>
    <img src="logo.png"/>
    </header>
      <BrowserRouter>
        <Routes>
          <Route path="/result" element={<Result word={word}></Result>}></Route>
          <Route path="/" element={<Home checkWord={(wordFromHome) => setWord(wordFromHome)}></Home>}></Route>
        </Routes>
      </BrowserRouter>
      <footer> Made with Love by
    <a href="https://female-coders.at"/>Female Coders Linz
    </footer>
    </div>
    </>
  );
}

export default App;
