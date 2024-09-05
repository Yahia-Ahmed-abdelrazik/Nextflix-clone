import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavbarItem({ label, direction }) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition ">
      <NavLink className="nav-link" to={`${direction}`}>
        {label}
      </NavLink>
    </div>
  );
}

export default NavbarItem;
