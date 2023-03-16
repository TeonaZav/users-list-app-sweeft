// @flow

const UserCard = ({ user }) => {
  return (
    user && (
      <div key={user.id}>
        <div>
          <img className="user-image" src={user.imageUrl} alt="user avatar" />
        </div>
        <div className="name-wrap">
          <p className="user-name">
            {user.prefix} {user.name} {user.lastName}
          </p>
        </div>
        <div className="title-wrap">
          <p className="user-title">{user.title}</p>
        </div>
      </div>
    )
  );
};
export default UserCard;
