import React, { useRef, useState } from 'react';
import * as S from './PostSetImageStyle.js';

function PostSetImage({ handleUpload }) {
  // 파일 업로드 INPUT의 주소
  const logoImageInput = useRef(null);

  // 미리보기 할 이미지 url
  const [imageSrc, setImageSrc] = useState('');

  // 미리보기를 위해 업로드한 이미지를 인코딩하는 함수
  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  // 주소(이미지 업로드 INPUT)로 이동하는 함수
  const onImgInputButtonClick = event => {
    event.preventDefault();
    logoImageInput.current.click();
  };

  return (
    <S.PostSetImage>
      <S.PostSetImageText>
        <S.PostSetImageTextSpan>상품이미지</S.PostSetImageTextSpan>*
      </S.PostSetImageText>
      <S.PostSetImageInputWrap>
        <S.PostSetImageInputButton onClick={onImgInputButtonClick}>
          {imageSrc.length > 1 ? (
            <S.PostPreviewImage src={imageSrc} alt="preview" />
          ) : (
            <div>
              <i className="fa-solid fa-camera fa-2xl" />
              <p>이미지 등록</p>
            </div>
          )}
        </S.PostSetImageInputButton>
        <S.PostSetImageInput
          ref={logoImageInput}
          type="file"
          accept="image/*"
          onChange={e => {
            encodeFileToBase64(e.target.files[0]);
            handleUpload(e);
          }}
        />
        <S.PostSetImageInputDescription>
          <S.PostSetImageInputDescriptionP>
            * 상품 이미지는 640x640에 최적화 되어 있습니다.
          </S.PostSetImageInputDescriptionP>
          - 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여집니다.{' '}
          <br />
          - 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다. <br />
          - 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다. <br />
          - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다. <br />- 큰
          이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다. <br />
          최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.( 개당
          이미지 최대 10M)
        </S.PostSetImageInputDescription>
      </S.PostSetImageInputWrap>
    </S.PostSetImage>
  );
}

export default PostSetImage;
