"use client";
import React from "react";
import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import LogInRedirect from "@/component/LogInRedirect";
// import LogOut from "@/component/LogOut";

const About = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading....</>;
  }
  // if (status === "authenticated") {
  //   router.push("http://localhost:3000/api/auth/signout/github");
  // }
  if (!session) {
    return <LogInRedirect />;
  }
  return (
    <div className="mt-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl ">Protected Page</h1>
        <p className="text-2xl">Welcome, {session.user.name}!</p>
      </div>
    </div>
  );
};

export default About;
