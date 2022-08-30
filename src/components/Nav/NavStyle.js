import styled from 'styled-components';

export const Nav = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  position: fixed;
  padding-top: 35px;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  background-color: white;
`;

export const NavTopContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
  width: 1024px;
  height: 40px;
`;

export const NavLogo = styled.div`
  ${props => props.theme.variables.flex()}
  width: 136px;
  height: 100%;
`;

export const NavLogoImage = styled.img`
  width: 200%;
  height: 200%;
`;

export const NavSearchContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', '')}
  position: relative;
  margin-left: 40px;
`;

export const NavSearch = styled.input`
  padding: 10px;
  width: 460px;
  height: 100%;
  background-color: white;
  border: 2px solid red;
  font-size: 16px;
  outline: none;
`;

export const NavSearchDelete = styled.button`
  position: absolute;
  top: 10px;
  right: 45px;
  background-color: white;
  border: none;
  color: #aaaaaa;
  font-size: 15px;
`;

export const NavSearchIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 2px;
  width: 35px;
  height: 35px;
  background-color: white;
  border: none;
  color: red;
`;

export const NavMenu = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
  width: 350px;
`;

export const Menu = styled.div`
  ${props => props.theme.variables.flex()}
  margin-left: 30px;
`;

export const MenuIcon = styled.div`
  margin: 5px 10px 0 0;
  width: 25px;
  height: 25px;
`;

export const MenuText = styled.span`
  padding-left: 5px;
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

export const NavBottoContainer = styled.div`
  ${props => props.theme.variables.flex()}
  margin-right: 70%;
  width: 30px;
  height: 70px;
`;

export const NavDropDown = styled.div`
  width: 100%;
`;

export const NavHamberger = styled.div`
  ${props => props.theme.variables.flex('column', 'space-around', '')}
  position: relative;
  width: 24px;
  height: 24px;
`;

export const NavHambergerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: gray;
`;
