import React from 'react';
import { FooterTopData, FooterLeftBottomData } from './FooterData.js';
import * as S from './FooterStyle';

function Footer() {
  return (
    <S.Footer>
      <S.FooterTop>
        <S.FooterTopWrap>
          {FooterTopData.map(({ id, text }) => {
            return (
              <S.FooterTopList key={id}>
                <S.FooterTopListText>{text}</S.FooterTopListText>
              </S.FooterTopList>
            );
          })}
        </S.FooterTopWrap>
      </S.FooterTop>
      <S.FooterMiddle>
        <S.FooterMiddleWrap>
          <S.FooterMiddleLeft>
            <S.FooterMiddleLeftTop>
              <S.FooterMiddleLeftTopHeader>
                WENABADA(주) 사업자 정보
              </S.FooterMiddleLeftTopHeader>
              <S.FooterMiddleLeftTopBody>
                대표이사 :
                문준기&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;개인정보보호책임자 :
                박승민
                <br />
                사업자등록번호 :
                113-45-45123&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;통신판매업신고
                : 2019-서울서초-1126
                <br />
                호스팅서비스 제공자 : Amazon Web Services (AWS)
                <br />
                EMAIL :
                wenabada@wnbd.co.kr&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;FAX :
                02-123-4321
                <br />
                주소 : 서울특별시 강남구 테헤란로 427, 위워크타워 10층 위코드
              </S.FooterMiddleLeftTopBody>
            </S.FooterMiddleLeftTop>
            <S.FooterMiddleLeftBottom>
              {FooterLeftBottomData.map(
                ({ id, buildingName, personName, shopNumber, address }) => (
                  <S.FooterMiddleLeftBottomWrap key={id}>
                    <S.FooterMiddleLeftBottomHeader>
                      <S.FooterMiddleLeftBottomHeaderSpan>
                        {buildingName}
                      </S.FooterMiddleLeftBottomHeaderSpan>{' '}
                      | {personName} | {shopNumber}
                    </S.FooterMiddleLeftBottomHeader>
                    <S.FooterMiddleLeftBottomBody>
                      {address}
                    </S.FooterMiddleLeftBottomBody>
                  </S.FooterMiddleLeftBottomWrap>
                )
              )}
            </S.FooterMiddleLeftBottom>
          </S.FooterMiddleLeft>
          <S.FooterMiddleRight>
            <S.FooterMiddleRightTop>
              <S.FooterMiddleRightTopFirst>
                고객센터 {'>'}
              </S.FooterMiddleRightTopFirst>
              <S.FooterMiddleRightTopSecond>
                1588 - 8282
              </S.FooterMiddleRightTopSecond>
              <S.FooterMiddleRightTopThird>
                운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시 - 13시)
              </S.FooterMiddleRightTopThird>
              <S.FooterMiddleRightTopFourth>
                <S.FooterMiddleRightTopFourthLI>
                  공지사항
                </S.FooterMiddleRightTopFourthLI>
                <S.FooterMiddleRightTopFourthLI>
                  1:1 문의하기
                </S.FooterMiddleRightTopFourthLI>
                <S.FooterMiddleRightTopFourthLI>
                  자주 묻는 질문
                </S.FooterMiddleRightTopFourthLI>
              </S.FooterMiddleRightTopFourth>
            </S.FooterMiddleRightTop>
            <S.FooterMiddleRightBottom>
              <S.FooterMiddleRightBottomHearder>
                개발은행 채무지급보증금 안내
              </S.FooterMiddleRightBottomHearder>
              <S.FooterMiddleRightBottomBody>
                WENABADA㈜는 MPMJ Digital”, MPMJ Lab”, MPMJ Lab 1”, MPMJ Lab 2”,
                MPMJ 컬렉션” 상점이 판매한 상품에 한해, 고객님이 현금 결제한
                금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를
                보장하고 있습니다.
              </S.FooterMiddleRightBottomBody>
              <S.FooterMiddleRightBottomFooter>
                Ⓒ WENABADA. Inc All rights reserved.
              </S.FooterMiddleRightBottomFooter>
            </S.FooterMiddleRightBottom>
          </S.FooterMiddleRight>
        </S.FooterMiddleWrap>
      </S.FooterMiddle>
      <S.FooterBottom>
        <S.FooterBottomWrap>
          <S.FooterBottomLeft>
            <S.FooterBottomLeftImage
              src="/images/security.png"
              alt="인증마크"
            />
            <S.FooterBottomLeftText>
              [인증범위] 번개장터 중고거래 플랫폼 서비스 운영(심사받지 않은
              물리적 인프라 제외)
              <br />
              [유효기간] 2021.05.18 ~ 2024.05.17
            </S.FooterBottomLeftText>
          </S.FooterBottomLeft>
          <S.FooterBottomRight>
            “BGZT Digital”, “BGZT Lab”, “BGZT Lab 1”, “BGZT Lab 2”, “BGZT
            컬렉션” 상점의 판매상품을 제외한 모든 상품들
            <br />에 대하여, 번개장터㈜는 통신판매중개자로서 중고거래마켓
            번개장터의 거래당사자가 아니며, 입점판매자가 등록한 상
            <br />
            품정보 및 거래에 대해 책임을 지지 않습니다.
          </S.FooterBottomRight>
        </S.FooterBottomWrap>
      </S.FooterBottom>
    </S.Footer>
  );
}
export default Footer;
