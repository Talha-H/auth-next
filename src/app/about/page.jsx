"use client"
import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const About = () => {

  const {data}=useSession({
    required:true, // fetch user data if session exists
    onUnauthenticated(){
      redirect("/api/auth/signin/github")
    }
  })

  return (
    <div className="mt-5">
      <h1 className="text-center text-5xl font-semibold uppercase ">
        {" "}
        Hello TAlha
      </h1>
      <h1 className="text-center text-2xl font-semibold uppercase ">
        This is about page
      </h1>
    </div>
  );
};

export default About;
