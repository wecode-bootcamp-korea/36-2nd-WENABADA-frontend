import React from 'react';
import { Category } from './NavDropdownCategoryStyle.js';
import { useNavigate } from 'react-router-dom';

function NavDropdownCategory({
  name,
  setSelectDropdown,
  id,
  selectDropdown,
  currentIndex,
  nextIndex,
}) {
  const navigate = useNavigate();

  const categoryNavigate = () => navigate('/', { state: selectDropdown });
  const navDropdownCategoryMouseEnter = () => {
    nextIndex !== ''
      ? setSelectDropdown({
          ...selectDropdown,
          [currentIndex]: id,
          [nextIndex]: -1,
        })
      : setSelectDropdown({
          ...selectDropdown,
          [currentIndex]: id,
        });
  };

  return (
    <Category
      onClick={categoryNavigate}
      onMouseEnter={navDropdownCategoryMouseEnter}
      style={{
        backgroundColor: `${
          selectDropdown[currentIndex] === id ? '#ff5058' : '#ffffff'
        }`,
        color: `${selectDropdown[currentIndex] === id ? 'white' : '#888888'}`,
      }}
    >
      {name}
    </Category>
  );
}
export default NavDropdownCategory;
