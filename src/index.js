import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppCounter from './components/app-counter/AppCounter'
import AppForm from "./components/app-form/AppForm";
import reportWebVitals from './reportWebVitals';
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

ReactDOM.render(
  <React.StrictMode>
      {/*<AppCounter counter={0}/>*/}
      {/*<AppForm/>*/}

      <CurrencyConverter value='100'/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
