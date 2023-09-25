import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="container mx-auto flex flex-col gap-5 md:flex-row justify-between items-center py-10 px-6">
      <div>
        <img className="h-[72px]" src="/src/assets/Logo.png" alt="" />
      </div>
      <ul className="flex items-center gap-10">
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/donation"}>
          <li>Donation</li>
        </NavLink>
        <NavLink to={"/statistics"}>
          <li>Statistics</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
