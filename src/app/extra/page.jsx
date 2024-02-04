"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import ExtraCompo from "@/component/ExtraCompo";
import LogInRedirect from "@/component/LogInRedirect";

const Extra = () => {
  const { data: session, status } = useSession();
  // Extra learning Purpose
  if (status === "authenticated") {
    return (
      <>
        <ExtraCompo></ExtraCompo>
      </>
    );
  }
  if (status === "loading") {
    return <div>Loadin....</div>;
  }
  if (!session) {
    redirect(LogInRedirect);
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome,{session.user.name}</p>
    </div>
  );
};

export default Extra;
