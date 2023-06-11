import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  <Suspense fallback={<span>loading...</span>}>
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={(
            <div className="page-wrapper">
              {element}
            </div>
          )}
          path={path}
        />
      ))}
    </Routes>
  </Suspense>
);
