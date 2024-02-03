"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const AlertBtn=()=>{
    alert("are you confirm")
  }
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-6xl flex justify-center items-center mt-32 ">
        Hello Auth
      </h1>
      <Link
        href={"http://localhost:3000/api/auth/signin/github"}
        onClick={AlertBtn}
      >
        {" "}
        SIgnIn to github
      </Link>
    </div>
  );
}
