import React, { useState, useCallback, useEffect, useRef } from "react";

export const useUsersList = ({ baseUrl }) => {
  const [usersState, setUsersState] = useState({
    loading: false,
    pageSize: 20,
    users: [],
    currentPage: 1,
  });
  const mounted = useRef(false);
  const [newUsers, setNewUsers] = useState(false);
  const fetchUsers = useCallback(async () => {
    let url = `${baseUrl}/${usersState.currentPage}/${usersState.pageSize}`;

    setUsersState((prevState) => ({ ...prevState, loading: true }));

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.list) {
        setUsersState((prevState) => ({
          ...prevState,
          users: [...prevState.users, ...data.list],
          currentPage: data.pagination.current,
        }));
        setNewUsers(false);
        setUsersState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
      // console.log(usersState.loading);
    } catch (error) {
      setUsersState((prevState) => ({ ...prevState, loading: false }));
      console.log(error);
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
