import React from "react";
import styled from "styled-components";

const FriendListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: palevioletred;
  width: 90%;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  margin: 10px auto;
  color: #fff;
`;

const Friends = props => {
  const friends = props.friends;
  const friendArr = friends.map(friend => (
    <div key={friend.id}>
      <p>
        <span>Name:</span>
        {friend.name}
      </p>
      <p>
        <span>Age:</span>
        {friend.age}
      </p>
      <p>
        <span>Email:</span>
        {friend.email}
      </p>
      <span
          className="fas fa-trash-alt"
          onClick={() => props.deleteFriend(friend.id)}
        />
    </div>
  ));
  return <FriendListDiv>{friendArr}</FriendListDiv>;
};

export default Friends;
