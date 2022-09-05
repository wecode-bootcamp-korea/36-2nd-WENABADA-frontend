import styled, { css } from 'styled-components';

export const Area = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 230px;
  padding-bottom: 1300px;
`;

export const Container = styled.div`
  width: 1020px;
`;

export const ProductContainer = styled.div`
  border-top: 1px solid black;
  padding: 30px 0px;
  display: flex;
`;

export const ProductImgCover = styled.div`
  height: 428px;
  width: 428px;
  margin-right: 40px;
`;

export const ProductImg = styled.img`
  width: 428px;

  height: 428px;
  object-fit: cover;
`;

export const ProductInfoBox = styled.div`
  width: 100%;
`;

export const ProductName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const ProductPrice = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const PriceCurrency = styled.span`
  font-size: 28px;
  font-weight: normal;
  margin-left: 3px;
`;

export const ProductSideInfoBox = styled.div`
  margin-top: 30px;
  padding-top: 10px;
  border-top: 1px solid #eee;
  width: 100%;
`;

export const MatchDataBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MatchDatas = styled.div`
  display: flex;
`;

export const MatchData = styled.div`
  display: flex;
  align-items: center;
  color: #cccccc;

  &:not(:last-child) {
    ::after {
      content: '';
      width: 1px;
      height: 12px;
      border-right: 1px solid #eeeeee;
      padding-right: 10px;
      margin-right: 10px;
    }
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 7px;
`;

export const MatchValue = styled.div``;

export const ProductDataContainer = styled.div`
  padding-top: 10px;
`;

export const ProducDataBox = styled.div`
  display: flex;
  margin-top: 25px;
  font-size: 14px;
`;

export const DataKey = styled.div`
  position: relative;
  width: 90px;
  color: #999999;
  padding-left: 10px;

  ::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    top: 4px;
    left: 1px;
    border-radius: 50%;
    background: #cccccc;
  }
`;

export const ProductBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const HeartBtn = styled.button`
  width: 265px;
  height: 56px;
  font-size: 18px;
  border: 0px;
  cursor: pointer;
  ${({ isHeart }) =>
    isHeart
      ? css`
          background-color: black;
          color: white;
        `
      : css`
          background-color: #cccccc;
          color: white;
        `}
`;

export const PayBtn = styled.button`
  background-color: #f70000;
  color: white;
  width: 265px;
  height: 56px;
  font-size: 18px;
  border: 0px;
  cursor: pointer;
`;

export const BottomContainer = styled.div`
  display: flex;
  border-top: 1px solid black;
  margin-top: 150px;
`;

export const DescriptionBox = styled.div`
  border-right: 1px solid #eeeeee;
  padding-right: 30px;
  width: 68%;
`;
export const BottomTitle = styled.div`
  margin-top: 50px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 16px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 14px;
  padding: 50px 0px;
`;

export const SideContainer = styled.div`
  padding: 30px 0px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  font-size: 13px;
`;

export const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 72px;
  &:not(:last-child) {
    border-right: 1px solid #eeeeee;
  }
`;

export const SideTitle = styled.div`
  color: #b2b2b2;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const SideIcon = styled.img`
  width: 18px;
  height: 17px;
  margin-right: 4px;
`;
export const SideValue = styled.div`
  color: #666666;
`;

export const RightArrow = styled.img`
  height: 9px;
  margin-left: 5px;
`;

export const CategoryBtn = styled.div`
  color: #666666;
  cursor: pointer;
`;

export const StoreBox = styled.div`
  border-right: 1px solid #eeeeee;
  width: 32%;
  padding: 0px 32px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

export const UserBox = styled.div``;
export const UserArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const UserId = styled.div`
  font-size: 14px;
  margin-bottom: 11px;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  cursor: pointer;
`;

export const UserInfoBox = styled.div`
  display: flex;
`;

export const Info = styled.div`
  font-size: 13px;
  color: #999999;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 7px;
    padding-right: 7px;
    border-right: 1px solid #eeeeee;
  }
`;

export const StoreImgContainer = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
`;

export const StoreImgBox = styled.div`
  position: relative;
  cursor: pointer;
  :first-child {
    margin-right: auto;
  }
`;

export const StoreImg = styled.img`
  width: 120px;
  height: 96px;
  cursor: pointer;
`;

export const StorePrice = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1px;
  color: white;
  background-color: black;
  opacity: 0.5;
`;

export const TextContainer = styled.div`
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  font-size: 13px;
  cursor: pointer;
`;

export const NumberStyle = styled.div`
  color: #f72f33;
  margin: 0px 2px;
`;

export const ReviewContainer = styled.div`
  padding: 5px 0px 16px 0px;
  font-size: 16px;
`;

export const ReviewTitle = styled.div`
  display: flex;
  color: #212121;
  margin-bottom: 15px;
`;

export const MoreReviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 35px;
  font-size: 13px;
  color: #666666;
  padding: 10px 0px;
`;

export const MoreReview = styled.div`
  cursor: pointer;
`;

export const ReviewCommentContainer = styled.div`
  margin-bottom: 20px;
  border-top: 1px solid #eeeeee;
`;

export const ReviewCommentBox = styled.div`
  display: flex;
  padding-top: 16px;
`;

export const ReviewImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  cursor: pointer;
`;

export const ReviewUserBox = styled.div``;

export const ReviewId = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #b2b2b2;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ReviewCommnet = styled.div`
  font-size: 13px;
  color: #888888;
  padding-bottom: 16px;
`;

export const Delivery = styled.div`
  color: #6e47ee;
`;

export const ZeroReivewBox = styled.div`
  font-size: 13px;
  color: #666666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  line-height: 15px;
  margin-top: 20px;
`;

export const ZeroReivewButton = styled.button`
  width: 80px;
  height: 32px;
  background-color: #b2b2b2;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
`;
