import Features from "./features";
import Company from "./company";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Close from "./images/icon-close-menu.svg";
import Menu from "./images/icon-menu.svg";
function Nav() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <section className={open && "bg-black "}>
      <div className="p-2 fixed top-0 left-0 ">
        <div className="space-x-4 flex flex-row ">
          <span className="text-black text-xl md:text-2xl font-bold ">
            {" "}
            snap
          </span>
          <section className=" sm:flex flex-row xl:space-x-[50vw] lg:space-x-[42vw] md:space-x-[23vw] sm:space-x-[12vw] hidden  justify-between">
            <div>
              <ul className="flex flex-row space-x-2 justify-center items-center ">
                <li>
                  <Company />
                </li>
                <li>
                  <Features />
                </li>
                <li className=" text-xs md:text-sm font-medium hover:text-gray-400 text-black p-3">
                  <a href="/">Careers</a>
                </li>
                <li className=" text-xs md:text-sm font-medium hover:text-gray-400 text-black p-3">
                  <a href="/">About</a>
                </li>
              </ul>
            </div>

            <div className="space-x-3 items-center flex">
              <span>
                <a
                  className="hover:text-gray-400  text-xs md:text-sm font-medium text-black"
                  href="/"
                >
                  Login
                </a>
              </span>
              <span className="bg-white border-2 hover:text-gray-400 h-fit px-1 md:px-2 md:pb-1 text-black border-black rounded-md">
                <a className="  text-xs md:text-sm font-medium" href="/">
                  Register
                </a>
              </span>
            </div>
          </section>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-orange sm:hidden focus:outline-none hover:text-gray-500 hover:tex absolute top-4 right-4 z-[999]"
      >
        <span className="w-8 h-8   ">
          {/* {setOpen  <Menu /> : <Close />} */}
          {!open ? <FaBars /> : <FaTimes />}
        </span>
      </button>
      <div className=" sm:hidden transition ease-in-out duration-700    ">
        <div className={open ? "res items-start " : "hidden"}>
          <ul className={"flex flex-col justify-center items-start px-4"}>
            <li>
              <Company />
            </li>
            <li className="pt-1">
              <Features />
            </li>
            <li className=" text-sm font-medium hover:text-gray-400 pt-2 text-black ">
              <a href="/">Careers</a>
            </li>
            <li className=" text-sm font-medium hover:text-gray-400 pt-2 text-black ">
              <a href="/">About</a>
            </li>
            <li className="pt-3 self-center">
              <span>
                <a
                  className="hover:text-gray-400  text-sm font-medium text-black"
                  href="/"
                >
                  Login
                </a>
              </span>
            </li>
            <li className="pt-3 self-center">
              <span className="  bg-white border-2  hover:text-gray-400 h-fit px-7 py-1 text-black border-black rounded-xl">
                <a className="  text-sm font-medium" href="/">
                  Register
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Nav;
