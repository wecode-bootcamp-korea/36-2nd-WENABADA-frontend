import React, { useState, useEffect } from 'react';
import * as S from './Styled.RelationCarousel';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config';

const RelationCarousel = ({ productId }) => {
  const [products, setProducts] = useState([]);
  const [carouselNum, setCarouselNum] = useState(1);
  const navigate = useNavigate();

  // 연관 상품 받아오기
  useEffect(() => {
    fetch(`${API.RELATION}${productId}&Limit=10&offset=0`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [productId]);

  const currentImages = products.slice(
    (carouselNum - 1) * 6,
    (carouselNum - 1) * 6 + 6
  );

  const carouselTotalNum = parseInt(products.length / 6) + 1;
  const isFirstCarousel = carouselNum === 1;
  const isLsatCarousel = carouselNum === carouselTotalNum;

  const leftMove = () => {
    if (!isFirstCarousel) setCarouselNum(carouselNum => carouselNum - 1);
  };

  const rightMove = () => {
    if (!isLsatCarousel) setCarouselNum(carouselNum => carouselNum + 1);
  };

  const goToDetail = id => {
    navigate(`/product/${id}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <S.RelationTitle>
        <div>연관상품</div>
        <div>
          {carouselNum}/{carouselTotalNum}
        </div>
      </S.RelationTitle>
      <S.Container isLsatCarousel={isLsatCarousel}>
        <S.LeftArrow
          onClick={() => leftMove()}
          isAct={!isFirstCarousel}
          src="/images/leftArrowBox.png"
        />
        {currentImages.map(product => {
          return (
            <S.ProductBox
              key={product.id}
              onClick={() => goToDetail(product.id)}
            >
              <S.Img src={product.image_url} />
              <S.Name>{product.name}</S.Name>
            </S.ProductBox>
          );
        })}
        <S.RightArrow
          onClick={() => rightMove()}
          isAct={!isLsatCarousel}
          src="/images/rightArrowBox.png"
        />
      </S.Container>
    </>
  );
};

export default RelationCarousel;
