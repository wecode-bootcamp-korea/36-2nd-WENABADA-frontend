import React from 'react';
import * as S from './Styled.Product';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
function Product({ name, address, price, image_url, date, id }) {
  const navigate = useNavigate();
  const markedPrice = Number(price).toLocaleString();

  const createDate = new Date(date);
  const currentDate = new Date();
  const agoDate = currentDate - createDate;

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

  const goToDetail = () => {
    fetch(API.PATCH_LASTEST, {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: localStorage.getItem('token'),
      },
      method: 'PATCH',
      body: JSON.stringify({
        productId: id,
      }),
    });
    navigate(`/product/${id}`);
    window.scroll(0, 0);
  };

  return (
    <S.Container onClick={() => goToDetail()}>
      <S.Img src={image_url} alt="" />
      <S.InfoBox>
        <S.Name>{name}</S.Name>
        <S.SubInfo>
          <S.PriceBox>
            <S.Price>{markedPrice}</S.Price>
            <S.Won>원</S.Won>
          </S.PriceBox>
          <S.Time>{timeCalc()}</S.Time>
        </S.SubInfo>
      </S.InfoBox>
      {address && (
        <S.LocationBox>
          <S.Icon src="/images/place.png" />
          <S.Location>{address}</S.Location>
        </S.LocationBox>
      )}
    </S.Container>
  );
}
export default Product;
