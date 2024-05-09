import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Assignments</Link>
      </li>
      <li>
        <Link to="/">Create Assignments</Link>
      </li>
      <li>
        <Link to="/">Pending Assignments</Link>
      </li>
    </>
  );
  return (
    <div className="navbar h-[60px] min-h-[60px] bg-base-200 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="justify-end md:w-0 lg:w-[70%] hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold px-1">
          {navLinks}
        </ul>
      </div>
      <div className="justify-end flex gap-3 ml-5">
        <Link to="/login" className="btn min-h-10 h-10 bg-[#5FCF80] text-base">Login</Link>
        <Link to="/register" className="btn min-h-10 h-10 bg-[#5FCF80] text-base">Register</Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
          >
            <li>
              <Link to="/">My Attempted Assignments</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
