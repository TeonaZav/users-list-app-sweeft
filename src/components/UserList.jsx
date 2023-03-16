import React from "react";
import UserCard from "./UserCard";
function UserList({ users }) {
  return (
    <div className="max-w-[120rem] flex  flex-row flex-wrap">
      {users.map((userItem) => (
        <UserCard
          key={userItem.id}
          userId={userItem.id}
          image={userItem.imageUrl}
          prefix={userItem.prefix}
          name={userItem.name}
          lastName={userItem.lastName}
          userTitle={userItem.title}
          user={userItem}
        />
      ))}
    </div>
  );
}

export default UserList;
