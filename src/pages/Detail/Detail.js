import React, { useState, useEffect } from 'react';
import * as S from './Styled.Detail';
import DropDown from '../../components/DropDown/DropDown';
import RelationCarousel from './RelationCarousel/RelationCarousel';
import { CATEGORY_LIST } from '../Main/ListProducts/CATEGORY_LIST';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
  const [isHeart, setIsHeart] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [itemRoot, setItemRoot] = useState([]);
  const { first, second, third } = itemRoot;

  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;

  const showReviews = reviews.slice(0, 2);
  const categoryName =
    CATEGORY_LIST[first]?.subcategory[second]?.subcategory[third]?.name;

  const [product, setProduct] = useState([]);

  // 상세 받아오기
  useEffect(() => {
    fetch(
      `http://10.58.5.86:3000/product/info?id=${productId}&userId=2408401426`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => setProduct(data[0]));
  }, [productId]);

  // 카테고리 받아오기/
  useEffect(() => {
    fetch(`http://10.58.5.86:3000/product/category?id=${productId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemRoot({
          first: (data[0].first + 1) % 2,
          second: (data[0].second + 1) % 2,
          third: (data[0].third + 1) % 2,
        });
      });
  }, [productId]);

  // 판매자 정보 (상품개수, 팔로워개수)
  useEffect(() => {
    fetch(`http://10.58.5.86:3000/product/seller/info?id=${productId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setUserInfo(data[0]));
  }, [productId]);

  // 판매자 상품
  useEffect(() => {
    fetch(`http://10.58.5.86:3000/product/seller/product?id=${productId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUserProducts(data.slice(0, 2));
      });
  }, [productId]);

  // 하트여부 받아오기
  useEffect(() => {
    fetch(
      `http://10.58.5.86:3000/product/checklike?id=${productId}&userId=2408401426`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        data.message === 'TRUE' ? setIsHeart(true) : setIsHeart(false);
      });
  }, [productId]);

  // 리뷰 받아오기
  useEffect(() => {
    fetch(`http://10.58.5.86:3000/product/seller/review?id=${productId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'REVIEW_NOT_EXIST') {
          return;
        } else {
          setReviews(data);
        }
      });
  }, [productId]);

  const productHeart = () => {
    if (isHeart) {
      setIsHeart(false);
      setProduct({ ...product, likes: product.likes - 1 });
    } else {
      setIsHeart(true);
      setProduct({ ...product, likes: product.likes + 1 });
    }
    fetch(
      `http://10.58.5.86:3000/product/like?id=${productId}&userId=2408401426`,
      {
        method: 'POST',
      }
    );
  };

  const rootDelivery = () => {
    navigate('/', {
      state: {
        itemRoot: itemRoot,
      },
    });
  };

  const pay = () => {
    alert('구매가 완료되었습니다.');
  };

  const price = Number(product.price).toLocaleString();

  if (itemRoot.length === 0) return;

  return (
    <S.Area>
      <S.Container>
        <DropDown itemRoot={itemRoot} setItemRoot={setItemRoot} />
        <S.ProductContainer>
          <S.ProductImgCover>
            <S.ProductImg src={product.image_url} />
          </S.ProductImgCover>
          <S.ProductInfoBox>
            <S.ProductName>{product.name}</S.ProductName>
            <S.ProductPrice>
              {price}
              <S.PriceCurrency>원</S.PriceCurrency>
            </S.ProductPrice>
            <S.ProductSideInfoBox>
              <S.MatchDataBox>
                <S.MatchDatas>
                  <S.MatchData>
                    <S.Icon src="/images/grayHeart.png" />
                    {product.likes}
                  </S.MatchData>
                  <S.MatchData>
                    <S.Icon src="/images/clock.png" />
                    {product.date}
                  </S.MatchData>
                </S.MatchDatas>
              </S.MatchDataBox>
              <S.ProductDataContainer>
                <S.ProducDataBox>
                  <S.DataKey>상품상태</S.DataKey>
                  중고
                </S.ProducDataBox>
                <S.ProducDataBox>
                  <S.DataKey>교환여부</S.DataKey>
                  교환불가능
                </S.ProducDataBox>
                <S.ProducDataBox>
                  <S.DataKey>배송비</S.DataKey>
                  <S.Delivery>배송비 별도</S.Delivery>
                </S.ProducDataBox>
                <S.ProducDataBox>
                  <S.DataKey>거래지역</S.DataKey>
                  {product.address}
                </S.ProducDataBox>
              </S.ProductDataContainer>
              <S.ProductBtnBox>
                <S.HeartBtn isHeart={isHeart} onClick={() => productHeart()}>
                  <S.Icon
                    src={
                      isHeart
                        ? '/images/RedHeart.png'
                        : '/images/WhiteHeart.png'
                    }
                    // onClick={() => ()}///
                  />
                  찜 {product.likes}
                </S.HeartBtn>
                <S.PayBtn onClick={() => pay()}>바로구매</S.PayBtn>
              </S.ProductBtnBox>
            </S.ProductSideInfoBox>
          </S.ProductInfoBox>
        </S.ProductContainer>
        <RelationCarousel productId={productId} />
        <S.BottomContainer>
          <S.DescriptionBox>
            <S.BottomTitle>상품정보</S.BottomTitle>
            <S.Description>{product.description}</S.Description>
            <S.SideContainer>
              <S.SideBox>
                <S.SideTitle>
                  <S.SideIcon src="/images/place.png" />
                  거래지역
                </S.SideTitle>
                <S.SideValue>{product.address}</S.SideValue>
              </S.SideBox>
              <S.SideBox>
                <S.SideTitle>
                  <S.SideIcon src="/images/list.png" />
                  카테고리
                </S.SideTitle>
                <S.CategoryBtn onClick={() => rootDelivery()}>
                  {categoryName}
                  <S.RightArrow src="/images/rightArrow.png" />
                </S.CategoryBtn>
              </S.SideBox>
            </S.SideContainer>
          </S.DescriptionBox>
          <S.StoreBox>
            <S.BottomTitle>상점정보</S.BottomTitle>
            <S.UserContainer>
              <S.UserArea>
                <S.UserImg src="/images/shop.png" />
                <S.UserBox>
                  <S.UserId>{userInfo.social_id}</S.UserId>
                  <S.UserInfoBox>
                    <S.Info>상품{userInfo.product}</S.Info>
                    <S.Info>팔로워{userInfo.follower}</S.Info>
                  </S.UserInfoBox>
                </S.UserBox>
              </S.UserArea>
              <S.StoreImgContainer>
                <S.StoreImgBox>
                  <S.StoreImg src={userProducts[0]?.image_url} />
                  <S.StorePrice>{userProducts[0]?.price}원</S.StorePrice>
                </S.StoreImgBox>
                <S.StoreImgBox>
                  <S.StoreImg src={userProducts[1]?.image_url} />
                  <S.StorePrice>{userProducts[1]?.price}원</S.StorePrice>
                </S.StoreImgBox>
              </S.StoreImgContainer>
              <S.TextContainer>
                <S.TextBox>
                  <S.NumberStyle>
                    {userInfo.product - userProducts.length}개
                  </S.NumberStyle>
                  상품 더보기
                  <S.RightArrow src="/images/rightArrow.png" />
                </S.TextBox>
              </S.TextContainer>
            </S.UserContainer>
            <S.ReviewContainer>
              <S.ReviewTitle>
                상점후기<S.NumberStyle>{reviews.length}</S.NumberStyle>
              </S.ReviewTitle>

              <S.ReviewCommentContainer>
                {reviews.length > 0 ? (
                  showReviews.map((review, idx) => {
                    return (
                      <S.ReviewCommentBox key={idx}>
                        <S.ReviewImg src="/images/shop.png" />
                        <S.ReviewUserBox>
                          <S.ReviewId>{review.social_id}</S.ReviewId>
                          <S.ReviewCommnet>{review.review}</S.ReviewCommnet>
                        </S.ReviewUserBox>
                      </S.ReviewCommentBox>
                    );
                  })
                ) : (
                  <S.ZeroReivewBox>
                    <div>
                      <div>등록된 후기가 없습니다.</div>
                      <div>첫 후기를 등록해보세요!</div>
                    </div>
                    <S.ZeroReivewButton>후기작성</S.ZeroReivewButton>
                  </S.ZeroReivewBox>
                )}
              </S.ReviewCommentContainer>
              {reviews.length > 0 && (
                <S.MoreReviewBox>
                  <S.MoreReview>
                    상점후기 더보기
                    <S.RightArrow src="/images/rightArrow.png" />
                  </S.MoreReview>
                </S.MoreReviewBox>
              )}
              <S.PayBtn>바로구매</S.PayBtn>
            </S.ReviewContainer>
          </S.StoreBox>
        </S.BottomContainer>
      </S.Container>
    </S.Area>
  );
}
export default Detail;
