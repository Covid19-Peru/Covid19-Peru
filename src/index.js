import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
//Modo Normal REACT:
//ReactDOM.render(<App />, document.getElementById('root'));
//Modo Experimental REACT:
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
serviceWorker.unregister();