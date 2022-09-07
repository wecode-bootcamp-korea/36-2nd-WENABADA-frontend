import React from 'react';
import * as S from './Styled.Category';
import { CATEGORY_LIST } from '../CATEGORY_LIST';
import { mainProductsData, searchValue } from '../../../../atom';
import { useRecoilState, useResetRecoilState } from 'recoil';

const Category = () => {
  const [mainProductsDataState, setMainProductsDataState] =
    useRecoilState(mainProductsData);
  const setSearchValues = useResetRecoilState(searchValue);
  const { first, second, third } = mainProductsDataState;
  let categories = [];

  if (second === -1) {
    categories = CATEGORY_LIST[first].subcategory;
  } else if (third === -1) {
    categories = CATEGORY_LIST[first].subcategory[second].subcategory;
  } else {
    return;
  }

  const emptyNum = 5 - (categories.length % 5) - 1;

  const resetRoot = idx => {
    setSearchValues();
    if (second === -1) {
      setMainProductsDataState({ ...mainProductsDataState, second: idx });
    } else if (third === -1) {
      setMainProductsDataState({ ...mainProductsDataState, third: idx });
    }
  };

  return (
    <S.CategoryList>
      <S.Category>
        전체보기 <S.RightArrow src="images/rightArrow.png" alt="" />
      </S.Category>

      {categories.map((category, idx) => {
        return (
          <S.Category key={category.id} onClick={() => resetRoot(idx)}>
            {category.name}
          </S.Category>
        );
      })}
      {[...Array(emptyNum)].map((_, i) => (
        <S.Category isEmpty key={i} />
      ))}
    </S.CategoryList>
  );
};

export default Category;
