import React, { useEffect } from "react";
import UserList from "../components/UserList";
import { useUsersList } from "../hooks/useUsersList";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Home() {
  const [usersState, fetchUsers] = useUsersList({ baseUrl: BASE_URL });

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="App">
      <UserList users={usersState.users} />
    </div>
  );
}

export default Home;
