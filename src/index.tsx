import {render} from 'react-dom';
import './app/styles/index.scss'
import './shared/config/i18n/i18n'
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';

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

