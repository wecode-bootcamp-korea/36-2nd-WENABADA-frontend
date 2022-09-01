import React from 'react';
import PostCategorySelect from './PostCategorySelect/PostCategorySelect.js';
import * as S from './PostCategoryStyle.js';

function PostCategory({
  CategoryData,
  selectedCategory,
  setSelectedCategory,
  title,
  string,
  setString,
}) {
  return (
    <S.PostCategory>
      <S.PostSetCategoryText>
        <S.PostSetCategoryTextSapn>{title}</S.PostSetCategoryTextSapn>*
      </S.PostSetCategoryText>
      <S.PostSetCategoryBodyWrap>
        <S.PostSetCategorySelectWrap
          style={
            selectedCategory.first > -1 && selectedCategory.third === -1
              ? { border: '1px solid #ff8800' }
              : null
          }
        >
          <PostCategorySelect
            data={CategoryData}
            title={title}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setString={setString}
            string={string}
            current="first"
          />
          {selectedCategory.first > -1 ? (
            <PostCategorySelect
              data={CategoryData[selectedCategory.first].category}
              title={title}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              string={string}
              setString={setString}
              current="second"
            />
          ) : (
            <S.PostNotSelected>중분류 선택</S.PostNotSelected>
          )}
          {selectedCategory.second > -1 ? (
            <PostCategorySelect
              data={
                CategoryData[selectedCategory.first].category[
                  selectedCategory.second
                ].category
              }
              title={title}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              string={string}
              setString={setString}
              current="third"
            />
          ) : (
            <S.PostNotSelected>소분류 선택</S.PostNotSelected>
          )}
        </S.PostSetCategorySelectWrap>
        <S.PostSetCategoryBodyFooterTop>
          {selectedCategory.first > -1 && selectedCategory.third === -1 ? (
            <span>세부 {title}를 선택하세요</span>
          ) : (
            ''
          )}
        </S.PostSetCategoryBodyFooterTop>
        <S.PostSetCategoryBodyFooterBottom>
          선택한 {title} :{' '}
          {selectedCategory.first > -1 && (
            <S.PostSetCategoryBodyFooterBottomSpan>
              {CategoryData[selectedCategory.first].name}
            </S.PostSetCategoryBodyFooterBottomSpan>
          )}{' '}
          {selectedCategory.second > -1 && selectedCategory.first > -1 && (
            <S.PostSetCategoryBodyFooterBottomSpan>
              {'>'}
              {
                CategoryData[selectedCategory.first].category[
                  selectedCategory.second
                ].name
              }
            </S.PostSetCategoryBodyFooterBottomSpan>
          )}{' '}
          {selectedCategory.third > -1 &&
            selectedCategory.second > -1 &&
            selectedCategory.first > -1 && (
              <S.PostSetCategoryBodyFooterBottomSpan>
                {'>'}
                {
                  CategoryData[selectedCategory.first].category[
                    selectedCategory.second
                  ].category[selectedCategory.second].name
                }
              </S.PostSetCategoryBodyFooterBottomSpan>
            )}
        </S.PostSetCategoryBodyFooterBottom>
      </S.PostSetCategoryBodyWrap>
    </S.PostCategory>
  );
}

export default PostCategory;
