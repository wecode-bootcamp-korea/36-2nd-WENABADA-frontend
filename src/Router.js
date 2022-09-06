import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/Post/Post';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import LoginLoading from './components/Login/LoginLoading';
import Shop from './pages/Shop/Shop';
import Detail from './pages/Detail/Detail';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/" element={<Main />} />
        <Route path="/products/info" element={<Detail />} />
        <Route path="/auth/kakao/callback" element={<LoginLoading />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
