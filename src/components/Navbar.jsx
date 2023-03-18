import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentPaths }) => {
  return (
    <>
      <header className="header h-[6.4rem] flex w-[100%] ] items-center justify-start gap-[2rem]">
        <div className="menu">
          <Link
            className="nav-link-main text-[#161616] text-4xl uppercase
            ml-[5rem]"
            to="/"
          >
            {currentPaths ? "< Home" : "Home"}
          </Link>
        </div>

        {currentPaths && (
          <div className="paths">
            <Link className="text-xl flex-wrap">{`< ${currentPaths.prefix} ${currentPaths.name} ${currentPaths.lastName} `}</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
