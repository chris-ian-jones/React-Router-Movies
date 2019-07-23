import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

// render app with 'BrowserRouter' to keep UI in synch with the URL
ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);
