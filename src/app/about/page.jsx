"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LogInRedirect from "@/component/LogInRedirect";
import { redirect, useRouter } from "next/navigation";
import LogOut from "@/component/LogOut";

const About = () => {
  const router=useRouter()
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading....</>;
  }
  // if (status === "authenticated") {
  //   router.push("http://localhost:3000/api/auth/signout/github");
  // }
  if(!session){
    redirect("http://localhost:3000/api/auth/signin/github")
  }

  return (
    <div className="mt-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl ">Protected Page</h1>
        <p className="text-2xl">Welcome, {session.user.name}!</p>
        <LogOut/>
      </div>
    </div>
  );
};

export default About;
