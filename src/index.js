import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { FronteggProvider } from '@frontegg/react';



const contextOptions = {
  baseUrl: 'https://app-oqjt8fdz57ex.frontegg.com',
  clientId: '65ed77cd-8189-4538-a9c7-3e6f6b54f6cc'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
          <App />
      </FronteggProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
