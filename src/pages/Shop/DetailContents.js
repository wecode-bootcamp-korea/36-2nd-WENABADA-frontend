import React, { useState } from 'react';
import ShopProduct from './components/ShopProduct';
import ShopReview from './components/ShopReview';
import LikeProduct from './components/LikeProduct';
import ShopProfileCard from './components/ShopProfileCard';
import styled from 'styled-components';

function DetailContents({ activeTab }) {
  const [product, setProduct] = useState([]);
  const [review, setReview] = useState([]);
  const [like, setLike] = useState([]);
  const [following, setFollowing] = useState([]);

  if (activeTab === 1) {
    fetch('http://10.58.5.86:3000/shop/product', {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        setProduct(res.myStoreProduct);
      });

    // MOCK_DATA용 fetch입니다.
    // fetch('http://localhost:3000/data/product.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     setProduct(res);
    //   });

    return (
      <Contents>
        <Title>
          상품<Count>{product.length}</Count>
        </Title>
        {product.length === 0 ? (
          <None>아직 등록한 상품이 없습니다. </None>
        ) : (
          product.map(el => {
            return (
              <ShopProduct
                key={el.id}
                id={el.id}
                name={el.name}
                create={el.create}
                price={el.price.toLocaleString()}
                image_url={el.image_url}
                location={el.location}
              />
            );
          })
        )}
      </Contents>
    );
  }

  if (activeTab === 2) {
    fetch('http://10.58.5.86:3000/shop/review', {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        setReview(res.myStoreReviewInfo);
      });

    // MOCK_DATA용 fetch입니다.
    // fetch('http://localhost:3000/data/review.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     setReview(res);
    //   });

    return (
      <Contents>
        <Title>
          상점후기<Count>{review.length}</Count>
        </Title>
        {review.length === 0 ? (
          <None>상점후기가 없습니다.</None>
        ) : (
          review.map(el => {
            return (
              <ShopReview
                key={el.id}
                id={el.id}
                name={el.name}
                social_id={el.social_id}
                review={el.review}
              />
            );
          })
        )}
      </Contents>
    );
  }

  if (activeTab === 3) {
    fetch('http://10.58.5.86:3000/shop/like', {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        setLike(res.myStoreLikeInfo);
      });

    // MOCK_DATA용 fetch입니다.
    // fetch('http://localhost:3000/data/like.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     setLike(res);
    //   });

    return (
      <Contents>
        <Title>
          찜<Count>{like.length}</Count>
        </Title>
        {like.length === 0 ? (
          <None>찜한 상품이 없습니다. </None>
        ) : (
          like.map(el => {
            return (
              <LikeProduct
                key={el.id}
                id={el.id}
                name={el.name}
                price={el.price.toLocaleString()}
                create={el.date}
                location={el.address}
                image_url={el.image_url}
              />
            );
          })
        )}
      </Contents>
    );
  }

  if (activeTab === 4) {
    fetch('http://10.58.5.86:3000/shop/following', {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        setFollowing(res.myStoreFollowingInfo);
      });

    // MOCK_DATA용 fetch입니다.
    // fetch('http://localhost:3000/data/following.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     setFollowing(res);
    //   });

    return (
      <Contents>
        <Title>
          팔로잉<Count>{following.length}</Count>
        </Title>
        {following.length === 0 ? (
          <None>아직 팔로우한 사람이 없습니다.</None>
        ) : (
          following.map(el => {
            return (
              <ShopProfileCard
                key={el.user_id}
                user_id={el.user_id}
                social_id={el.social_id}
                product={el.product}
                follow={el.follow}
              />
            );
          })
        )}
      </Contents>
    );
  }
}

const Title = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 20px;
`;

const Count = styled.span`
  color: red;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  width: 100%;
`;

const None = styled.div`
  margin-bottom: 100px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
`;

export default DetailContents;
