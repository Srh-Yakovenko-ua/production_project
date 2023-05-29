import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from './providers/ThemeProvider';
import {cls} from 'shared/lib/classNames/classNames';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cls('app', {flag: true, add: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <div>
                <Link to="/">main</Link>
                <Link to="/about">about</Link>
            </div>
            <Suspense fallback={<span>loading...</span>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;