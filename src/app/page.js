"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const AlertBtn = () => {
    alert("are you confirm");
  };
  return (
    <div className="flex  flex-col gap-y-3">
      <h1 className="text-6xl flex justify-center items-center mt-32 ">
        Hello Auth
      </h1>
      <div className="flex justify-center items-center gap-x-6 mt-3">
        <Link href={"/about"} className="text-3xl hover:underline">
          About Page
        </Link>
        <Link href={"/extra"} className="text-3xl hover:underline">
          Extra
        </Link>
        <Link href={"/user"} className="text-3xl hover:underline">
          USer Page
        </Link>
        <Link
          href={"http://localhost:3000/api/auth/signin/github"}
          onClick={AlertBtn}
          className="text-3xl hover:underline"
        >
          {" "}
          SIgnIn to github
        </Link>
      </div>
      <Link href={"/load"} className="text-3xl hover:underline text-center mt-3">
        Load
      </Link>
    </div>
  );
}
