import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgSearch, CgBell, CgChevronDown } from "react-icons/cg";
//components
import NavbarItem from "./NavbarItem";
import MopileMenu from "./MopileMenu";
import AccountMenu from "./AccountMenu";
//assets
import logo from "../../assets/netflix_logo.svg";
import user_icon from "../../assets/user_icon.png.jpg";

function Navbar() {
  const [showMopileMenu, setShowMopileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const toggleAccountMenu = () => {
    setShowAccountMenu((current) => !current);
    setShowMopileMenu(false);
  };

  const toggleMopileMenu = () => {
    setShowMopileMenu((current) => !current);
    setShowAccountMenu(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 66) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className="w-full fixed z-50">
      <div
        className={`select-none px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        {/* logo */}
        <img src={logo} alt="logo" className="h-6 lg:h-7" />

        {/* navbar links */}
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" direction="/" />
          <NavbarItem label="Series" direction="/series" />
          <NavbarItem label="My List" direction="/mylist" />
        </div>

        <div className="lg:hidden flex flex-row gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <CgChevronDown
            onClick={toggleMopileMenu}
            className={`text-white transition ${
              showMopileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MopileMenu visible={showMopileMenu} />
        </div>

        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="flex flex-row ml-auto items-center gap-2 relative"
        >
          <input
            type="text"
            className="bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-red-600 transition text-white text-sm sm:text-base lg:w-64 px-2 py-1 w-32"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="text-gray-200 hover:text-gray-300 cursor-pointer transition text-xl"
          >
            <CgSearch />
          </button>
        </form>

        <div className="flex flex-row ml-4 gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition text-xl">
            <CgBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={user_icon} alt="user_icon" />
            </div>
            <CgChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
