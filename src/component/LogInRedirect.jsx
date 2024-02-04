import { signIn } from "next-auth/react";

import React from "react";

const LogInRedirect = () => {
  const handleLogIn = () => {
    signIn();
  };
  return (
    <>
      <p>You need to log in to access this page.</p>
      <button onClick={handleLogIn}>Log In</button>
    </>
  );
};

export default LogInRedirect;
