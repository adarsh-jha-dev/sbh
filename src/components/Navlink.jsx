import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="block md:m-2 sm:m-1 sm:text-xl rounded p-2 md:px-4 hover:bg-red-600 hover:rounded-full hover:text-white transition-all duration-300 ease-in-out"
    >
      {title}
    </Link>
  );
};

export default Navlink;
