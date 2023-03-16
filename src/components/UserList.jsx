import UserCard from "./UserCard";
function UserList({ users }) {
  return (
    <div className="max-w-[120rem] flex  flex-row flex-wrap">
      {users.map((userItem, index) => (
        <UserCard
          key={`${userItem.id}_${index}`}
          user={userItem}
          {...userItem}
        />
      ))}
    </div>
  );
}

export default UserList;
