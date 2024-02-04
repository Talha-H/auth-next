import React from "react";
import { signOut } from "next-auth/react";

const LogOut = () => {
  const handleOut = () => {
    signOut();
  };
  return (
    <div className="flex flex-col items-center ">
      <p>If you Wannna Sign Out Then Click On this btn. </p>
      <button
        className="px-2 py-1 border border-red-400 hover:text-red-400 mb-2"
        onClick={handleOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
