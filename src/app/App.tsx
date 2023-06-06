import React from 'react';
import './styles/index.scss'
import {useTheme} from './providers/ThemeProvider';

import {AppRouter} from 'app/providers/router';
import {cls} from 'shared/lib/classNames/classNames';
import {Navbar} from 'widgets/Navbar';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cls('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;