import styled from 'styled-components';

export const NavDropdownFirst = styled.div`
  position: absolute;
  top: 146px;
  width: 240px;
  height: 500px;
  border: 1px solid #cccccc;
`;

export const NavDropdownSecond = styled(NavDropdownFirst)`
  left: 440px;
`;

export const NavDropdownThird = styled(NavDropdownFirst)`
  left: 680px;
`;

export const NavDropdownHeader = styled.p`
  padding: 20px;
  border-bottom: 1px solid #cccccc;
  color: black;
  font-size: 15px;
  font-weight: 500;
`;
