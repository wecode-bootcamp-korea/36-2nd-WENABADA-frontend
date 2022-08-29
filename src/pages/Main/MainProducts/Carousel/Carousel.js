import React, { useEffect, useState } from 'react';
import * as S from './Styled.Carousel';

function Carousel() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [isforwardDirection, setIsforwardDirection] = useState(true);
  const [isBtnActive, setIsBtnActive] = useState(true);

  const combinedImgs = [
    { ...IMG_LIST.at(-1), id: 0 },
    ...IMG_LIST,
    { ...IMG_LIST[0], id: IMG_LIST.length + 1 },
  ];

  const isTransition =
    (currentIdx === 1 && isforwardDirection) ||
    (currentIdx === combinedImgs.length - 2 && !isforwardDirection);

  const prevImg = () => {
    if (isBtnActive) {
      setIsforwardDirection(false);
      setCurrentIdx(currentIdx => currentIdx - 1);
    }
  };

  const nextImg = () => {
    if (isBtnActive) {
      setIsforwardDirection(true);
      setCurrentIdx(currentIdx => currentIdx + 1);
    }
  };

  useEffect(() => {
    setIsBtnActive(false);
    setTimeout(() => {
      if (currentIdx === combinedImgs.length - 1) {
        setCurrentIdx(1);
      } else if (currentIdx === 0) {
        setCurrentIdx(combinedImgs.length - 2);
      }
      setIsBtnActive(true);
    }, 1000);
  }, [combinedImgs.length, currentIdx]);

  useEffect(() => {
    const autoNextImg = setTimeout(() => {
      setIsforwardDirection(true);
      setCurrentIdx(currentIdx => currentIdx + 1);
    }, 3000);
    return () => clearTimeout(autoNextImg);
  }, [currentIdx]);

  return (
    <S.Container>
      <S.CarouselBox>
        {combinedImgs.map(img => {
          return (
            <S.Carousel
              isTransition={isTransition ? false : true}
              currentIdx={currentIdx}
              key={img.id}
              src={img.src}
              alt="carousel"
            />
          );
        })}
      </S.CarouselBox>
      <S.LeftArrow
        onClick={prevImg}
        src="images/leftArrow.png"
        alt="leftArrow"
      />
      <S.RightArrow
        onClick={nextImg}
        src="images/rightArrow.png"
        alt="rightArrow"
      />
    </S.Container>
  );
}
export default Carousel;

const IMG_LIST = [
  { id: 1, src: 'images/carousel1.png' },
  { id: 2, src: 'images/carousel2.png' },
  { id: 3, src: 'images/carousel3.png' },
];
