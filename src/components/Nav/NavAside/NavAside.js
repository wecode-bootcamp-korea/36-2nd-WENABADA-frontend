import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchValue, mainProductsData } from '../../../atom.js';
import { useResetRecoilState } from 'recoil';
import { API } from '../../../config';
import * as S from './NavAsideStyle.js';

function NavAside() {
  const navigate = useNavigate();
  const [viewLastest, setViewLastest] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [lastestView, setLastestView] = useState({});
  const setSearchValues = useResetRecoilState(searchValue);
  const setMainProductsDataState = useResetRecoilState(mainProductsData);

  useEffect(() => {
    fetch(API.ASIDE_LIKE_COUNT, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(res => setLikeCount(Number(res.productlikeNumber[0].count)));
  }, []);

  useEffect(() => {
    fetch(API.PATCH_LASTEST, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(res => setLastestView(res.productRecentWatchList[0]));
  }, []);

  const goToLastest = () => {
    setSearchValues();
    setMainProductsDataState();
    navigate(`/product/${lastestView.id}`);
  };

  return (
    <S.NavAside>
      <S.NavAsideTop>
        <S.NavAsideTopLike>찜한상품</S.NavAsideTopLike>
        <S.NavAsideTopLikeCount>
          ♥ {likeCount > 0 ? likeCount : 0}
        </S.NavAsideTopLikeCount>
      </S.NavAsideTop>
      <S.NavAsideLastest>
        <S.NavAsideLastestText>최근 본 상품</S.NavAsideLastestText>
        <S.NavAsideLastestImageWrap
          onMouseEnter={() => setViewLastest(true)}
          onMouseLeave={() => setViewLastest(false)}
          onClick={goToLastest}
          viewLastest={viewLastest}
        >
          <S.NavAsideLastestImage
            src={
              lastestView?.image_url === undefined
                ? '/images/noLastest.png'
                : lastestView.image_url
            }
            alt="AsideLastestImage"
          />
          {viewLastest && (
            <>
              <S.LastestName>
                {lastestView?.name === undefined
                  ? '최근 본 상품이 없습니다'
                  : lastestView.name}
              </S.LastestName>
              <S.LastestPrice>
                ₩{' '}
                {Number(
                  lastestView?.price === undefined ? '' : lastestView.price
                ).toLocaleString()}
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
