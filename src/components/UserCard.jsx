// @flow

const UserCard = ({ user }) => {
  return (
    user && (
      <div
        key={user.id}
        className="border sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 m-2.5"
      >
        <div className="w-full overflow-hidden ">
          <img
            className="user-image  overflow-hidden w-full"
            src={user.imageUrl}
            alt="user avatar"
          />
        </div>
        <div className="name-wrap px-4 py-1">
          <p className="user-name font-bold text-2xl">
            {user.prefix} {user.name} {user.lastName}
          </p>
        </div>
        <div className="title-wrap px-4 py-1">
          <p className="user-title font-light text-2xl">{user.title}</p>
        </div>
      </div>
    )
  );
};
export default UserCard;
