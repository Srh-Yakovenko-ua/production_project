import {render} from 'react-dom';
import './styles/index.scss'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './theme/ThemeProvider';

render(
    <div className="app">
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
)

