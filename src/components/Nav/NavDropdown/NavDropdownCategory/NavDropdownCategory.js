import React from 'react';
import { Category } from './NavDropdownCategoryStyle.js';
import { useSetRecoilState, useRecoilState, useResetRecoilState } from 'recoil';
import {
  mainProductsData,
  categoryState,
  searchValue,
} from '../../../../atom.js';

function NavDropdownCategory({
  name,
  id,
  currentIndex,
  nextIndex,
  setIsDropdownHover,
}) {
  const setMainProductsDataState = useSetRecoilState(mainProductsData);
  const [categoryStates, setCategoryStates] = useRecoilState(categoryState);
  const setSearchValues = useResetRecoilState(searchValue);

  const navDropdownCategoryMouseEnter = () => {
    nextIndex !== ''
      ? setCategoryStates({
          ...categoryStates,
          [currentIndex]: id,
          [nextIndex]: -1,
        })
      : setCategoryStates({
          ...categoryStates,
          [currentIndex]: id,
        });
  };

  return (
    <Category
      onMouseEnter={navDropdownCategoryMouseEnter}
      onClick={() => {
        setMainProductsDataState(categoryStates);
        setIsDropdownHover(false);
        setSearchValues();
        window.scroll(0, 0);
      }}
      style={{
        backgroundColor: `${
          categoryStates[currentIndex] === id ? '#ff5058' : '#ffffff'
        }`,
        color: `${categoryStates[currentIndex] === id ? 'white' : '#888888'}`,
      }}
    >
      {name}
    </Category>
  );
}
export default NavDropdownCategory;
