import styled from 'styled-components';

export const LoginModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 599;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const LoginModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 999;
  width: 420px;
  height: 450px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ExitBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ExitBtnImg = styled.img`
  width: 20px;
`;

export const Logo = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const LogoImg = styled.img`
  width: 35px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
`;

export const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const KaKaoLogin = styled.a`
  margin-top: 30px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const LoginFooter = styled.div`
  width: 350px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const LoginFooterInfo = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;
