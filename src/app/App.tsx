import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from './providers/ThemeProvider';

import {AppRouter} from 'app/providers/router';
import {cls} from 'shared/lib';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cls('app', {flag: true, add: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <div>
                <Link to="/">main</Link>
                <Link to="/about">about</Link>
            </div>
            <AppRouter/>
        </div>
    );
};

export default App;