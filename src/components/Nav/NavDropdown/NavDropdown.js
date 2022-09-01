import React, { useState } from 'react';
import * as S from './NavDropdownStyle.js';
import NavDropdownCategory from './NavDropdownCategory/NavDropdownCategory.js';
import { CategoryData } from './NavDropdownData.js';
function NavDropdown({ setIsDropdownHover }) {
  const [selectDropdown, setSelectDropdown] = useState({
    first: -1,
    second: -1,
    third: -1,
  });

  return (
    <S.NavDropdown onMouseLeave={() => setIsDropdownHover(false)}>
      <S.NavDropdownFirst>
        <div>
          <S.NavDropdownHeader>전체 카테고리</S.NavDropdownHeader>
          {CategoryData.map((data, index) => (
            <NavDropdownCategory
              key={index}
              setSelectDropdown={setSelectDropdown}
              id={index}
              name={data.name}
              selectDropdown={selectDropdown}
              currentIndex="first"
              nextIndex="second"
            />
          ))}
        </div>
      </S.NavDropdownFirst>
      {selectDropdown.first > -1 && (
        <S.NavDropdownSecond>
          <div>
            <S.NavDropdownHeader>
              {CategoryData[selectDropdown.first].name}
            </S.NavDropdownHeader>
            {CategoryData[selectDropdown.first].category.map((data, index) => (
              <NavDropdownCategory
                key={index}
                name={data.name}
                id={index}
                setSelectDropdown={setSelectDropdown}
                selectDropdown={selectDropdown}
                currentIndex="second"
                nextIndex="third"
              />
            ))}
          </div>
        </S.NavDropdownSecond>
      )}
      {selectDropdown.second > -1 && (
        <S.NavDropdownThird>
          <div>
            <S.NavDropdownHeader>
              {
                CategoryData[selectDropdown.first].category[
                  selectDropdown.second
                ].name
              }
            </S.NavDropdownHeader>
            {CategoryData[selectDropdown.first].category[
              selectDropdown.second
            ].category.map((data, index) => (
              <NavDropdownCategory
                key={index}
                id={index}
                name={data.name}
                selectDropdown={selectDropdown}
                setSelectDropdown={setSelectDropdown}
                currentIndex="third"
                nextIndex=""
              />
            ))}
          </div>
        </S.NavDropdownThird>
      )}
    </S.NavDropdown>
  );
}
export default NavDropdown;
