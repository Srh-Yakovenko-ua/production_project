import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'pages/PageLoader';

export const AppRouter = () => (

  <Routes>
    {Object.values(routerConfig).map(({ element, path }) => (
      <Route
        key={path}
        element={(
          <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
              {element}
            </Suspense>
          </div>
        )}
        path={path}
      />
    ))}
  </Routes>

);
