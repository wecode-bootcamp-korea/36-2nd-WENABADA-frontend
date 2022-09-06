import React from 'react';
import styled from 'styled-components';

function FollowBtn({ follow_id }) {
  const unFollow = follow_id => {
    fetch(`http://10.58.5.86:3000/shop/follow?followId=${follow_id}`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
    });
  };

  return (
    <Button onClick={() => unFollow(follow_id)}>
      <i className="fas fa-user" />
      <span>팔로우 취소</span>
    </Button>
  );
}

export default FollowBtn;

const Button = styled.button`
  width: 120px;
  height: 40px;
  color: red;
  background-color: inherit;
  border: 1px solid red;

  i {
    margin-right: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;
