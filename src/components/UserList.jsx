import React from "react";
import UserCard from "./UserCard";
function UserList({ users }) {
  return (
    <div className="max-w-[120rem] flex  flex-row flex-wrap">
      {users.map((userItem) => (
        <UserCard key={userItem.id} user={userItem} {...userItem} />
      ))}
    </div>
  );
}

export default UserList;
