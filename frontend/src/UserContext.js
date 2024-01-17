import { createContext, useEffect, useState } from "react";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from MySQL Database:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.columnName}</li> {/* Replace with your actual column name */}
        ))}
      </ul>
    </div>
  );
};
// Create a context for the User
export default UserContext;