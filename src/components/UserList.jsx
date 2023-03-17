import UserCard from "./UserCard";
import loadingAnimation from "../assets/loop.json";
import Lottie from "lottie-react";

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
          <Lottie animationData={loadingAnimation} />
        </div>
      ) : null}
    </div>
  );
}

export default UserList;
