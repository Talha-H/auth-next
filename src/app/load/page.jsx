import CardLoad from "@/component/CardLoad";
import React, { Suspense } from "react";

const Load = () => {
  return (
    <div>
      <h1>This is Loading PAge</h1>
      {/* <Suspense fallback={<loading />}> */}
        <CardLoad />
      {/* </Suspense> */}
    </div>
  );
};

export default Load;
