import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MopileMenu({ visible }) {
  if (!visible) return null;
  return (
    <div className="cursor-auto bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className=" cursor-pointer px-3 text-center text-white hover:underline">
          <NavLink to="/">Home</NavLink>
        </div>

        <div className="cursor-pointer px-3 text-center text-white hover:underline">
          <NavLink to="/series">Series</NavLink>
        </div>

        <div className="cursor-pointer px-3 text-center text-white hover:underline">
          <NavLink to="/mylist">My List</NavLink>
        </div>
      </div>
    </div>
  );
}

export default MopileMenu;
