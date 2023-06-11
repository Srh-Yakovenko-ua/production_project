import React, { Suspense } from 'react';
import './styles/index.scss';

import { AppRouter } from 'app/providers/router';
import { cls } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cls('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
