import React from 'react';
import { REST_API_KEY, REDIRECT_URI } from './KaKaoData';
import * as S from './LoginStyle';

function Login({ setLoginModalOpen }) {
  const closeModal = () => {
    setLoginModalOpen(false);
  };

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLoginKakao = () => {
    window.location.replace(KAKAO_AUTH_URL);
  };

  return (
    <S.LoginModalBackground>
      <S.LoginModalContainer>
        <S.ExitBtn onClick={closeModal}>
          <S.ExitBtnImg alt="닫기버튼" src="/images/exitBtn.png" />
        </S.ExitBtn>
        <S.Logo>
          <S.LogoImg alt="번개로고" src="/images/thunderLogo.png" />
        </S.Logo>
        <S.Title>WENABADA로 중고거래 시작하기</S.Title>
        <S.SubTitle>간편하게 가입하고 상품을 확인하세요</S.SubTitle>
        <S.SubTitle>중고거래는 WENABADA에서 !</S.SubTitle>
        <S.KaKaoLogin onClick={handleLoginKakao}>
          <img
            alt="카카오로그인버튼"
            src="/images/kakao_login_medium_wide.png"
          />
        </S.KaKaoLogin>
        <S.LoginFooter>
          <S.LoginFooterInfo>
            도움이 필요하면 이메일 또는 고객센터 WENABADA로 문의 부탁드립니다.
          </S.LoginFooterInfo>
          <S.LoginFooterInfo>
            고객센터 운영시간: 09~18시 (점심시간 12시~13시, 주말/공휴일 제외)
          </S.LoginFooterInfo>
        </S.LoginFooter>
      </S.LoginModalContainer>
    </S.LoginModalBackground>
  );
}

export default Login;
