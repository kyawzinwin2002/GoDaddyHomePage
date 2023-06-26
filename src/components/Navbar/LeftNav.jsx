import React, { useState } from "react";
import { SiGodaddy } from "react-icons/si";
import { useDispatch } from "react-redux";
import { MODAL } from "../../services/modalSlice";

const LeftNav = () => {
  const dispatch = useDispatch();

  const modalOneHandler = () => {
    dispatch(MODAL());
  };
  return (
    <div className=" flex items-center gap-5 ">
      {/* {LOGO} */}
      <div className=" flex items-center gap-2">
        <SiGodaddy className=" text-3xl font-semibold" />
        <h1 className=" text-2xl font-semibold">GoDaddy</h1>
      </div>

      {/* {NAV LISTS} */}

      <ul className=" flex gap-3 items-center">
        <li
          onClick={modalOneHandler}
          className=" text-lg font-medium hover:bg-[#5e5e5e]  px-3 py-3 rounded-md cursor-pointer select-none   "
        >
          Domain Names
        </li>
        <li className=" text-lg font-medium hover:bg-[#5e5e5e]  px-3 py-3 rounded-md cursor-pointer select-none">
          Websites & Hosting
        </li>
        <li className=" text-lg font-medium hover:bg-[#5e5e5e]  px-3 py-3 rounded-md cursor-pointer select-none">
          Email & Marketing
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
