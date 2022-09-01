import styled from 'styled-components';

const InputStyle = styled.textarea`
  border: ${props =>
    props.size < props.min || props.size > props.max
      ? '1px solid #c0c0c0'
      : '1px solid #ff8800'};
  outline: none;
  resize: none;

  &::placeholder {
    color: #c0c0c0;
  }
`;

export const Post = styled.form`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 100%;
`;

export const PostWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 70%;
`;

export const PostHearder = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-end')}
  padding: 37px 0;
  width: 100%;
  height: 260px;
  border-bottom: 2px solid black;
  color: #ff5058;
  font-size: 16px;
  font-weight: 400;
`;

export const PostHearderSpan = styled.span`
  padding-right: 40px;
  color: black;
  font-size: 26px;
  font-weight: 400;
`;

export const PostSetTitle = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  padding: 37px 0;
  width: 100%;
  border-bottom: 1px solid #d0d0d0;
`;

export const PostSetTitleText = styled.div`
  width: 168px;
  color: #ff5058;
  font-size: 20px;
`;

export const PostSetTitleTextSpan = styled.span`
  color: black;
  font-size: 20px;
`;

export const PostSetTitleInputWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
`;

export const PostSetTitleInput = styled(InputStyle)`
  padding: 12px;
  width: 800px;
  font-size: 20px;
`;

export const PostSetPrice = styled(PostSetTitle)`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
`;

export const PostSetPriceText = styled(PostSetTitleText)``;

export const PostSetPriceTextSpan = styled.span`
  color: black;
`;

export const PostSetPriceWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
`;

export const PostSetPriceInputWrap = styled.div`
  ${props => props.theme.variables.flex()}
`;

export const PostSetPriceInputWrapSpan = styled.span`
  padding-left: 20px;
  font-size: 16px;
`;

export const PostSetPriceInput = styled(InputStyle)`
  padding: 14px;
  width: 240px;
  font-size: 16px;
`;

export const PostSetDescription = styled(PostSetTitle)`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
  position: relative;
  height: 400px;
`;

export const PostSubmit = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  position: absolute;
  top: 312px;
  left: -21.3%;
  width: 98.9vw;
  height: 88px;
  background-color: #fafafd;
  border-top: 1px solid #d0d0d0;
`;

export const PostSubmitWrap = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-end', 'center')}
  width: 70%;
`;

export const PostSubmitbutton = styled.button`
  width: 160px;
  height: 56px;
  background-color: rgb(255, 80, 88);
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const PostSetDescriptionText = styled(PostSetTitleText)``;

export const PostSetDescriptionInputWrap = styled.div`
  position: relative;
`;

export const PostSetDescriptionInput = styled(InputStyle)`
  padding: 16px;
  width: 820px;
  font-size: 16px;
`;

export const PostSetDescriptionInputText = styled.div`
  position: absolute;
  top: 45px;
  left: 16px;
  color: #c0c0c0;
  font-size: 10px;
`;

export const PostSetDescriptionTextSpan = styled.span`
  color: black;
`;

export const PostAlert = styled.p`
  display: ${props =>
    props.size < props.min || props.size > props.max ? 'none' : 'block'};
  padding: 10px 0;
  color: #ff8800;
`;
