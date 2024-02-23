
import React from "react";

const Input = ({ isLoggedIn, setIsLoggedIn }) => {
  const result = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={result}>
      <label htmlFor="username">Username:</label>
      <input id="username" />
      <label htmlFor="password">Password:</label>
      <input id="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Input;
