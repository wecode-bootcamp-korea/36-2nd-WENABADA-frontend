import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #aaaaaa;
`;

export const FooterTop = styled.div`
  ${props => props.theme.variables.flex()}
  width: 100%;
  border-bottom: 1px solid #aaaaaa;
`;

export const FooterTopWrap = styled.ul`
  ${props => props.theme.variables.flex('', 'flex-start', '')}
  margin: 0;
  padding: 12px 0;
  height: 100%;
  width: 70%;
`;

export const FooterTopList = styled.li`
  text-align: center;
  padding: 12px 0px;
  height: 100%;
  font-size: 13px;
  list-style: none;

  &:nth-child(1) {
    span {
      padding: 0 20px 0 0;
    }
  }

  &:nth-child(4) {
    span {
      font-weight: bolder;
    }
  }

  &:nth-child(5) {
    span {
      border: none;
    }
  }
`;

export const FooterTopListText = styled.span`
  padding: 0 20px;
  border-right: 1px solid #bbbbbb;
`;

export const FooterMiddle = styled.div`
  ${props => props.theme.variables.flex()}
  padding-bottom: 30px;
  width: 100%;
`;

export const FooterMiddleWrap = styled.div`
  ${props => props.theme.variables.flex('', '', 'flex-start')}
  width: 70%;
  border-bottom: 1px solid #aaaaaa;
`;

export const FooterMiddleLeft = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  flex-direction: column;
  width: 50%;
`;

export const FooterMiddleLeftTop = styled.div`
  margin-top: 40px;
`;

export const FooterMiddleLeftTopHeader = styled.div`
  margin-bottom: 10px;
  color: #7f7f7f;
  font-size: 14px;
  font-weight: bold;
`;

export const FooterMiddleLeftTopBody = styled.div`
  color: #7f7f7f;
  font-size: 12px;
  line-height: 18px;
`;

export const FooterMiddleLeftBottom = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', '')}
  margin-top: 30px;
`;

export const FooterMiddleLeftBottomWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  margin: 10px 0;
`;

export const FooterMiddleLeftBottomHeader = styled.div`
  color: #7f7f7f;
  margin: 5px 0;
  font-size: 12px;
`;

export const FooterMiddleLeftBottomHeaderSpan = styled.span`
  color: #7f7f7f;
  font-weight: 700;
  font-size: 12px;
`;

export const FooterMiddleLeftBottomBody = styled.div`
  margin: 5px 0;
  color: #7f7f7f;
  font-size: 12px;
`;

export const FooterMiddleRight = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  width: 50%;
`;

export const FooterMiddleRightTop = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  margin-top: 40px;
`;

const FooterMiddleRightTopStyle = styled.div`
  margin-bottom: 10px;
  color: #7f7f7f;
  font-size: 14px;
  font-weight: 700;
`;

export const FooterMiddleRightTopFirst = styled(FooterMiddleRightTopStyle)``;

export const FooterMiddleRightTopSecond = styled(FooterMiddleRightTopStyle)`
  color: #666666;
  font-size: 25px;
  font-weight: bolder;
`;

export const FooterMiddleRightTopThird = styled(FooterMiddleRightTopStyle)`
  font-size: 12px;
  font-weight: 500;
`;

export const FooterMiddleRightTopFourth = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
`;

export const FooterMiddleRightTopFourthLI = styled.li`
  margin: 0 8px 10px 0;
  color: #7f7f7f;
  font-size: 12px;
  text-decoration: underline;
  list-style: none;
`;

export const FooterMiddleRightBottom = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  margin: 20px 0;
`;

export const FooterMiddleRightBottomHearder = styled.div`
  margin: 10px 0;
  color: #7f7f7f;
  font-size: 14px;
  font-weight: 600;
`;

export const FooterMiddleRightBottomBody = styled.div`
  margin: 10px 0;
  color: #7f7f7f;
  font-size: 12px;
  line-height: 20px;
`;

export const FooterMiddleRightBottomFooter = styled.div`
  margin: 10px 0;
  color: #7f7f7f;
  font-size: 12px;
`;

export const FooterBottom = styled.div`
  ${props => props.theme.variables.flex()}
  width: 100%;
  height: 120px;
`;

export const FooterBottomWrap = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
  width: 70%;
  height: 100%;
`;

export const FooterBottomLeft = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'flex-start')}
  width: 48%;
  height: 100%;
`;

export const FooterBottomLeftImage = styled.img`
  margin-right: 10px;
  width: 31px;
  height: 28px;
`;

export const FooterBottomLeftText = styled.div`
  color: #999999;
  font-size: 11px;
`;

export const FooterBottomRight = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'flex-start')}
  width: 52%;
  height: 100%;
  color: #999999;
  font-size: 11px;
`;
