import React from "react";
import logo from "../logo.png";
import { twMerge } from "tailwind-merge";

// export const HeaderColorMap = {
//   default: "bg-[#0170B9]",
//   green: "bg-[#669f1e]",
//   blue: "bg-[#0a2ab0]",
//   orange: "bg-[#d3840e]",
// };

export const Header = () => {
  return (
    <div className="flex justify-center items-center bg-[#0170B9]">
      <img
        src={logo}
        alt="Logo"
        className={twMerge("max-h-[86px] max-w-[272px] w-1/2 h-1/4")}
      />
    </div>
  );
};
