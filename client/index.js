import React from 'react' 
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './css/style.scss'
import App from './components/App'

render(<Router><App /></Router>,document.getElementById('root'))