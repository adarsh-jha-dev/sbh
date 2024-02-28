import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Navlink from "./Navlink";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    { title: "Home", path: "/" },
    { title: "Scans", path: "/scan" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 bg-white bg-opacity-100">
      <div className="flex flex-wrap items-center justify-around mx-auto p-8">
        <Link className="md:text-4xl font-semibold text-black" to="/">
          StHealthy
        </Link>
        <div className="mobile-menu block md:hidden">
          <div className="flex justify-between items-center space-x-1">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <FaBars className="h-5 text-black w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <RxCross2 className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink path={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};

export default Navbar;
