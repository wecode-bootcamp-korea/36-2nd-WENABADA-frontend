import React from 'react';
import styled from 'styled-components';

function ShopProduct({ id, name, price, image_url, create, location }) {
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

  return (
    <ShopProductContainer>
      <ProductImgBox>
        <ProductImg alt="상품이름" src={image_url} />
      </ProductImgBox>
      <ProductName>{name}</ProductName>
      <ProductInfo>
        <ProductPrice>
          {price} <PriceUnit>원</PriceUnit>
        </ProductPrice>
        <ProductDate>{timeCalc()}</ProductDate>
      </ProductInfo>
      <ProductLocationBox>
        <i className="fas fa-map-marker-alt" />
        <ProductLocation>{location}</ProductLocation>
      </ProductLocationBox>
    </ShopProductContainer>
  );
}

export default ShopProduct;

const ShopProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-bottom: 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:nth-child(5n + 1) {
    margin-right: 0;
  }
`;

const ProductImgBox = styled.div`
  width: 193px;
  height: 193px;
`;

const ProductImg = styled.img`
  width: 193px;
  height: 193px;
  object-fit: cover;
`;

const ProductName = styled.div`
  width: 190px;
  padding: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ProductPrice = styled.div`
  font-weight: 800;
`;

const PriceUnit = styled.span`
  font-size: 13px;
`;

const ProductDate = styled.span`
  color: rgba(0, 0, 0, 0.3);
  font-size: 13px;
`;
const ProductLocationBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  i {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.2);
  }
`;

const ProductLocation = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
`;
