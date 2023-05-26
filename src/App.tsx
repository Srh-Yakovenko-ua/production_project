import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from './pages/AboutPage/About.async';
import {MainPageAsync} from './pages/MainPage/Main.async';

const App = () => {
    return (
        <div>
            <div><Link to="/">main</Link>
                <Link to="/about">about</Link></div>
            <Suspense fallback={<span>loading...</span>}><Routes>
                <Route path="/" element={<MainPageAsync/>}/>
                <Route path="/about" element={<AboutPageAsync/>}/>
            </Routes></Suspense>
        </div>
    );
};

export default App;