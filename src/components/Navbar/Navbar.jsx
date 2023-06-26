import React, { useEffect, useState } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import "./Modal.css"
import { useSelector } from "react-redux";
const Navbar = () => {
  const modal = useSelector(state => state.modalSlice.modal)
  // console.log(modal)
  const [node,setNode] = useState(null)
  // console.log(node)
  useEffect(() => {
    const modalNode = document.getElementById("modalOne");
    setNode(modalNode)
  },[])
  if(modal){
    node?.classList.remove("modalOne")
    node?.classList.add("appear")
  }else{
     node?.classList.add("modalOne");
     node?.classList.remove("appear");
  }
  console.log(node)
  return (
    <div className=" relative">
      <div className=" flex py-2 px-10 justify-between z-50 text-white bg-[#2b2b2b] items-center">
        {/* {LEFT NAV} */}
        <LeftNav />

        {/* {RIGHT NAV} */}
        <RightNav />

        {/* {MODAL ONE} */}
      </div>
      <div id="modalOne" className=" h-screen">
        <div className=" w-[100vw] border border-gray-500 h-[60%] bg-white  "></div>
        <div id="blur" className=" h-[40%] "></div>
      </div>
    </div>
  );
};

export default Navbar;
