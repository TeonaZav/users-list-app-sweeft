import UserCard from "./UserCard";
import loadingImage from "../assets/loading-6.gif";

function UserList({ users, loading }) {
  return (
    <div className="max-w-[120rem] flex  flex-row flex-wrap relative">
      {users.map((userItem, index) => (
        <UserCard
          key={`${userItem.id}_${index}`}
          user={userItem}
          {...userItem}
        />
      ))}
      {loading ? (
        <div className="loading-img fixed left-1/2 bottom-0 z-30 w-[30rem] translate-x-[-50%]">
          <p className="translate-x-[30%] text-5xl text-white">Loading...</p>
          <img src={loadingImage} alt="loading icon" />
        </div>
      ) : null}
    </div>
  );
}

export default UserList;
