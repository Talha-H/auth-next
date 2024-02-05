"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const User = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading.....</>;
  }
  if(!session){
    redirect("http://localhost:3000/api/auth/signin/github")
  }
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center">
      <h1 className="text-3xl">User</h1>
      <p id="status" className="text-xl">{status} Page</p>
    </div>
  );
};

export default User;
