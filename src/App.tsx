import React, {FC} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseStateHook from './components/useState/UseState';
import Header from './components/Header';
import './main.css'
import Home from './components/Home';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usestate" element={<UseStateHook />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
