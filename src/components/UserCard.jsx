// @flow

const UserCard = ({
  userId,
  image,
  prefix,
  name,
  lastName,
  userTitle,
  user,
}) => {
  return (
    user && (
      <div className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 ">
        <div className="border m-4">
          <div className="w-full overflow-hidden ">
            <img
              className="user-image  overflow-hidden w-full"
              src={image}
              alt="user avatar"
            />
          </div>
          <div className="name-wrap px-4 py-1">
            <p className="user-name font-bold text-2xl">
              {prefix} {name} {lastName}
            </p>
          </div>
          <div className="title-wrap px-4 py-1">
            <p className="user-title font-light text-2xl">{userTitle}</p>
          </div>
        </div>
      </div>
    )
  );
};
export default UserCard;
