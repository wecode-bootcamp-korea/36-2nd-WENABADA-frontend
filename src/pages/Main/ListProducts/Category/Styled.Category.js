import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryList = styled.div`
  width: 1010px;
  display: flex;
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 25%;
  height: 48px;
  padding: 10px;
  background-color: white;
  margin: 1px;
  font-size: 12px;
  font-weight: bold;
  cursor: ${({ isEmpty }) => !isEmpty && 'pointer'};
`;

export const RightArrow = styled.img`
  padding-left: 5px;
  height: 11px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
