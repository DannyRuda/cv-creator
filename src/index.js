import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppFunction} from './App';
import "./reset.css"
import "./responsiveness.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppFunction />
  </React.StrictMode>
);

