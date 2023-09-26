import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="container mx-auto flex flex-col gap-5 md:flex-row justify-between items-center py-8 px-6">
      <Link to={"/"}>
        {" "}
        <img className="h-[72px]" src={logo} alt="Donation" />
      </Link>

      <ul className="flex items-center gap-10">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "text-lg font-bold underline text-[#FF444A]"
              : isPending
              ? "pending"
              : "text-lg"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/donation"}
          className={({ isActive, isPending }) =>
            isActive
              ? "text-lg font-bold underline text-[#FF444A]"
              : isPending
              ? "pending"
              : "text-lg"
          }
        >
          <li>Donation</li>
        </NavLink>
        <NavLink
          to={"/statistics"}
          className={({ isActive, isPending }) =>
            isActive
              ? "text-lg font-bold underline text-[#FF444A]"
              : isPending
              ? "pending"
              : "text-lg"
          }
        >
          <li>Statistics</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
