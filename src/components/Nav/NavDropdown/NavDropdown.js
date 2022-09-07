import React from 'react';
import * as S from './NavDropdownStyle.js';
import NavDropdownCategory from './NavDropdownCategory/NavDropdownCategory.js';
import { CategoryData } from './NavDropdownData.js';
import { useRecoilValue } from 'recoil';
import { categoryState } from '../../../atom.js';
function NavDropdown({ setIsDropdownHover }) {
  const categoryStates = useRecoilValue(categoryState);

  return (
    <S.NavDropdown onMouseLeave={() => setIsDropdownHover(false)}>
      <S.NavDropdownFirst>
        <div>
          <S.NavDropdownHeader>전체 카테고리</S.NavDropdownHeader>
          {CategoryData.map((data, index) => (
            <NavDropdownCategory
              key={index}
              id={index}
              name={data.name}
              currentIndex="first"
              nextIndex="second"
              setIsDropdownHover={setIsDropdownHover}
            />
          ))}
        </div>
      </S.NavDropdownFirst>
      {categoryStates.first > -1 && (
        <S.NavDropdownSecond>
          <div>
            <S.NavDropdownHeader>
              {CategoryData[categoryStates.first].name}
            </S.NavDropdownHeader>
            {CategoryData[categoryStates.first].category.map((data, index) => (
              <NavDropdownCategory
                key={index}
                name={data.name}
                id={index}
                currentIndex="second"
                nextIndex="third"
                setIsDropdownHover={setIsDropdownHover}
              />
            ))}
          </div>
        </S.NavDropdownSecond>
      )}
      {categoryStates.second > -1 && (
        <S.NavDropdownThird>
          <div>
            <S.NavDropdownHeader>
              {
                CategoryData[categoryStates.first].category[
                  categoryStates.second
                ].name
              }
            </S.NavDropdownHeader>
            {CategoryData[categoryStates.first].category[
              categoryStates.second
            ].category.map((data, index) => (
              <NavDropdownCategory
                key={index}
                id={index}
                name={data.name}
                currentIndex="third"
                nextIndex=""
                setIsDropdownHover={setIsDropdownHover}
              />
            ))}
          </div>
        </S.NavDropdownThird>
      )}
    </S.NavDropdown>
  );
}
export default NavDropdown;
