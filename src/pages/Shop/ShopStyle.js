import styled from 'styled-components';

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`;

export const ShopProfileBox = styled.div`
  display: flex;
  border: 1px solid rgb(238, 238, 238);
`;

export const ShopProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 50%;

  i {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const Name = styled.span`
  margin-bottom: 20px;
`;

export const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CountProduct = styled.div`
  width: 80%;
  text-align: right;
`;

export const Bar = styled.div`
  text-align: center;
  width: 10%;
`;

export const CountFollower = styled.div`
  width: 80%;
`;

export const ShopInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 0 30px;
`;

export const ShopName = styled.h1`
  margin-top: 90px;
  margin-bottom: 30px;
  font-size: 30px;
`;

export const ShopInfo = styled.div`
  padding: 15px 0;
  margin-bottom: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  i {
    margin-right: 10px;
    color: red;
  }
`;

export const ShopOpen = styled.span`
  color: grey;
`;

export const OpenFrom = styled.span`
  color: black;
`;

export const ShopDetailBox = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: column;
`;

export const MenuBar = styled.div`
  margin: 30px 0;
`;

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuTab = styled.li`
  width: 25%;
  padding: 15px 0;
  color: gray;
  background-color: rgba(0, 0, 0, 0.05);
  font-size: 14px;
  font-weight: lighter;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid black;
  margin-right: -1px;
  cursor: pointer;

  ${({ activeTab }) =>
    activeTab &&
    `
  color: black; 
  background-color: white;
  font-weight: bold;
  border: 1px solid black;
  border-bottom: none;
  `}
`;

export const ShopDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
