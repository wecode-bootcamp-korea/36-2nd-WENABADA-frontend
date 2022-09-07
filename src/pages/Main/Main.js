import React from 'react';
import ListProducts from './ListProducts/ListProducts';
import MainProducts from './MainProducts/MainProducts';
import { useRecoilValue } from 'recoil';
import { mainProductsData, searchValue } from '../../atom';

function Main() {
  const mainProductsDataState = useRecoilValue(mainProductsData);
  const searchValues = useRecoilValue(searchValue);

  return mainProductsDataState?.first === -1 && searchValues === '' ? (
    <MainProducts />
  ) : (
    <ListProducts />
  );
}
export default Main;
