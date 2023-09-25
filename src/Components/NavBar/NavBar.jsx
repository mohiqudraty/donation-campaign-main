import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto flex flex-col gap-5 md:flex-row justify-between items-center py-10 px-6">
      <div>
        <img className="h-[72px]" src="/src/assets/Logo.png" alt="" />
      </div>
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
