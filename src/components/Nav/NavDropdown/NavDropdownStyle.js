import styled from 'styled-components';

export const NavDropdown = styled.div`
  ${props => props.theme.variables.flex()};
  position: absolute;
  top: 146px;
`;

export const NavDropdownFirst = styled.div`
  width: 240px;
  height: 500px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
`;

export const NavDropdownSecond = styled(NavDropdownFirst)``;

export const NavDropdownThird = styled(NavDropdownFirst)``;

export const NavDropdownHeader = styled.p`
  padding: 20px;
  border-bottom: 1px solid #cccccc;
  color: black;
  font-size: 15px;
  font-weight: 500;
`;
