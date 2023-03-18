import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#f6f6f9] p-[8rem] flex flex-col items-center justify-center">
      <h1 className="font-bold text-9xl">404</h1>;
      <h2 className="font-bold text-4xl">
        Webpage you're trying to reach can't be found
      </h2>
      <Link
        to="/"
        className=" inline-block bg-white px-8 py-4 mt-[4rem] rounded font-regular text-4xl"
      >
        HOME
      </Link>
    </div>
  );
};
export default ErrorPage;
