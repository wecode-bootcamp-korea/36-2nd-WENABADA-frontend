import styled from 'styled-components';

export const Container = styled.div`
  width: 1010px;
  height: 300px;
  position: relative;
  margin-right: 15px;
`;

export const CarouselBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const Carousel = styled.img`
  flex: none;
  width: 1010px;
  height: relative;
  transition: ${({ isTransition }) =>
    isTransition ? 'transform 1s ease-in' : 'none'};
  transform: ${({ currentIdx }) => 'translateX(-' + currentIdx * 1010 + 'px)'};
`;

export const LeftArrow = styled.img`
  position: absolute;
  left: 1px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
`;
export const RightArrow = styled.img`
  position: absolute;
  right: 1px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
`;
