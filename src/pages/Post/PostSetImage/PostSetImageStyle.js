import styled from 'styled-components';

export const PostSetImage = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
  padding: 30px 0;
  width: 100%;
  border-bottom: 1px solid #d0d0d0;
`;

export const PostSetImageText = styled.div`
  width: 168px;
  color: #ff5058;
  font-size: 20px;
`;

export const PostSetImageTextSpan = styled.span`
  color: black;
  font-size: 20px;
`;

export const PostSetImageInputWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
`;

export const PostSetImageInputButton = styled.button`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  margin-bottom: 25px;
  width: 200px;
  height: 200px;
  background-color: #fafafd;
  border: 1px solid #e0e0e0;
  color: #c0c0c0;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  cursor: pointer;

  i {
    margin-bottom: 30px;
  }
`;

export const PostPreviewImage = styled.img`
  width: 200px;
  height: 200px;
  z-index: 15;
`;

export const PostSetImageInput = styled.input`
  display: none;
`;

export const PostSetImageInputDescription = styled.div`
  color: #4aa4ff;
  font-size: 14px;
  line-height: 21px;
`;

export const PostSetImageInputDescriptionP = styled.p`
  font-weight: 700;
`;
