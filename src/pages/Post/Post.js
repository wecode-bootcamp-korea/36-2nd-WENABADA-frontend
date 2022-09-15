import React, { useState } from 'react';
import PostSetImage from './PostSetImage/PostSetImage.js';
import { CategoryData, AddressData } from './PostCategoryData.js';
import * as S from './PostStyle.js';
import PostCategory from './PostCategory/PostCategory.js';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';

function Post() {
  const navigate = useNavigate();
  const [files, setFiles] = useState('');
  const [inputValue, setInputValue] = useState({
    title: '',
    price: '',
    description: '',
  });
  const [selectedCategory, setSelectedCategory] = useState({
    first: -1,
    second: -1,
    third: -1,
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState({
    first: '',
    second: '',
    third: '',
  });
  const [selectedAddress, setSelectedAddress] = useState({
    first: -1,
    second: -1,
    third: -1,
  });
  const [selectedAddressString, setSelectedAddressString] = useState({
    first: '',
    second: '',
    third: '',
  });

  const handdleInput = evnet => {
    const check = /^[0-9]+$/;
    const { name, value } = evnet.target;
    if (name === 'price' && (check.test(value) || value === '')) {
      return setInputValue({ ...inputValue, [name]: value });
    } else if (name !== 'price') {
      return setInputValue({ ...inputValue, [name]: value });
    }
    alert('숫자만 입력하세요.');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();

    if (
      files.length < 1 ||
      inputValue.title.length < 2 ||
      selectedCategoryId.third.length < 1 ||
      selectedAddressString.third.length < 1 ||
      Number(inputValue.price) < 100 ||
      inputValue.description.length < 10
    ) {
      return alert('필수입력 항목을 작성해주세요.');
    }

    const addressString =
      selectedAddressString.first +
      ' ' +
      selectedAddressString.second +
      ' ' +
      selectedAddressString.third;

    formData.append('img', files.length && files[0].uploadedFile);
    formData.append('title', inputValue.title && inputValue.title);
    formData.append(
      'category',
      selectedCategoryId && JSON.stringify(selectedCategoryId)
    );
    formData.append('address', addressString && addressString);
    formData.append('price', inputValue.price && inputValue.price);
    formData.append(
      'description',
      inputValue.description && inputValue.description
    );
    formData.append('userId', 21);
    fetch(API.POST_PRODUCT, {
      method: 'POST',
      body: formData,
    });
  };

  const handleUpload = e => {
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
  };

  return (
    <S.Post
      enctype="multipart/form-data"
      onSubmit={e => {
        handleSubmit(e);
        navigate('/');
      }}
    >
      <S.PostWrap>
        <S.PostHearder>
          <S.PostHearderSpan>기본정보</S.PostHearderSpan>*필수항목
        </S.PostHearder>
        <PostSetImage handleUpload={handleUpload} />
        <S.PostSetTitle>
          <S.PostSetTitleText>
            <S.PostSetTitleTextSpan>제목</S.PostSetTitleTextSpan>*
          </S.PostSetTitleText>
          <S.PostSetTitleInputWrap>
            <S.PostSetTitleInput
              placeholder="상품 제목을 입력해주세요."
              name="title"
              value={inputValue.title}
              onChange={handdleInput}
              rows="1"
              size={inputValue.title.length}
              min={1}
              max={1}
            />
            <S.PostAlert size={inputValue.title.length} min={1} max={1}>
              상품 제목을 2글자 이상 입력해주세요.
            </S.PostAlert>
          </S.PostSetTitleInputWrap>
        </S.PostSetTitle>
        <PostCategory
          title="카테고리"
          CategoryData={CategoryData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          string={selectedCategoryId}
          setString={setSelectedCategoryId}
        />
        <PostCategory
          title="거래지역"
          CategoryData={AddressData}
          selectedCategory={selectedAddress}
          setSelectedCategory={setSelectedAddress}
          string={selectedAddressString}
          setString={setSelectedAddressString}
        />
        <S.PostSetPrice>
          <S.PostSetPriceText>
            <S.PostSetPriceTextSpan>가격</S.PostSetPriceTextSpan>*
          </S.PostSetPriceText>
          <S.PostSetPriceWrap>
            <S.PostSetPriceInputWrap>
              <S.PostSetPriceInput
                placeholder="숫자만 입력해주세요."
                name="price"
                value={inputValue.price}
                onChange={handdleInput}
                size={Number(inputValue.price)}
                min={1}
                max={100}
                rows="1"
              />
              <S.PostSetPriceInputWrapSpan>원</S.PostSetPriceInputWrapSpan>
            </S.PostSetPriceInputWrap>
            <S.PostAlert size={Number(inputValue.price)} min={1} max={100}>
              100원 이상 입력해주세요.
            </S.PostAlert>
          </S.PostSetPriceWrap>
        </S.PostSetPrice>
        <S.PostSetDescription>
          <S.PostSetDescriptionText>
            <S.PostSetDescriptionTextSpan>설명</S.PostSetDescriptionTextSpan>*
          </S.PostSetDescriptionText>
          <S.PostSetDescriptionInputWrap>
            <S.PostSetDescriptionInput
              rows="6"
              placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)"
              name="description"
              value={inputValue.description}
              onChange={handdleInput}
              size={inputValue.description.length}
              min={1}
              max={9}
            />
            {inputValue.description === '' && (
              <S.PostSetDescriptionInputText>
                안전하고 건전한 거래 환경을 위해 과학기술정보통신부,
                한국인터넷진흥원과 번개장터(주)가 함께 합니다.
              </S.PostSetDescriptionInputText>
            )}
            <S.PostAlert size={inputValue.description.length} min={1} max={9}>
              상품설명을 10글자 이상 입력해주세요.
            </S.PostAlert>
          </S.PostSetDescriptionInputWrap>
          <S.PostSubmit>
            <S.PostSubmitWrap>
              <S.PostSubmitbutton type="submit">등록하기</S.PostSubmitbutton>
            </S.PostSubmitWrap>
          </S.PostSubmit>
        </S.PostSetDescription>
      </S.PostWrap>
    </S.Post>
  );
}

export default Post;
