import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_bg, logo_light_bg, menu, close } from "../assets";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 dark:bg-primary bg-light_primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={isDarkMode ? logo_bg : logo_light_bg}
            alt="logo"
            className="w-16 h-16 object-contain"
          />
          <p className="dark:text-white text-[#4d4d4d] text-[18px] font-bold cursor-pointer flex">
            Frank &nbsp; <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "dark:text-white text-[#d1cdcd]"
                  : "dark:text-secondary text-[#4d4d4d]"
              } hover:dark:text-white hover:text-[#4d4d4d] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "dark:text-secondary text-light_secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-6">
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={isDarkMode}
          size={55}
        />
      </div>
    </nav>
  );
};

export default Navbar;
