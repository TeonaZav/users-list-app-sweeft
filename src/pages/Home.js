import React, { useEffect } from "react";
import UserList from "../components/UserList";
import Navbar from "../components/Navbar";
import { useUsersList } from "../hooks/useUsersList";

// const BASE_URL = `${process.env.REACT_APP_BASE_URL}user`;
const BASE_URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user`;

function Home() {
  const [usersState, fetchUsers] = useUsersList({ baseUrl: BASE_URL });

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Navbar />
      <div className="home bg-[#f6f6f9] py-[2rem]">
        <UserList users={usersState.users} loading={usersState.loading} />
      </div>
    </>
  );
}

export default Home;
