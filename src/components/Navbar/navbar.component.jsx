import React from 'react';
import NavLinks from "../Nav_links/nav_links.component";
import "./navbar.style.css";

let isOpen = false;

const Toggle1 = (y, x) => {
  console.log("closed");
  y.style.display = "none";
  x[0].style.transform = "none";
  x[1].style.opacity = "100";
  x[2].style.transform = "none";
  isOpen = false;
};
const Toggle2 = (y, x) => {
  console.log("open");
  y.style.display = "block";
  y.style.animation = "fade-in 1s ease-in";
  x[0].style.transform = "rotate(-45deg) translate(-5px,6px)";
  x[0].style.transition = "transform 0.4s ease-in";
  x[1].style.opacity = "0";
  x[1].style.transition = "opacity 0.2s ease-in";
  x[2].style.transform = "rotate(45deg) translate(-5px,-6px)";
  x[2].style.transition = "transform 0.4s ease-in";
  isOpen = true;
};

const handleClick = () => {
  const y = document.getElementById("drop-down");
  const x = document.getElementById("nav_parent").children;
  isOpen ? Toggle1(y, x) : Toggle2(y, x);
};

const Navbar = () => (
  <div className="block bg-gray-900 dark:bg-bluegray-800">
    <div className="h-16 text-gray-300 dark:text-white flex justify-between justify-items-center font-mono">
      <div className="text-2xl py-3 px-8 uppercase select-none tracking-widest">
        Navbar
      </div>
      <div className="hidden sm:flex text-lg py-3" id="lol">
        <NavLinks />
      </div>
      <div
        className="sm:hidden py-4 px-8 cursor-pointer"
        id="nav_parent"
        onClick={handleClick}
      >
        <div id="div1" className="h-1 w-6 m-1 bg-gray-300 dark:bg-bluegray-100"></div>
        <div id="div2" className="h-1 w-6 m-1 bg-gray-300 dark:bg-bluegray-100"></div>
        <div id="div3" className="h-1 w-6 m-1 bg-gray-300 dark:bg-bluegray-100"></div>
      </div>
    </div>
    <div
      className="hidden sm:hidden text-gray-300 dark:text-bluegray-200 text-lg py-3" 
      id="drop-down"
    >
      <NavLinks/>
    </div>
  </div>
);

export default Navbar;

