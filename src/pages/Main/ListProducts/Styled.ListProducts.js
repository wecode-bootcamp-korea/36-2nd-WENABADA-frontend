import styled, { css } from 'styled-components';

export const Area = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 230px;

  background-color: #f9f9f9;
  padding-bottom: 150px;
`;

export const Container = styled.div`
  width: 1020px;
`;

export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px 20px 0px;
`;

export const HomeImg = styled.img`
  width: 15px;
  margin-right: 7px;
`;

export const Text = styled.div`
  font-size: 12px;
  margin-right: 7px;
`;

export const RightArrow = styled.img`
  height: 13px;
  margin-right: 10px;
`;

export const DropDown = styled.div`
  background-color: white;
  border: 1px solid #eeeeee;
  width: 154px;
  height: 28px;
  font-size: 12px;
  margin-right: 5px;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;
`;

export const ItemInfoBox = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
`;
export const Sequence = styled.div`
  font-weight: bold;
  padding: 0px 10px;
  border-right: 1px solid #cccccc;
  cursor: pointer;

  color: ${({ isCurrentSort }) => isCurrentSort && 'red'};

  & {
    :last-child {
      border-right: 0px;
    }
  }
`;

export const SequenceBox = styled.div`
  display: flex;
  font-size: 13px;
`;

export const ItemNum = styled.div`
  color: #888888;
`;

export const DropDownTitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const DropDownMenuBox = styled.div`
  background-color: white;
  width: 154px;
  position: relative;
  top: 1px;
  right: 1px;
  padding-bottom: 10px;
  border: 1px solid #eeeeee;
  border-top: 0px;
  div {
    &:first-child {
      padding-top: 8px;
    }
  }
`;

export const DropDownMenu = styled.div`
  padding-left: 10px;
  padding-top: 20px;
  :hover {
    color: red;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  margin-right: 8px;
`;

export const ProductContainer = styled.div`
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const PageNationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const PageNationNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 33px;
  height: 33px;
  border: 1px solid #9b99a9;
  color: #9b99a9;
  border-radius: 3px;
  font-weight: bold;
  margin-right: 12px;
  cursor: pointer;

  ${({ isCurrentPage }) =>
    isCurrentPage
      ? css`
          background-color: #ff5058;
          color: white;
        `
      : css`
          background-color: white;
          color: #9b99a9;
        `}
`;
