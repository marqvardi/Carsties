import React from "react";
import Search from "./Search";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md">
      <Logo />
      <Search />
      <div>Login</div>
    </header>
  );
};

export default Navbar;
