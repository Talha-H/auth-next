import React from "react";
import { signOut } from "next-auth/react";

const LogOut = () => {
  const handleOut = () => {
    signOut();
  };
  return (
    <div>
      <p>You will sign out</p>
      <button onClick={handleOut}>Log Out</button>
    </div>
  );
};

export default LogOut;
