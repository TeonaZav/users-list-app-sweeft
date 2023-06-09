import React, { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";

export const useUsersList = ({ baseUrl }) => {
  const [usersState, setUsersState] = useState({
    loading: false,
    pageSize: 20,
    users: [],
    currentPage: 1,
    nextPage: 2,
  });
  const mounted = useRef(false);
  const [newUsers, setNewUsers] = useState(false);

  const fetchUsers = useCallback(async () => {
    if (!usersState.nextPage) return;

    let url = `${baseUrl}/${usersState.currentPage}/${usersState.pageSize}`;

    setUsersState((prevState) => ({ ...prevState, loading: true }));
    const response = await axios(url).catch((error) => {
      setUsersState((prevState) => ({ ...prevState, loading: false }));
      console.log(error);
    });
    if (response) {
      if (response.data.list) {
        let data = response.data;
        console.log(data);
        setUsersState((prevState) => ({
          ...prevState,
          users: [...prevState.users, ...data.list],
          currentPage: data.pagination.current,
          nextPage: data.pagination.nextPage,
        }));
        setNewUsers(false);
        setUsersState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    }
  }, [usersState.currentPage, usersState.pageSize, baseUrl]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newUsers) return;
    if (usersState.loading) return;
    setUsersState((prevState) => ({
      ...prevState,
      currentPage: usersState.currentPage + 1,
    }));
  }, [newUsers]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
      setNewUsers(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  return [usersState, fetchUsers];
};
