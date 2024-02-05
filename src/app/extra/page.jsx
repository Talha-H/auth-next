"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LogInRedirect from "@/component/LogInRedirect";
import LogOut from "@/component/LogOut";
import { useRouter } from "next/navigation";

const Extra = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loadin....</div>;
  }
  // if (!session) {
  //   return <LogInRedirect />;
  // }
  if (status === "unauthenticated") {
    router.push("http://localhost:3000/api/auth/signin/github")
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome,{session.user.name}</p>
    </div>
  );
};

export default Extra;
