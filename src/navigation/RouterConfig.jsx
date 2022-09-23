import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DASHBOARD, ROOT, SETTING } from './CONSTANTS';
import { NotFound } from './NotFound';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Setting from 'pages/Setting';

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<Home />} />
        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path={SETTING} element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
