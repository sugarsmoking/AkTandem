import React from "react";
import { Link } from "react-router-dom";

const EverydayPage = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-center items-center h-dvh">
      <Link
        to={`/svakodnevnica/upis-skakaca`}
        className="my-1 bg-[#d3840e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>UPIS U AVION</h1>
      </Link>

      <Link
        to={`/svakodnevnica/ispis-startne-liste`}
        className="my-1 lg:mx-8 lg:mr-4 bg-[#d3840e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>ISPIS STARTNE LISTE</h1>
      </Link>
    </div>
  );
};

export default EverydayPage;
