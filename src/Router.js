import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
