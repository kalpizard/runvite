import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = ({ setCurrUser }) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      localStorage.removeItem("token");
      localStorage.removeItem("data");
      setCurrUser(null);
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <div>
      <input type="button" value="Logout" onClick={handleClick} />
    </div>
  );
};

export default Logout;
