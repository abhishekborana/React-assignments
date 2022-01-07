import './App.css';
import React from 'react';
import Mainpage from './MainPage/Mainpage';
import Postview from './PostView/Postview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/postViewPage" element={<Postview />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
