import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-center items-center h-dvh">
      <Link
        to={`/upisi/clanovi`}
        className="my-1 bg-[#669f1e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>CLAN</h1>
      </Link>

      <Link
        to={`/upisi/avioni`}
        className="my-1 lg:mx-8 lg:mr-4 bg-[#669f1e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>AVION</h1>
      </Link>

      <Link
        to={`/upisi/aerodromi`}
        className="my-1 lg:mx-8 lg:ml-4 bg-[#669f1e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>AERODROM</h1>
      </Link>

      <Link
        to={`/upisi/skok`}
        className="my-1 bg-[#669f1e] border-black border-2 rounded-md max-w-[272px] w-1/2 max-h-32 h-1/4 flex justify-center items-center"
      >
        <h1>SKOK</h1>
      </Link>
    </div>
  );
};

export default MainPage;
