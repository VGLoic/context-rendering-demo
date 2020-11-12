import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import App from './examples/1-PropsOnly';
// import App from './examples/2-BasicContext';
// import App from './examples/3-BasicContext-Memo';
// import App from './examples/4-CountProvider';
// import App from './examples/5-OptimizedProvider';
// import App from './examples/6-Alternative';
import App from "./examples/sandbox";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
