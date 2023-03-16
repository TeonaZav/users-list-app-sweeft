import React, { useState, useEffect } from "react";

import UserList from "./components/UserList";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    let url = `${BASE_URL}/${currentPage}/${pageSize}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.list);
      console.log(data.list);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
