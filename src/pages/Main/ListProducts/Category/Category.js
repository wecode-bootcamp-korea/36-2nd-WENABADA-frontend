import React from 'react';
import * as S from './Styled.Category';
import { CATEGORY_LIST } from '../CATEGORY_LIST';
import { useNavigate } from 'react-router-dom';
const Category = ({ itemRoot, setItemRoot }) => {
  const { first, second, third } = itemRoot;
  const navigate = useNavigate();
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
    if (second === -1) {
      setItemRoot({ ...itemRoot, second: idx });
    } else if (third === -1) {
      setItemRoot({ ...itemRoot, third: idx });
    }
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <S.CategoryList>
      <S.Category onClick={() => goToMain()}>
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
