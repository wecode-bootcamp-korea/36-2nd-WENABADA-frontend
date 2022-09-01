import * as S from './PostCategorySelectStyle.js';

function PostCategorySelect({
  data,
  title,
  setSelectedCategory,
  selectedCategory,
  current,
  string,
  setString,
}) {
  const setCategory = (name, id, index) => {
    if (current === 'first') {
      setSelectedCategory({
        ...selectedCategory,
        [current]: index,
        second: -1,
        third: -1,
      });
      title === '카테고리'
        ? setString({ ...string, first: id, second: '', third: '' })
        : setString({ ...string, first: name, second: '', third: '' });
    } else if (current === 'second') {
      setSelectedCategory({
        ...selectedCategory,
        [current]: index,
        third: -1,
      });
      title === '카테고리'
        ? setString({ ...string, second: id, third: '' })
        : setString({ ...string, second: name, third: '' });
    } else {
      setSelectedCategory({
        ...selectedCategory,
        [current]: index,
      });
      title === '카테고리'
        ? setString({ ...string, third: id })
        : setString({ ...string, third: name });
    }
  };

  return (
    <S.PostCategorySelect>
      {data.map(({ name, id }, index) => (
        <S.PostCategoryName
          key={index}
          onClick={() => setCategory(name, id, index)}
          isSelected={selectedCategory[current] === index}
        >
          {name}
        </S.PostCategoryName>
      ))}
    </S.PostCategorySelect>
  );
}
export default PostCategorySelect;
