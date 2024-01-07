import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-center items-center h-dvh">
      <Link
        to={`/upisi`}
        className="bg-[#669f1e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>UPISI</h1>
      </Link>

      <Link
        to={`/`}
        className="my-2 lg:mx-8 bg-[#d3840e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>SVAKODNEVNICA</h1>
      </Link>

      <Link
        to={`/`}
        className="bg-[#0a2ab0] border-black border-2 rounded-md max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>ISPISI</h1>
      </Link>
    </div>
  );
};

export default MainPage;
