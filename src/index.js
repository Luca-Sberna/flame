import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Corretto con ReactDOM.createRoot

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
