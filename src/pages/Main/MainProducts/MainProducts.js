import React, { useState, useEffect } from 'react';
import Product from '../../../components/Product/Product';
import Carousel from './Carousel/Carousel';
import * as S from './styled.MainProducts';

function MainProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./data/product.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  useEffect(() => {
    localStorage.token
      ? fetch('http://10.58.5.139:3000/products/recommend/list', {
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token'),
          },
        })
          .then(res => res.json())
          .then(data => setProducts(data.productRecommendList))
      : fetch('http://10.58.5.139:3000/products/random/list')
          .then(res => res.json())
          .then(data => setProducts(data.productRandomList));
  }, []);

  return (
    <S.Area>
      <S.Container>
        <Carousel />
        <S.Title>오늘의 상품 추천</S.Title>
        <S.ProductContainer>
          {products.map(product => {
            return <Product key={product.id} {...product} />;
          })}
        </S.ProductContainer>
      </S.Container>
    </S.Area>
  );
}
export default MainProducts;
