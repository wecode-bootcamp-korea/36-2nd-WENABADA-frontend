import styled from 'styled-components';

export const NavAside = styled.div`
  ${props => props.theme.variables.flex('column', 'space-around', 'center')}
  position: fixed;
  top: 100px;
  right: 100px;
  width: 100px;
  z-index: 101;
`;

export const NavAsideTop = styled.div`
  ${props => props.theme.variables.flex('column', 'space-around', 'center')}
  margin-top: 10px;
  width: 90px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const NavAsideTopLike = styled.p`
  margin: 0;
  padding: 6px 0;
  color: black;
  font-size: 13px;
  font-weight: bold;
`;

export const NavAsideTopLikeCount = styled.p`
  margin: 0;
  padding-bottom: 4px;
  color: #bbbbbb;
  font-size: 12px;
  font-weight: bolder;
`;

export const NavAsideLastest = styled.div`
  ${props => props.theme.variables.flex('column', 'space-around', 'center')}
  margin-top: 10px;
  width: 90px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const NavAsideLastestText = styled.p`
  margin: 0;
  padding: 6px 0 5px 0;
  border-bottom: 1px solid #bbbbbb;
  color: black;
  font-size: 13px;
  font-weight: bold;
`;

export const NavAsideLastestImageWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  position: relative;
  height: 70px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  width: ${props => (props.viewLastest ? '300px' : '70px')};
  margin: ${props => (props.viewLastest ? '8px 230px 8px 0' : '8px 0px 8px 0')};
`;

export const NavAsideLastestImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 66px;
  height: 66px;
`;

export const LastestName = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 14px;
`;

export const LastestPrice = styled.p`
  margin: 0;
  padding: 0 5px 10px 10px;
  font-size: 13px;
  font-weight: bold;
`;

export const NavAsideScrollTop = styled.div`
  ${props => props.theme.variables.flex('', 'space-around', 'center')}
  margin-top: 10px;
  padding: 10px 0;
  width: 90px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: #666666;
  font-weight: bold;
`;
