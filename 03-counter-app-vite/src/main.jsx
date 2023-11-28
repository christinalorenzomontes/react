import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'

import './styles.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <CounterApp value={ 3 } /> */}
        <FirstApp />
    </React.StrictMode>
);