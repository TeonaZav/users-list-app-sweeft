const ProfileCard = ({ user }) => {
  return (
    <>
      <div className="sm:w-[90vw] md:w-[90vw] lg:max-w-[118rem] xl:max-w-[118rem] flex sm:flex-col lg:flex-row gap-[1rem] border mb-[3rem]">
        <div
          className="border overflow-hidden min-h-[20rem] max-h-[20rem] sm:w-full lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-[20rem] bg-cover bg-no-repeat bg-center mt-[1rem] shadow-xl rounded-lg"
          style={{ backgroundImage: `url(${user.imageUrl}?v=${user.id})` }}
        ></div>

        <fieldset className="info border p-4 border-[#999999] sm:w-full md:w-full lg:w-full">
          <legend className="block text-2xl w-[2.8rem] ">Info</legend>
          <div className="name-wrap px-4 mb-[1rem]">
            <p className="user-name font-bold text-2xl">
              {user.prefix} {user.name} {user.lastName}
            </p>
          </div>
          <div className="title-wrap px-4">
            <p className="user-title font-light text-2xl italic">
              {user.title}
            </p>
            <p className="font-light text-2xl">Email: {user.email}</p>
            <p className="font-light text-2xl">Ip Address: {user.ip}</p>
            <p className="font-light text-2xl">Job Area: {user.jobArea}</p>
            <p className="font-light text-2xl">Job Type: {user.jobType}</p>
          </div>
        </fieldset>

        <fieldset className="address border p-4 border-[#999999] sm:w-full md:w-full lg:w-full">
          <legend className="block text-2xl w-[5.5rem]">Address</legend>
          <p className="font-bold text-2xl mb-[1rem]">{user.company.name}</p>
          <p className="font-light text-2xl">City: {user.address.city}</p>
          <p className="font-light text-2xl">Country: {user.address.country}</p>
          <p className="font-light text-2xl">State: {user.address.state}</p>
          <p className="font-light text-2xl">
            Street Address: {user.address.streetAddress}
          </p>
          <p className="font-light text-2xl">ZIP: {user.address.zipCode}</p>
        </fieldset>
      </div>
    </>
  );
};

export default ProfileCard;
