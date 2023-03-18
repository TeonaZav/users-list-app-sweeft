import React, { useEffect } from "react";
import UserList from "../components/UserList";
import { useUsersList } from "../hooks/useUsersList";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}user`;

function Home() {
  const [usersState, fetchUsers] = useUsersList({ baseUrl: BASE_URL });

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="home bg-[#f6f6f9] py-[2rem]">
      <UserList users={usersState.users} loading={usersState.loading} />
    </div>
  );
}

export default Home;
