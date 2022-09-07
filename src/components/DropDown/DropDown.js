import React, { useState } from 'react';
import { CATEGORY_LIST } from '../../pages/Main/ListProducts/CATEGORY_LIST';
import * as S from './Styled.DropDown';
import { useRecoilState } from 'recoil';
import { mainProductsData } from '../../atom';
import { useNavigate } from 'react-router-dom';

const DropDown = () => {
  const [mainProductsDataState, setMainProductsData] =
    useRecoilState(mainProductsData);
  const [isDrop, setIsDrop] = useState({});

  const navigate = useNavigate();

  const { first, second, third } = mainProductsDataState;

  let categoryTitle = [CATEGORY_LIST[first]?.name];
  let categories = [CATEGORY_LIST];

  if (second !== -1) {
    categoryTitle.push(CATEGORY_LIST[first]?.subcategory[second]?.name);
    categories.push(CATEGORY_LIST[first]?.subcategory);
  }

  if (third !== -1) {
    categoryTitle.push(
      CATEGORY_LIST[first]?.subcategory[second]?.subcategory[third]?.name
    );
    categories.push(CATEGORY_LIST[first]?.subcategory[second]?.subcategory);
  }

  const resetRoot = (idx, subIdx) => {
    if (idx === 0) {
      setMainProductsData(itemRoot => ({
        ...itemRoot,
        first: subIdx,
        second: -1,
        third: -1,
      }));
    } else if (idx === 1) {
      setMainProductsData(itemRoot => ({
        ...itemRoot,
        second: subIdx,
        third: -1,
      }));
    } else if (idx === 2) {
      setMainProductsData(itemRoot => ({ ...itemRoot, third: subIdx }));
    }
    setIsDrop({});
    window.scroll(0, 0);
    navigate('/');
  };

  return (
    <S.DropDownContainer>
      <S.HomeImg src="/images/home.png" alt="" />
      <S.Text>홈</S.Text>
      {categories.map((main, idx) => {
        return (
          <S.DropDownSet key={idx}>
            <S.RightArrow src="/images/rightArrow.png" alt="" />
            <S.DropDown
              onMouseOver={() =>
                setIsDrop(isDrop => ({ ...isDrop, [idx]: true }))
              }
              onMouseOut={() =>
                setIsDrop(isDrop => ({ ...isDrop, [idx]: false }))
              }
            >
              <S.DropDownTitle>{categoryTitle[idx]}</S.DropDownTitle>
              {isDrop[idx] && (
                <S.DropDownMenuBox>
                  {main.map((sub, subIdx) => {
                    return (
                      <S.DropDownMenu
                        onClick={() => resetRoot(idx, subIdx)}
                        key={sub.id}
                      >
                        {sub.name}
                      </S.DropDownMenu>
                    );
                  })}
                </S.DropDownMenuBox>
              )}
            </S.DropDown>
          </S.DropDownSet>
        );
      })}
    </S.DropDownContainer>
  );
};

export default DropDown;
