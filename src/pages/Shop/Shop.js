import React, { useState, useEffect } from 'react';
import DetailContents from './DetailContents';
import * as S from './ShopStyle';
import { API } from '../../config';

function Shop() {
  const [activeTab, setActiveTab] = useState(1);
  const [shopInfo, setShopInfo] = useState({});

  const { user_id, social_id, product, follower, create } = shopInfo;

  const isFollowerNull = () => {
    if (follower === null) {
      return 0;
    } else {
      return follower;
    }
  };

  const isProductNull = () => {
    if (product === null) {
      return 0;
    } else {
      return product;
    }
  };

  const from = new Date(create);
  const today = new Date();
  const agoDate = today - from;
  const timeCalc = () => {
    const agoYear = parseInt(agoDate / 1000 / 60 / 60 / 24 / 30 / 12);
    const agoMonth = parseInt(agoDate / 1000 / 60 / 60 / 24 / 30);
    const agoDay = parseInt(agoDate / 1000 / 60 / 60 / 24);
    const agoHours = parseInt(agoDate / 1000 / 60 / 60);
    const agoMinutes = parseInt(agoDate / 1000 / 60);
    const agoSeconds = parseInt(agoDate / 1000);
    if (agoYear >= 1) return `${agoYear}년 전`;
    if (agoMonth >= 1) return `${agoMonth}달 전`;
    if (agoDay >= 1) return `${agoDay}일 전`;
    if (agoHours >= 1) return `${agoHours}초 전`;
    if (agoMinutes >= 1) return `${agoMinutes}분 전`;
    if (agoSeconds >= 1) return `${agoSeconds}시간 전`;
  };

  useEffect(() => {
    fetch(API.SHOP, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(response => response.json())
      .then(result => {
        setShopInfo(result.shopInfo[0]);
      });
  }, []);

  return (
    <S.ShopContainer>
      <S.ShopProfileBox>
        <S.ShopProfile>
          <S.Icon>
            <i className="fas fa-store" />
          </S.Icon>
          <S.Name>{social_id}</S.Name>
          <S.CountBox>
            <S.CountProduct>상품{isProductNull()}</S.CountProduct>
            <S.Bar>|</S.Bar>
            <S.CountFollower>팔로워{isFollowerNull()}</S.CountFollower>
          </S.CountBox>
        </S.ShopProfile>

        <S.ShopInfoBox>
          <S.ShopName>{social_id}</S.ShopName>
          <S.ShopInfo>
            <i className="fas fa-store-alt" />
            <S.ShopOpen>
              상점오픈일 <S.OpenFrom>{timeCalc()}</S.OpenFrom>
            </S.ShopOpen>
          </S.ShopInfo>
        </S.ShopInfoBox>
      </S.ShopProfileBox>

      <S.ShopDetailBox>
        <S.MenuBar>
          <S.MenuList>
            {MENU_LIST.map(({ id, name }) => {
              return (
                <S.MenuTab
                  key={id}
                  activeTab={activeTab === id}
                  onClick={() => setActiveTab(id)}
                >
                  {name}
                </S.MenuTab>
              );
            })}
          </S.MenuList>
        </S.MenuBar>

        <S.ShopDetail>
          <DetailContents activeTab={activeTab} user_id={user_id} />
        </S.ShopDetail>
      </S.ShopDetailBox>
    </S.ShopContainer>
  );
}
export default Shop;

const MENU_LIST = [
  { id: 1, name: '상품' },
  { id: 2, name: '상점후기' },
  { id: 3, name: '찜' },
  { id: 4, name: '팔로잉' },
];
