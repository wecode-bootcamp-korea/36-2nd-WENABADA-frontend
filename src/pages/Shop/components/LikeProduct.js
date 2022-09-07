import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LikeProduct({ id, name, price, create, location, image_url }) {
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

  const navigate = useNavigate();

  const goToProduct = id => {
    navigate(`/product/${id}`);
    window.scroll(0, 0);
  };

  return (
    <LikeProductContainer onClick={() => goToProduct(id)}>
      <ProductImgBox>
        <ProductImg alt="상품사진" src={image_url} />
      </ProductImgBox>
      <ProductInfo>
        <ProductInfoBox>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            {price} <PriceUnit>원</PriceUnit>
          </ProductPrice>
          <ProductTimestamp>{timeCalc()}</ProductTimestamp>
        </ProductInfoBox>
        <ProductLocationBox>
          <i className="fas fa-map-marker-alt" />
          <ProductLocation>{location}</ProductLocation>
        </ProductLocationBox>
      </ProductInfo>
    </LikeProductContainer>
  );
}

export default LikeProduct;

const LikeProductContainer = styled.div`
  display: flex;
  width: 490px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:nth-child(even) {
    margin-right: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ProductImgBox = styled.div`
  width: 138px;
  height: 138px;
`;

const ProductImg = styled.img`
  width: 138px;
  height: 138px;
  object-fit: cover;
`;

const ProductInfoBox = styled.div`
  padding: 15px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 363px;
`;

const ProductName = styled.div`
  margin-bottom: 12px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.div`
  margin-bottom: 12px;
  font-size: 17px;
  font-weight: 800;
`;

const PriceUnit = styled.span`
  font-size: 12px;
  font-weight: normal;
`;

const ProductTimestamp = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font-size: 13px;
`;

const ProductLocationBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  i {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.2);
  }
`;

const ProductLocation = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
`;
