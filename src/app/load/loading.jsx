import React from "react";

const loading = () => {
  return (
    <>
      <div className="glimmer-panel flex flex-col justify-center items-center border border-dashed bg-bg-gradient rounded-md mt-5 p-3">
        <div className="glimmer-line block w-[60%] h-[20px] mt-3 rounded-md bg-[#f0f0f0]" />
        <div className="glimmer-line block w-[60%] h-[20px] mt-3 rounded-md bg-[#f0f0f0]" />
        <div className="glimmer-line block w-[60%] h-[20px] mt-3 rounded-md bg-[#f0f0f0]" />
      </div>
    </>
  );
};

export default loading;
