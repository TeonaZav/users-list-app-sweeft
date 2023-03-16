import React, { useState, useCallback } from "react";

export const useUsersList = ({ baseUrl }) => {
  const [usersState, setUsersState] = useState({
    loading: false,
    pageSize: 100,
    users: [],
    currentPage: 1,
  });

  const fetchUsers = useCallback(async () => {
    let url = `${baseUrl}/${usersState.currentPage}/${usersState.pageSize}`;

    setUsersState((prevState) => ({ ...prevState, loading: true }));
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsersState((prevState) => ({
        ...prevState,
        users: [...prevState.users, ...data.list],
        loading: false,
        currentPage: data.pagination.current,
      }));
      console.log(data);
    } catch (error) {
      setUsersState((prevState) => ({ ...prevState, loading: false }));
      console.log(error);
    }
  }, [usersState.currentPage, usersState.pageSize, baseUrl]);

  return [usersState, fetchUsers];
};
