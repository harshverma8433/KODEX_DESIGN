import { RiArrowDownSLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MdAccountCircle } from "react-icons/md";


const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccount, setopenAccount] = useState(false);

  const handleLogout = async () => {
    try {
      const url = "http://localhost:4444/logout";
      const response = await axios.post(url, {}, { withCredentials: true });

      if (response.status === 200) {
        toast.success(response.data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error("Error while logging out!!!");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };


  return (
    <nav className="flex w-full justify-between space-x-3  pt-4 items-center font-sans">
      <div className="flex items-center w-[60%]">
        <Link to="/">
          <img
            src="../../../public/Logo2_2.png"
            alt="logo"
            className="w-44 pt-2 img1"
          />
        </Link>

        <Link to="/">
          <img
            src="../../../public/logo3.png"
            alt="logo"
            className="w-10 img2 mr-2"
          />
        </Link>

        <div id="searchbar">
          <div className="xl:flex sm:hidden xl:flex-row relative w-full">
            <input
              className="h-9 w-80 rounded-lg text-sm bg-zinc-800 text-white focus:outline-0 pl-8"
              placeholder="What do you want to learn today?"
              type="search"
              name="search"
              id="search"
            />
            <FiSearch className="absolute top-3 left-2 text-white text-bold" />
          </div>

          <div className="sm:ml-4 md:ml-0 xl:hidden relative sm:flex sm:flex-row sm:w-72 md:w-full">
            <input
              className="h-9 sm:w-80 md:w-[265px] rounded-lg bg-zinc-800 text-white focus:outline-0 px-8"
              placeholder="Search"
              type="text"
              name="search"
              id="search"
            />
            <FiSearch className="absolute top-3 left-2 text-white text-bold" />
          </div>
        </div>
      </div>

      <div className="flex bg items-center justify-end space-x-3 w-[50%]" id="services">
        <div className="flex items-center  font-sans space-x-1 text-sm text-white">
          {/* Add active class conditionally */}
          <Link
            to="/training"
            className={`px-4 text-md py-2 rounded-full ${location.pathname === "/training"
              ? "bg-col-5 navbar-link-active"
              : "bg-col-6"
              }`}
          >
            Trainings
          </Link>
          <Link
            to="/service"
            className={`px-4 text-md py-2 rounded-full ${location.pathname === "/service"
              ? "bg-col-5 navbar-link-active"
              : "bg-col-6"
              }`}
          >
            Services
          </Link>
          <Link
            to="/member"
            className={`px-4 text-md py-2 rounded-full ${location.pathname === "/member"
              ? "bg-col-5 navbar-link-active"
              : "bg-col-6"
              }`}
          >
            Connected Members
          </Link>

          {
  user ? (
    <div className="relative">
      <MdAccountCircle
        onClick={() => setopenAccount(!openAccount)}
        className="text-4xl cursor-pointer bg-col-7"
      />
      {openAccount && (
        <div className="absolute  bg-zinc-800 rounded-xl w-36 top-full mt-2">
          <div className="flex flex-col items-center">
            <h1
              className="py-3 rounded-t-xl w-full h-full hover:bg-zinc-900 cursor-pointer text-center"
            >
              {user.name}
            </h1>
            <button
              onClick={handleLogout}
              className="py-3 rounded-b-xl h-full cursor-pointer hover:bg-zinc-900 w-full text-center"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/login"
    className={`px-4 text-md py-2 rounded-full ${
      location.pathname === "/login" || location.pathname === "/register"
        ? "bg-col-5 navbar-link-active"
        : "bg-col-6"
    }`}>
      Log In
    </Link>
  )
}


        </div>

        {/* <div className="w-12 h-12 bg-gray-300 rounded-full"></div> */}
      </div>

      <div className="flex space-x-4">
        <div className="text-white" id="browse">
          <h1 className="text-white flex items-center gap-x-2">
            Browse <RiArrowDownSLine className="text-xl" />
          </h1>
        </div>

        <div id="ham" className="w-[50%]">
          <RxHamburgerMenu className="text-white text-2xl font-bold" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
