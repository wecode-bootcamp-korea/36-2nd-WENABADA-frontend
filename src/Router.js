import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/Post/Post';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
