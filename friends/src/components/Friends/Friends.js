import React from "react";
import FriendsInput from "./FriendsInput";

const FriendsList = props => (
  <div className="list">
    {props.friends.map(friend => (
      <div key={friend.id}>
        <p>
          <span>Name:</span> {friend.name}
        </p>
        <p>
          <span>Age:</span> {friend.age}
        </p>
        <p>
          <span>Email:</span> {friend.email}
        </p>
        <span
          className="fas fa-trash-alt"
          onClick={() => props.deleteFriend(friend.id)}
        />
      </div>
    ))}
  </div>
);

export default FriendsList;
