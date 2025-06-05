import React from "react";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      {}
      <div>
        <div className="w-full px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 shadow-md rounded-lg flex justify-between items-center">
          {/* Logo + Brand */}
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/userReward.jpeg"
              alt="Website logo"
              className="w-[40px] h-[40px] rounded-full shadow-md"
            />
            <span className="text-xl font-semibold text-black-700">
              UserReward
            </span>
          </a>

          {/* Search Bar */}
          <div className="group relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-[180px] group-hover:w-[240px] transition-all duration-300 rounded-full bg-white px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm text-gray-700 text-sm"
            />
            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3"/>
              
            
          </div>
          {/* order button */}
        <button onClick={()=>alert("he")} className="bg-gradient-to-r from-purple-100 to-blue-200 hover:from-purple-200 hover:to-blue-300 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg rounded-full py-1 px-4"
><span>order</span></button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
