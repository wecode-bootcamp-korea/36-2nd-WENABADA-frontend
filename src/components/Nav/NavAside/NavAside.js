import React, { useState } from 'react';
import * as S from './NavAsideStyle.js';

function NavAside() {
  const [viewLastest, setViewLastest] = useState(false);
  return (
    <S.NavAside>
      <S.NavAsideTop>
        <S.NavAsideTopLike>찜한상품</S.NavAsideTopLike>
        <S.NavAsideTopLikeCount>♥ 0</S.NavAsideTopLikeCount>
      </S.NavAsideTop>
      <S.NavAsideLastest>
        <S.NavAsideLastestText>최근 본 상품</S.NavAsideLastestText>
        <S.NavAsideLastestImageWrap
          onMouseEnter={() => setViewLastest(true)}
          onMouseLeave={() => setViewLastest(false)}
          viewLastest={viewLastest}
        >
          <S.NavAsideLastestImage
            src="https://media.bunjang.co.kr/product/194526273_1_1658769385_w140.jpg"
            alt="AsideLastestImage"
          />
          {viewLastest && (
            <>
              <S.LastestName>볼란테 일괄판매 3사이즈</S.LastestName>
              <S.LastestPrice>₩ 780,000</S.LastestPrice>
            </>
          )}
        </S.NavAsideLastestImageWrap>
      </S.NavAsideLastest>
      <S.NavAsideScrollTop onClick={() => window.scrollTo(0, 0)}>
        TOP
      </S.NavAsideScrollTop>
    </S.NavAside>
  );
}
export default NavAside;
