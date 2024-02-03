import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center items-center mx-auto mt-20">
      <form className="border rounded-lg  border-red-500 gap-y-3 px-6 py-3 border-black/45">
        <div className="flex flex-col  gap-y-2">
          <label htmlFor="name" className="font-semibold text-2xl ">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your name"
            className=" border active:outline outline-none px-3 py-2"
          />
        </div>
        <div className="flex flex-col mt-3 gap-y-2">
          <label htmlFor="name" className="font-semibold text-2xl ">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className=" border active:outline outline-none px-3 py-2"
          />
        </div>
        <div className="flex flex-col mt-3 gap-y-2">
          <label htmlFor="name" className="font-semibold text-2xl ">
            Password
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Enter Your Password"
            className=" border active:outline outline-none px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="mt-3 bg-red-500 px-3 py-2 rounded-lg text-center font-medium hover:bg-transparent border"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
