import {render} from 'react-dom';
import './index.scss'
import App from './App';
import {BrowserRouter} from 'react-router-dom';

render(
    <div className="app">
        <BrowserRouter><App/></BrowserRouter>
    </div>,
    document.getElementById('root')
)

