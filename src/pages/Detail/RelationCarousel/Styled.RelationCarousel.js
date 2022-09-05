import styled, { css } from 'styled-components';

export const RelationTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  justify-content: space-between;

  ::after {
    ${({ isLsatCarousel }) =>
      isLsatCarousel &&
      css`
        content: '';
        width: 159px;
      `}
  }
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 159px;
`;

export const Img = styled.img`
  width: 159px;
  height: 155px;
  cursor: pointer;
`;

export const Name = styled.div`
  font-size: 13px;
  margin-top: 10px;
  width: 100%;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

export const LeftArrow = styled.img`
  position: absolute;
  top: 30%;
  left: 0px;
  opacity: 0.45;
  width: 50px;
  height: 50px;

  cursor: ${({ isAct }) => (isAct ? 'pointer' : 'no-drop')};
`;

export const RightArrow = styled.img`
  position: absolute;
  top: 30%;
  right: 0px;
  opacity: 0.45;
  width: 50px;
  height: 50px;

  cursor: ${({ isAct }) => (isAct ? 'pointer' : 'no-drop')};
`;
