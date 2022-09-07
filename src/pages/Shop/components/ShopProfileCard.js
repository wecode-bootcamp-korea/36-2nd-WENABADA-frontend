import React from 'react';
import FollowBtn from './FollowBtn';
import styled from 'styled-components';

function ShopProfileCard({ user_id, social_id, product, follow }) {
  const isFollowNull = () => {
    if (follow === null) {
      return 0;
    } else {
      return follow;
    }
  };

  const isProductNull = () => {
    if (product === null) {
      return 0;
    } else {
      return product;
    }
  };

  return (
    <ShopProfileCardContainer>
      <Icon>
        <i className="fas fa-store" />
      </Icon>
      <Name>{social_id}</Name>
      <CountBox>
        <CountProduct>
          <span>상품</span>
          {isProductNull()}
        </CountProduct>
        <Bar>|</Bar>
        <CountFollower>
          <span>팔로워</span>
          {isFollowNull()}
        </CountFollower>
      </CountBox>
      <FollowBtn follow={follow} follow_id={user_id} />
    </ShopProfileCardContainer>
  );
}

export default ShopProfileCard;

const ShopProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 300px;
  margin-right: 13px;

  &:nth-child(4n + 1) {
    margin-right: 0;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background-color: whitesmoke;
  border-radius: 50%;

  i {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.div`
  margin-bottom: 15px;
`;

const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  font-size: 13px;
`;

const CountProduct = styled.div`
  width: 80%;
  text-align: right;
`;

const Bar = styled.div`
  text-align: center;
  width: 10%;
`;

const CountFollower = styled.div`
  width: 80%;
`;
