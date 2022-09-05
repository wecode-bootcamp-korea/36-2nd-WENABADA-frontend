import styled from 'styled-components';

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

export const DropDownSet = styled.div`
  display: flex;
  align-items: center;
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
