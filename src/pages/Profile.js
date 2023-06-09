import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import UserList from "../components/UserList";
import { useUsersList } from "../hooks/useUsersList";
import Navbar from "../components/Navbar";
import axios from "axios";

// const BASE_URL = `${process.env.REACT_APP_BASE_URL}user`;
const BASE_URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user`;
function Profile() {
  const [user, setUser] = useState(null);
  let { id } = useParams();
  const [usersState, fetchUsers] = useUsersList({
    baseUrl: `${BASE_URL}/${id}/friends`,
  });
  const [currentPath, setCurrentPath] = useState([]);

  useEffect(() => {
    fetchUsers();
    getUser(id);
  }, [fetchUsers]);
  const getUser = useCallback(async (id) => {
    const response = await axios(`${BASE_URL}/${id}`).catch((error) => {
      console.log(error);
    });
    setCurrentPath(response.data);
    setUser(response.data);
  }, []);

  return (
    <>
      <Navbar currentPaths={currentPath} />
      <div className="flex flex-col items-center border p-[1rem] bg-[#f6f6f9]">
        {user && <ProfileCard user={user} />}

        <p className="font-bold text-4xl self-start m-[1rem]">Friends :</p>
        <UserList users={usersState.users} loading={usersState.loading} />
      </div>
    </>
  );
}

export default Profile;
