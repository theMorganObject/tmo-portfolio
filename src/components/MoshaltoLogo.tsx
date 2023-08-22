import React from "react";
import Link from "next/link";

export default function Moshalto() {
  return (
    <div className="absolute top-0 right-0 m-8">
      <Link
        href="https://moshalto.com/"
        className="grid grid-cols-2 grid-rows-2 gap-1"
        target="_blank"
      >
        {" "}
        <div className="bg-lime-7 bg-opacity-20 h-8 w-8 transform -skew-x-6 grid-row-1 grid-col-1 hover:bg-opacity-70 xs:h-6 xs:w-6 xl:h-12 xl:w-12"></div>
        <div className="bg-blue-3 bg-opacity-20 h-8 w-8 transform -skew-x-6 grid-row-1 grid-col-2 hover:bg-opacity-70 xs:h-6 xs:w-6 xl:h-12 xl:w-12"></div>
        <div className="bg-red-4 bg-opacity-20 h-8 w-8 transform -skew-x-6 grid-row-2 grid-col-1 hover:bg-opacity-70 xs:h-6 xs:w-6 xl:h-12 xl:w-12"></div>
        <div className="bg-gray-6 bg-opacity-20 h-8 w-8 transform -skew-x-6 grid-row-2 grid-col-2 hover:bg-opacity-70 xs:h-6 xs:w-6 xl:h-12 xl:w-12"></div>
      </Link>
    </div>
  );
}
