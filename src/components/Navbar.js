import React from "react";
import "./mystyle.css";

export default function Navbar() {
  return (
    <>
      <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-b-[#1f1f1f]">
        <div className="flex px-6 py-[22px] flex-1 items-center justify-between sm:justify-normal standardLaptop:px-[60px] finalBK:px-[80px]">
          <section className="flex items-center gap-4">
            <img
              src="https://www.spinachexperience.design/assets/header/Hamburger.svg"
              className="w-9 h-9 cursor-pointer hidden sm:block standardLaptop:w-10 standardLaptop:h-10 finalBK:w-12 finalBK:h-12"
              alt="hamburger"
            />
            <a href="/" className="flex items-center space-x-3 cursor-pointer">
              {/* <img
        src="./assets/header/LOGO.svg"
        class="w-6 h-8 object-contain xl:hidden"
        alt="Logo"
      /> */}
              <img
                src="https://www.spinachexperience.design/assets/header/Full_logo.svg"
                className="h-8 block standardLaptop:h-9"
                alt="Logo"
              />
            </a>
          </section>
          <ul className="hidden standardLaptop:flex list-none bg-[#1a1a1e] rounded-full items-center p-1 relative left-[45%] -translate-x-[80%]">
            <li className="py-[10px] px-[28px] rounded-full cursor-pointer text-base font-light text-white hover:bg-black hover:white">
              The Company
            </li>
            <li className="py-[10px] px-[28px] rounded-full cursor-pointer text-base font-light text-white flex gap-1 items-center hover:bg-black hover:white">
              Our Services
              <span>
                <img
                  src="https://www.spinachexperience.design/assets/header/Dropdown.svg"
                  className="w-3 h-1.5 text-white"
                />
              </span>
            </li>
            <li className="py-[10px] px-[28px] rounded-full cursor-pointer text-base font-light text-white hover:bg-black hover:white">
              Our Expertise
            </li>
            <li className="py-[10px] px-[28px] rounded-full cursor-pointer text-base font-light text-white hover:bg-black hover:white">
              Client Work
            </li>
          </ul>

          <button id="engage"
            class="emgage w-[150px] h-[50px] sm:block rounded-full text-center bg-black border border-white text-base font-normal text-white hover:text-black hover:bg-white transition hover:delay-150 hover:duration-200"
            style={{
              display: "flex",
              position: "relative",
              left: "40vw",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Engage Us
          </button>
          <div className="">
            {/* <button
      class="w-[150px] h-[50px] hidden sm:block rounded-full text-center bg-black border border-white text-base font-normal text-white hover:text-black hover:bg-white transition hover:delay-150 hover:duration-200"
    >
      Engage Us
    </button> */}
            <img
              src="https://www.spinachexperience.design/assets/header/Hamburger.svg"
              className="w-9 h-9 cursor-pointer block sm:hidden"
              alt="hamburger"
            />
          </div>
        </div>
      </nav>
      </>
  );
}
