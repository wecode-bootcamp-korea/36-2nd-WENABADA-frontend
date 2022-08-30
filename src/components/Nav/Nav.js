import React, { useState } from 'react';
import NavAside from './NavAside/NavAside.js';
import NavDropdown from './NavDropdown/NavDropdown.js';
import Footer from '../Footer/Footer.js';
import { MenuData } from './NavData.js';
import * as S from './NavStyle.js';

function Nav() {
  const [isDropdownHover, setIsDropdownHover] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const haddleInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <S.Nav onMouseLeave={() => setIsDropdownHover(false)}>
        <S.NavTopContainer>
          <S.NavLogo>
            <S.NavLogoImage src="images/logo.png" alt="LogoImage" />
          </S.NavLogo>
          <S.NavSearchContainer>
            <S.NavSearch
              placeholder="상품, 지역명 검색"
              onChange={haddleInput}
              value={searchValue}
            />
            {searchValue !== '' && (
              <S.NavSearchDelete onClick={() => setSearchValue('')}>
                <i className="fa-solid fa-x" />
              </S.NavSearchDelete>
            )}
            <S.NavSearchIcon>
              <i className="fa-solid fa-magnifying-glass fa-lg" />
            </S.NavSearchIcon>
          </S.NavSearchContainer>
          <S.NavMenu>
            {MenuData.map(({ className, text }, index) => {
              return (
                <S.Menu key={index}>
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
      </S.Nav>
      <NavAside />

      <Footer />
    </>
  );
}

export default Nav;
