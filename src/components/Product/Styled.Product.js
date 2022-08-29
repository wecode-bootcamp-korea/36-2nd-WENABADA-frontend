import styled from 'styled-components';

export const Container = styled.div`
  width: 194px;
  border: 1px solid #eeeeee;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: white;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 193px;
  height: 193px;
`;

export const Name = styled.div`
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 20px;
`;

export const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Won = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-left: 3px;
`;

export const Time = styled.div`
  color: #888888;
  font-size: 12px;
`;

export const InfoBox = styled.div`
  padding: 15px 10px;
`;

export const LocationBox = styled.div`
  padding: 14px 0px;
  position: relative;
  border-top: 1px solid #eeeeee;
`;

export const Location = styled.div`
  font-size: 12px;
  color: #666666;
  font-weight: bold;
  margin-left: 30px;
`;

export const Icon = styled.img`
  height: 15px;
  position: absolute;
  left: 10px;
  top: 12px;
`;
