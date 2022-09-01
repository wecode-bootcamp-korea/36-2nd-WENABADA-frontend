import styled from 'styled-components';

export const PostCategory = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
  padding: 37px 0;
  width: 100%;
  border-bottom: 1px solid #d0d0d0;
`;

export const PostSetCategoryText = styled.div`
  width: 168px;
  color: #ff5058;
  font-size: 20px;
`;

export const PostSetCategoryTextSapn = styled.span`
  color: black;
  font-size: 20px;
`;

export const PostSetCategoryBodyWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
`;

export const PostSetCategorySelectWrap = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  z-index: 10;
`;

export const PostNotSelected = styled.div`
  ${props => props.theme.variables.flex()}
  width: 270px;
  height: 82px;
  border: 1px solid #d0d0d0;
  color: #d0d0d0;
  font-size: 16px;
`;

export const PostSetCategoryBodyFooterTop = styled.div`
  padding: 12px 0 0 0;
  color: #ff8800;
  font-size: 16px;
`;

export const PostSetCategoryBodyFooterBottom = styled.div`
  padding: 20px 0;
  color: red;
  font-size: 16px;
`;

export const PostSetCategoryBodyFooterBottomSpan = styled.span`
  font-weight: bolder;
`;
