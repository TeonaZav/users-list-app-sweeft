import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import UserList from "../components/UserList";
import { useUsersList } from "../hooks/useUsersList";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Profile() {
  const [user, setUser] = useState(null);
  let { id } = useParams();
  const [usersState, fetchUsers] = useUsersList({
    baseUrl: `${BASE_URL}/${id}/friends`,
  });
  useEffect(() => {
    fetchUsers();
    getUser(id);
  }, [fetchUsers]);
  const getUser = useCallback(async (id) => {
    const response = await axios(`${BASE_URL}/${id}`).catch((error) => {
      console.log(error);
    });
    console.log(response.data);
    setUser(response.data);
    // try {
    //   const response = await fetch(`${BASE_URL}/${id}`);
    //   const data = await response.json();
    //   setUser(data);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);
  return (
    <div>
      {user && <ProfileCard user={user} />}

      <p>friends</p>
      <UserList users={usersState.users} loading={usersState.loading} />
    </div>
  );
}

export default Profile;
