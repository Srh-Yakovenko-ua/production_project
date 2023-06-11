import { render } from 'react-dom';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

render(
  <div className="app">
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);
