import React, { useEffect, useState } from 'react';
import * as S from './NavAsideStyle.js';

function NavAside() {
  const [viewLastest, setViewLastest] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [lastestView, setLastestView] = useState({});

  useEffect(() => {
    fetch('http://10.58.5.139:3000/products/like/number', {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsInNvY2lhbF9pZCI6MjQwODQwMTQyNiwiaWF0IjoxNjYyMjkwNDk0fQ.6O9eCJUKklq3WPrUQrka2t50XJPV8K7GKwBf7VqdaAI',
      },
    })
      .then(response => response.json())
      .then(res => setLikeCount(Number(res.productlikeNumber[0].count)));
  }, []);

  useEffect(() => {
    fetch('http://10.58.5.139:3000/products/recent/watch/list', {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsInNvY2lhbF9pZCI6MjQwODQwMTQyNiwiaWF0IjoxNjYyMjkwNDk0fQ.6O9eCJUKklq3WPrUQrka2t50XJPV8K7GKwBf7VqdaAI',
      },
    })
      .then(response => response.json())
      .then(res => setLastestView(res.productRecentWatchList[0]));
  }, []);

  return (
    <S.NavAside>
      <S.NavAsideTop>
        <S.NavAsideTopLike>찜한상품</S.NavAsideTopLike>
        <S.NavAsideTopLikeCount>♥ {likeCount}</S.NavAsideTopLikeCount>
      </S.NavAsideTop>
      <S.NavAsideLastest>
        <S.NavAsideLastestText>최근 본 상품</S.NavAsideLastestText>
        <S.NavAsideLastestImageWrap
          onMouseEnter={() => setViewLastest(true)}
          onMouseLeave={() => setViewLastest(false)}
          viewLastest={viewLastest}
        >
          <S.NavAsideLastestImage
            src={lastestView.image_url}
            alt="AsideLastestImage"
          />
          {viewLastest && (
            <>
              <S.LastestName>{lastestView.name}</S.LastestName>
              <S.LastestPrice>
                ₩ {Number(lastestView.price).toLocaleString()}
              </S.LastestPrice>
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
