import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <Routes>
                {Object.values(routerConfig).map(({element, path}) => (
                    <Route key={path} element={element} path={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};

