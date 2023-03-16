const ProfileCard = () => {
  const user = {
    id: 3,
    name: "Luz",
    lastName: "Bruen",
    prefix: "Miss",
    title: "Central Infrastructure Analyst",
    jobDescriptor: "National",
    jobArea: "Accountability",
    jobType: "Manager",
    email: "Dayne60@yahoo.com",
    ip: "254.77.74.121",
    imageUrl: "http://placeimg.com/640/480/animals",
    company: { name: "Wilderman and Sons", suffix: "Inc" },
    address: {
      zipCode: "90796-9837",
      city: "McKenziefort",
      streetAddress: "32975 O'Connell Way",
      country: "Micronesia",
      state: "Vermont",
    },
  }; //temporary user
  return (
    <div className="sm:w-[90vw] md:w-[90vw] lg:max-w-[120rem] xl:max-w-[120rem] flex  sm:flex-col lg:flex-row">
      <div
        className="border overflow-hidden min-h-[200px] max-h-[200px] sm:w-full lg:min-w-[260px] lg:max-w-[260px] lg:min-h-[200px]  bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${user.imageUrl}?v=${user.id})` }}
      >
        {/* <img
          className="user-image  w-full h-full"
          src={`${user.imageUrl}?v=${user.id}`}
          alt="user avatar"
        /> */}
      </div>

      <fieldset className="info border-2  p-4 border-[#999999] sm:w-full md:w-full lg:w-full">
        <legend className="block text-2xl w-[2.8rem] ">Info</legend>
        <div className="name-wrap px-4 py-1">
          <p className="user-name font-bold text-2xl">
            {" "}
            {user.prefix} {user.name} {user.lastName}
          </p>
        </div>
        <div className="title-wrap px-4 py-1">
          <p className="user-title font-light text-2xl italic">{user.title}</p>
          <p className="font-light text-2xl">Email: {user.email}</p>
          <p className="font-light text-2xl">Ip Address: {user.ip}</p>
          <p className="font-light text-2xl">Job Area: {user.jobArea}</p>
          <p className="font-light text-2xl">Job Type: {user.jobType}</p>
        </div>
      </fieldset>
      <fieldset className="address border-2  p-4 border-[#999999] sm:w-full md:w-full lg:w-full">
        <legend className="block text-2xl w-[5.5rem]">Address</legend>
        <p className="font-bold text-2xl">{user.company.name}</p>
        <p className="font-light text-2xl">City: {user.address.city}</p>
        <p className="font-light text-2xl">Country: {user.address.country}</p>
        <p className="font-light text-2xl">State: {user.address.state}</p>
        <p className="font-light text-2xl">
          Street Address: {user.address.streetAddress}
        </p>
        <p className="font-light text-2xl">ZIP: {user.address.zipCode}</p>
      </fieldset>
    </div>
  );
};

export default ProfileCard;
