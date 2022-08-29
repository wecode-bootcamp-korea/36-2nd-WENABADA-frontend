import React, { useState } from 'react';
import ListProducts from './ListProducts/ListProducts';
import MainProducts from './MainProducts/MainProducts';
import { useLocation } from 'react-router-dom';

function Main() {
  const location = useLocation();
  const props = location.state;
  const [isList] = useState(props?.itemRoot);

  return isList ? <ListProducts /> : <MainProducts />;
}
export default Main;
