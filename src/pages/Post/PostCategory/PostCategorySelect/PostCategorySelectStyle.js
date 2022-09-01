import styled from 'styled-components';

export const PostCategorySelect = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  width: 270px;
  border: 1px solid #d0d0d0;
`;

export const PostCategoryName = styled.div`
  color: ${props => (props.isSelected ? 'red' : 'black')};
  padding: 12px;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #f3f3f3;
  }
`;
