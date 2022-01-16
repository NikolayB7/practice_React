import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppCounter from './components/app-counter/AppCounter'
import AppForm from "./components/app-form/AppForm";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      {/*<AppCounter counter={0}/>*/}
      <AppForm/>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
