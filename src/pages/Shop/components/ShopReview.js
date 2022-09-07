import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ShopReview({ id, name, social_id, review }) {
  const navigate = useNavigate();
  const goToProduct = id => {
    navigate(`/product/${id}`);
  };

  return (
    <ShopReviewContainer>
      <ReviewerIcon>
        <i className="fas fa-store" />
      </ReviewerIcon>
      <ReviewInfo>
        <ReviewerId>{social_id}</ReviewerId>
        <ReviewProduct onClick={() => goToProduct(id)}>
          <span>{name}</span>
          <i className="fas fa-chevron-right" />
        </ReviewProduct>
        <ReviewText>{review}</ReviewText>
      </ReviewInfo>
    </ShopReviewContainer>
  );
}

export default ShopReview;

const ShopReviewContainer = styled.div`
  display: flex;
  width: 1024px;
  padding: 30px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ReviewerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 30px;
  background-color: whitesmoke;
  border-radius: 50%;

  i {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.1);
  }
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReviewerId = styled.span``;

const ReviewProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
  margin: 15px 0;
  height: 30px;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 13px;

  i {
    color: rgba(0, 0, 0, 0.3);
  }

  &:hover {
    cursor: pointer;
  }
`;

const ReviewText = styled.p`
  font-size: 14px;
`;
