import { NavLink } from "react-router-dom";

const UserCard = ({ user, id, imageUrl, prefix, name, lastName, title }) => {
  return (
    user && (
      <NavLink
        to={`/profile/${id}`}
        className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 "
      >
        <div className="border m-4">
          <div className="w-full overflow-hidden ">
            <img
              className="user-image  overflow-hidden w-full"
              src={`${imageUrl}?v=${id}`}
              alt="user avatar"
            />
          </div>
          <div className="name-wrap px-4 py-1">
            <p className="user-name font-bold text-2xl">
              {prefix} {name} {lastName}
            </p>
          </div>
          <div className="title-wrap px-4 py-1">
            <p className="user-title font-light text-2xl">{title}</p>
          </div>
        </div>
      </NavLink>
    )
  );
};

export default UserCard;
