import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from './KaKaoData';
import styled from 'styled-components';

function LoginLoading() {
  const location = useLocation();
  const navigate = useNavigate();

  const grant_type = 'authorization_code';
  const params = new URL(document.location).searchParams;
  const KAKAO_CODE = params.get('code');

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(response => response.json())
      .then(result => {
        if (result)
          fetch(`http://43.201.31.17:3000/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: result.access_token,
            },
          })
            .then(response => response.json())
            .then(result => {
              if (result.userToken) {
                localStorage.setItem('token', result.userToken);
                alert('로그인 성공!');
                navigate('/');
              } else {
                alert('로그인 실패ㅜㅠ');
              }
            });
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  });

  return (
    <Loading>
      <LoadingText>Welcome To WENABADA</LoadingText>
    </Loading>
  );
}

export default LoginLoading;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoadingText = styled.div`
  font-size: 20px;
  position: relative;
  overflow: hidden;
  animation: fadein 1s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;
