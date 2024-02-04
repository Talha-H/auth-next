"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import LogInRedirect from "@/component/LogInRedirect";
import LogOut from "@/component/LogOut";

const Extra = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loadin....</div>;
  }
  if (!session) {
   return<LogInRedirect/>
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome,{session.user.name}</p>
    </div>
  );
};

export default Extra;
