import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PDashboard from '../../../pages/PDashboard';
import PDiscount from '../../../pages/PDiscount';
import PNotification from '../../../pages/PNotification';
import PHome from '../../../pages/PHome';
import PSetting from '../../../pages/PSetting';
import style from './style.module.scss';
import PMessage from '../../../pages/PMessage';
const Content = () => {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/dashboard/" element={<PDashboard />} />
        <Route path="/discount/" element={<PDiscount />} />
        <Route path="/notification/" element={<PNotification />} />
        <Route path="/setting/" element={<PSetting />} />
        <Route path="/message/" element={<PMessage />} />
      </Routes>
    </div>
  );
};

export default Content;
