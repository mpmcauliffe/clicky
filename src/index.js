import React from 'react'
import ReactDOM from 'react-dom'
import RetroReactApp from './react-components/RetroReactApp'
import 'normalize-css';
import './sass/main.scss'


ReactDOM.render(
    <React.StrictMode>
        <RetroReactApp />
    </React.StrictMode>,
    document.getElementById('root')
)
