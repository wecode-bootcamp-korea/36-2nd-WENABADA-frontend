import React, { useState } from 'react';
import NavAside from './NavAside/NavAside.js';
import NavDropdown from './NavDropdown/NavDropdown.js';
import Login from '../Login/Login.js';
import { MenuData } from './NavData.js';
import * as S from './NavStyle.js';
import { useNavigate } from 'react-router-dom';
import { mainProductsData, searchValue } from '../../atom.js';
import { useResetRecoilState, useRecoilState } from 'recoil';

function Nav() {
  const navigate = useNavigate();
  const resetMainProductsDataState = useResetRecoilState(mainProductsData);
  const [searchValues, setSearchValues] = useRecoilState(searchValue);
  const [localSearch, setLocalSearch] = useState('');
  const [isDropdownHover, setIsDropdownHover] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openModal = className => {
    const istoken = localStorage.getItem('token');
    if (istoken) {
      if (className === 'fa-solid fa-sack-dollar fa-lg') {
        navigate('/post');
        window.scroll(0, 0);
      } else {
        navigate('/shop');
        window.scroll(0, 0);
      }
    } else {
      setLoginModalOpen(true);
    }
  };

  const haddleInput = event => {
    setLocalSearch(event.target.value);
  };

  const searchSubmit = event => {
    if (event.keyCode === 13) {
      setSearchValues(localSearch);
      setTimeout(() => {
        navigate(`/`);
      }, 0);
    }
  };

  const goToMain = () => {
    resetMainProductsDataState();
    setSearchValues('');
    setLocalSearch('');
    navigate('/');
    window.scroll(0, 0);
  };

  return (
    <>
      <S.Nav onMouseLeave={() => setIsDropdownHover(false)}>
        <S.NavAllWrap>
          <S.NavTopContainer>
            <S.NavLogo onClick={goToMain}>
              <S.NavLogoImage src="/images/logo.png" alt="LogoImage" />
            </S.NavLogo>
            <S.NavSearchContainer>
              <S.NavSearch
                placeholder="상품, 지역명 검색"
                onChange={haddleInput}
                value={localSearch}
                onKeyDown={searchSubmit}
              />
              {localSearch !== '' && (
                <S.NavSearchDelete
                  onClick={() => {
                    setSearchValues('');
                    setLocalSearch('');
                  }}
                >
                  <i className="fa-solid fa-x" />
                </S.NavSearchDelete>
              )}
              <S.NavSearchIcon onClick={() => navigate(`/${searchValues}`)}>
                <i className="fa-solid fa-magnifying-glass fa-lg" />
              </S.NavSearchIcon>
            </S.NavSearchContainer>
            <S.NavMenu>
              {MenuData.map(({ className, text }, index) => {
                return (
                  <S.Menu key={index} onClick={() => openModal(className)}>
                    <S.MenuIcon>
                      <i className={className} />
                    </S.MenuIcon>
                    <S.MenuText>{text}</S.MenuText>
                  </S.Menu>
                );
              })}
            </S.NavMenu>
          </S.NavTopContainer>
          <S.NavBottoContainer onMouseEnter={() => setIsDropdownHover(true)}>
            <S.NavDropDown>
              <S.NavHamberger>
                <S.NavHambergerLine />
                <S.NavHambergerLine />
                <S.NavHambergerLine />
              </S.NavHamberger>
              {isDropdownHover && (
                <NavDropdown setIsDropdownHover={setIsDropdownHover} />
              )}
            </S.NavDropDown>
          </S.NavBottoContainer>
        </S.NavAllWrap>
      </S.Nav>
      {loginModalOpen && <Login setLoginModalOpen={setLoginModalOpen} />}
      <NavAside />
    </>
  );
}

export default Nav;
