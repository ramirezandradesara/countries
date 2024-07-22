"use client";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

type NavbarProps = {
  handleDark: () => void;
  dark: boolean;
};

const Navbar = ({ handleDark, dark }: NavbarProps) => {
  return (
    <nav className="bg-dark-blue h-20 flex items-center justify-between px-10 drop-shadow-md">
      <p className="dark:text-white font-extrabold text-base">
        Where in the world?
      </p>
      <div className="flex gap-2 items-center">
        <button onClick={handleDark}>
          {dark ? (
            <BsFillMoonStarsFill className="text-white" />
          ) : (
            <BsFillSunFill className="text-very-dark-blue" />
          )}
        </button>
        <p className="dark:text-white font-light text-sm hidden md:flex ">
          Dark mode
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
