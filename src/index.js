import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Input from './Input';
import { BrowserRouter } from 'react-router-dom'; 
//소문자 불가 import app X
// import App O

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
    
  </BrowserRouter>
);

