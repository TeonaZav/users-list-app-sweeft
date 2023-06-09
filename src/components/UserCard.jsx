import { NavLink } from "react-router-dom";

const UserCard = ({ user, id, imageUrl, prefix, name, lastName, title }) => {
  return (
    user && (
      <NavLink
        to={`/profile/${id}`}
        className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 sm:min-h-[25rem]"
      >
        <div className="border m-4 shadow-xl">
          <div className="w-full overflow-hidden rounded-sm shadow-sm">
            <img
              className="user-image  overflow-hidden w-full"
              src={`${imageUrl}?v=${id}`}
              alt="user avatar"
            />
          </div>
          <div className="sm:min-h-[7rem] md:h-[4rem]">
            <div className="name-wrap px-4 py-1">
              <p className="user-name font-bold text-2xl">
                {prefix} {name} {lastName}
              </p>
            </div>
            <div className="title-wrap px-4 py-1">
              <p className="user-title font-light sm:text-xl md:text-2xl">
                {title}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    )
  );
};

export default UserCard;
