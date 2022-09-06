import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/Post/Post';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import LoginLoading from './components/Login/LoginLoading';
import Footer from './components/Footer/Footer.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao/callback" element={<LoginLoading />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
