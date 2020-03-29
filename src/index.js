import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
//console.time('TIME index.js');
ReactDOM.render(<App />, document.getElementById('root'));
//console.timeEnd('TIME index.js');
serviceWorker.unregister();