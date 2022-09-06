import React, { useState } from 'react';
import NavAside from './NavAside/NavAside.js';
import NavDropdown from './NavDropdown/NavDropdown.js';
import Login from '../Login/Login.js';
import { MenuData } from './NavData.js';
import * as S from './NavStyle.js';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const [isDropdownHover, setIsDropdownHover] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openModal = className => {
    const istoken = localStorage.getItem('token');
    if (istoken) {
      if (className === 'fa-solid fa-sack-dollar fa-2xl') {
        navigate('/sell');
      } else {
        navigate('/shop');
      }
    } else {
      setLoginModalOpen(true);
    }
  };

  const haddleInput = event => {
    setSearchValue(event.target.value);
  };

  const searchSubmit = event => {
    if (event.keyCode === 13) {
      navigate(`/`, { state: searchValue });
    }
  };

  return (
    <>
      <S.Nav onMouseLeave={() => setIsDropdownHover(false)}>
        <S.NavAllWrap>
          <S.NavTopContainer>
            <S.NavLogo>
              <S.NavLogoImage src="images/logo.png" alt="LogoImage" />
            </S.NavLogo>
            <S.NavSearchContainer>
              <S.NavSearch
                placeholder="상품, 지역명 검색"
                onChange={haddleInput}
                value={searchValue}
                onKeyDown={searchSubmit}
              />
              {searchValue !== '' && (
                <S.NavSearchDelete onClick={() => setSearchValue('')}>
                  <i className="fa-solid fa-x" />
                </S.NavSearchDelete>
              )}
              <S.NavSearchIcon
                onClick={() => navigate(`/`, { state: searchValue })}
              >
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
