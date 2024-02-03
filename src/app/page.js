import Image from "next/image";
import Form from "./component/form";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-6xl text-center ">Hello Auth</h1>
      <Form/>
    </div>
  );
}
